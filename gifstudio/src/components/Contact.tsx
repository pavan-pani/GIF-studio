const Contact = () => (
  <section className="contact">
    <h1>Contact Us</h1>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <div className="contact-info">
      <p>Email: hello@GIF Studios.com</p>
      <p>Phone: +1-234-567-8901</p>
      <div className="socials">
        <span>🌐</span><span>📸</span><span>🐦</span>
      </div>
    </div>
  </section>
);

export default Contact;