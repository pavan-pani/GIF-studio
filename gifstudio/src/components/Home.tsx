import StoryIllust     from '../assets/story-hero.svg';
import WorkflowIllust  from '../assets/workflow.svg';
import CultureIllust   from '../assets/culture.svg';

const Home = () => (
  <section className="home">
    <div className="hero animated-hero">
      <h1 className="headline">Unleash Bold Creativity</h1>
      <p  className="subtext">
        Entertainment. Marketing. Identity. All in one frame.
      </p>
      <button className="cta-button">Get Started</button>
    </div>

    <div className="story split">
      <div className="split__img">
        <img src={StoryIllust} alt="Illustration of GIF Studios’s origin story" />
      </div>
      <div className="split__txt">
        <h2>Our Story</h2>
        <p>
          GIF Studios started as a two-person garage studio obsessed with <em>motion</em>
          and <em>emotion</em>. Ten years later, we’re a 60-strong collective of
          filmmakers, designers, strategists, musicians and technologists—
          united by one belief: <strong>stories move the world.</strong>
        </p>
        <p>
          From viral TikTok shorts to 8-episode OTT originals, our work touches
          <span className="pink"> 75 million+</span> viewers every single month.
          Yet, we still brainstorm on sticky-notes, celebrate first drafts, and
          high-five when the coffee machine pings.
        </p>
      </div>
    </div>

    <div className="workflow split reverse">
    <div className="split__img">
      <img src={WorkflowIllust} alt="GIF Studios Workflow Illustration" />
    </div>
    <div className="split__txt">
      <h2>The GIF Studios Workflow</h2>

      <ol>
        <li>
          <strong>Initiation — Discover.</strong><br />
          We dive deep into your world—your audience, goals, market trends, and brand vibe.
          Through interviews, research, and audits, we identify the foundation for breakthrough ideas.
        </li>
        <li>
          <strong>Planning — Dream.</strong><br />
          Creative thinking begins. We brainstorm directions, sketch out storyboards, gather references,
          and build mood-boards. This is the imagination phase—where potential takes shape.
        </li>
        <li>
          <strong>Execution — Design.</strong><br />
          Concepts turn into structured outputs. We develop scripts, style frames, sound cues, visual assets,
          layouts, and creative systems ready for production or campaign launch.
        </li>
        <li>
          <strong>Control — Develop.</strong><br />
          Our team brings it to life—through video shoots, motion graphics, development, sound design,
          animation, or coding. Each piece is refined and reviewed for alignment and quality.
        </li>
        <li>
          <strong>Closure — Deploy.</strong><br />
          Final delivery, publishing, and performance tracking. We roll out content across platforms,
          analyze impact, iterate quickly, and arm you with everything needed to keep growing.
        </li>
      </ol>

      <p>
        Every phase is collaborative and fully transparent. From Day 1, your team joins our Slack,
        shares input, and watches your project evolve in real time.
      </p>
    </div>
  </div>


    <div className="culture-of-wow split">
  <div className="split__img">
    <img src={CultureIllust} alt="Culture of Wow Illustration" />
  </div>
  <div className="split__txt">
    <h2>Culture of Wow</h2>

    <p>
      At GIF Studios, “Wow” isn’t a final product — it’s a culture we build into every step. We believe that bold, original, and emotional creative work happens when curiosity and excellence collide.
    </p>

    <ul>
      <li>
        <strong>Curiosity First:</strong> Every brief begins with questions. We listen, explore, and push boundaries before putting pen to paper or pixel to screen.
      </li>
      <li>
        <strong>No Copy-Paste:</strong> We don’t recycle ideas. Every solution is crafted from scratch to reflect your brand’s voice and vision.
      </li>
      <li>
        <strong>Craft Obsessed:</strong> We obsess over details—colors, motion, typography, pacing, tone. The little things that make the big “wow.”
      </li>
      <li>
        <strong>Surprise & Delight:</strong> We aim to go beyond expectations. Not just with great design, but with how we collaborate and communicate.
      </li>
      <li>
        <strong>Energy You Can Feel:</strong> Whether it’s a pitch deck or a product video, our work carries rhythm, energy, and an unmistakable spark.
      </li>
    </ul>

    <p>
      When clients say “Wow!”, it’s not just because the work looks good — it’s because it feels right. That’s the culture we live by.
    </p>
  </div>
</div>


    {/* Existing “Why Choose”, “Testimonials”, etc. remain below */}
  </section>
);

export default Home;
