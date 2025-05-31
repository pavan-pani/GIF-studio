
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} GIF Studios Studios. All rights reserved.</p>
      <div className="footer-socials">
        <span>🌐</span><span>📸</span><span>🐦</span>
      </div>
    </footer>
  );
}

export default Footer;