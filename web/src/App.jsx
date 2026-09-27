import './styles.css';
import { BookingProvider } from './BookingContext.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './components/Hero.jsx';
import StatBar from './components/StatBar.jsx';
import ClientResults from './components/ClientResults.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Offer from './components/Offer.jsx';
import Founder from './components/Founder.jsx';
import BookCta from './components/BookCta.jsx';
import Footer from './components/Footer.jsx';
import BookModal from './components/BookModal.jsx';

function App() {
  return (
    <BookingProvider>
      <div style={{ position: 'relative' }}>
        <ScrollProgress />
        <Hero />
        <StatBar />
        <ClientResults />
        <HowItWorks />
        <Offer />
        <Founder />
        <BookCta />
        <Footer />
        <BookModal />
      </div>
    </BookingProvider>
  );
}

export default App;
