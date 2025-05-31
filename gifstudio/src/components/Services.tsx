import VideoIllust     from '../assets/video.svg';
import MarketingIllust from '../assets/marketing.svg';
import DesignIllust    from '../assets/design.svg';
import BrandIllust     from '../assets/brand.svg';
import MotionIllust    from '../assets/motion.svg';
import EventIllust     from '../assets/event.svg';

const Services = () => (
  <section className="services">
    <h1>Services That Sparkle</h1>

    <div className="service-grid">
      <article className="service-card">
        <img src={VideoIllust} alt="Video production illustration" />
        <h3>Video Production</h3>
        <p>
          Trailers, commercials, documentaries, live streams—
          filmed on RED 6K with Dolby Atmos sound design.
          <br/><em>Delivery: 4–6 weeks</em>
        </p>
      </article>

      <article className="service-card">
        <img src={MarketingIllust} alt="Creative marketing illustration" />
        <h3>Creative Marketing</h3>
        <p>
          Thumb-stopping TikTok ads, data-driven media buys,
          influencer collabs &amp; community management that converts   
          <strong> scrolls → sales</strong>.
        </p>
      </article>

      <article className="service-card">
        <img src={DesignIllust} alt="Graphic design illustration" />
        <h3>Graphic Design</h3>
        <p>
          Key art, OOH posters, AR filters, album covers—visual
          storytelling tailor-made for every touchpoint.
        </p>
      </article>

      <article className="service-card">
        <img src={BrandIllust} alt="Brand identity illustration" />
        <h3>Brand Identity</h3>
        <p>
          Naming, tone-of-voice, colour systems &amp; brand
          manuals that keep every pixel on-brand.
        </p>
      </article>

      <article className="service-card">
        <img src={MotionIllust} alt="Animation & motion illustration" />
        <h3>Animation & Motion</h3>
        <p>
          2D/3D animation, cel-animation, kinetic type and a sprinkle of
          Houdini magic—because static is stale.
        </p>
      </article>

      <article className="service-card">
        <img src={EventIllust} alt="Event coverage illustration" />
        <h3>Event Coverage</h3>
        <p>
          Multi-camera direction, drone ops and same-day edits that let
          audiences relive the hype before they leave the venue.
        </p>
      </article>
    </div>
  </section>
);

export default Services;
