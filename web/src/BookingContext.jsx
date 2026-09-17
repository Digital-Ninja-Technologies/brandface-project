import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  // Shared across the popup and the on-page booking section: once the lead has been
  // sent to the GHL webhook from either one, both skip the form and show the scheduler,
  // so nobody is asked to fill it in twice or submitted to GHL twice.
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const markLeadSubmitted = useCallback(() => setLeadSubmitted(true), []);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, closeModal]);

  return (
    <BookingContext.Provider value={{ modalOpen, openModal, closeModal, leadSubmitted, markLeadSubmitted }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within a BookingProvider');
  return ctx;
}
