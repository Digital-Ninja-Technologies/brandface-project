import Reveal from './Reveal.jsx';
import VideoBox from './VideoBox.jsx';
import { useBooking } from '../BookingContext.jsx';

export default function Hero() {
  const { openModal } = useBooking();

  return (
    <header id="top" className="bf-hero">
      <div className="bf-hero-inner">
        <Reveal className="bf-badge">
          <span className="bf-badge-dot" />
          Content · Paid Ads · Automation for law firms
        </Reveal>

        <Reveal as="h1" delay={80}>
          We make your content.
          <span className="bf-italic-gold">Then we turn it into your ads.</span>
        </Reveal>

        <Reveal as="p" delay={140} className="bf-hero-sub">
          One of our attorneys now signs cases for about $200 in ad spend. We fly out, film you, publish 15 videos a
          month, and run them as your ads. Built for law firms in every practice area.
        </Reveal>

        <Reveal delay={200} className="bf-hero-ctas">
          <a
            href="#book"
            className="bf-btn-gold-lg"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Book your strategy call →
          </a>
        </Reveal>

        <Reveal delay={260} className="bf-video-frame bf-video-frame-hero">
          <VideoBox title="BrandFace Media breakdown" />
        </Reveal>

        <Reveal as="p" delay={300} className="bf-hero-watch-note">
          Want the full breakdown first? <span className="bf-watch-note-emphasis">It's 6 minutes.</span>
        </Reveal>
      </div>
    </header>
  );
}
