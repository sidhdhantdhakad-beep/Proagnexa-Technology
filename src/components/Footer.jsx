import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top CTA */}
      <div className="footer-cta">
        <div>
          <p className="footer-cta-label">LET'S BUILD TOGETHER</p>

          <h2>
            Have an idea?
            <br />
            <span>Let's make it happen.</span>
          </h2>
        </div>

        <a href="/contact" className="footer-cta-btn">
          Get Started
          <span>→</span>
        </a>
      </div>


      {/* Main Footer */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">

          <a href="/" className="footer-logo">
            <div className="footer-logo-icon">
              P
            </div>

            <div>
              <strong>Proagnexa</strong>
              <span>Technology</span>
            </div>
          </a>

          <p>
            We build innovative digital solutions that help
            businesses grow, scale and succeed in the modern
            digital world.
          </p>

          {/* Social */}
          <div className="footer-socials">

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>

          </div>

        </div>


        {/* Quick links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/career">Career</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy-policy">Privacy Policy</a>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>Services</h3>

          <a href="/services#service-01">DevOps &amp; Cloud Services</a>
          <a href="/services#service-02">Cloud Consulting &amp; Managed Services</a>
          <a href="/services#service-03">Web Application Development</a>
          <a href="/services/mobile-application-development">Mobile Application Development</a>

        </div>

        {/* Agency Partnership */}
        <div className="footer-column">

          <h3>Agency Partnership</h3>

          <a href="/services#service-05">White-Label Development Services</a>
          <a href="/services#service-06">Dedicated Developers</a>
          <a href="/services#service-07">DevOps &amp; Cloud Partnership</a>
          <a href="/services#service-08">Maintenance &amp; Support Services</a>
          <a href="/services#service-09">Custom Solutions &amp; White-Label SaaS</a>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Get In Touch</h3>

          <div className="footer-contact-item">
            <span>📍</span>
            <p>
              Indore, Madhya Pradesh
              <br />
              India
            </p>
          </div>

          <div className="footer-contact-item">
            <span>📧</span>
            <a href="mailto:hello@proagnexa.com">
            Proagnexa Technology@gmail.com
            </a>
          </div>

          <div className="footer-contact-item">
            <span>📞</span>
            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Proagnexa Technology.
          All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <a href="/terms">
            Terms & Conditions
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;