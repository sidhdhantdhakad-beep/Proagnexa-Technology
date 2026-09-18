import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-badge">⚡ Let&apos;s Connect</div>
          <p className="contact-small-title">PROAGNEXA TECHNOLOGY</p>
          <h1>Let&apos;s Build Something<br /><span>Great Together.</span></h1>
          <p className="contact-hero-description">
            Have a project in mind, a question, or simply want to explore what&apos;s
            possible? Our team is ready to help you turn your ideas into powerful
            digital solutions.
          </p>
          <div className="contact-hero-buttons">
            <a href="#contact-form" className="contact-primary-btn">Send a Message <span aria-hidden="true">→</span></a>
            <a href="tel:+919876543210" className="contact-secondary-btn">📞 Call Us</a>
          </div>
        </div>

        <div className="contact-hero-visual" aria-label="Contact information">
          <div className="contact-orbit orbit-one" />
          <div className="contact-orbit orbit-two" />
          <div className="contact-main-circle">
            <div className="contact-big-icon" aria-hidden="true">💬</div>
            <strong>Let&apos;s Talk</strong>
            <span>We&apos;re here to help</span>
          </div>
          <div className="contact-floating-card contact-card-one"><span aria-hidden="true">📧</span><div><strong>Email Us</strong><small>hello@proagnexa.com</small></div></div>
          <div className="contact-floating-card contact-card-two"><span aria-hidden="true">📞</span><div><strong>Call Us</strong><small>+91 98765 43210</small></div></div>
          <div className="contact-floating-card contact-card-three"><span aria-hidden="true">📍</span><div><strong>Visit Us</strong><small>Indore, India</small></div></div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-section-heading">
          <p>GET IN TOUCH</p>
          <h2>We&apos;re Just a<br /><span>Message Away.</span></h2>
          <p className="contact-heading-description">Whether you need technical support, have a business inquiry, or want to discuss your next project, feel free to reach out.</p>
        </div>
        <div className="contact-info-grid">
          <div className="contact-info-card"><div className="contact-info-icon">📧</div><h3>Email Us</h3><p>Send us an email and our team will get back to you.</p><a href="mailto:hello@proagnexa.com"></a></div>
          <div className="contact-info-card"><div className="contact-info-icon">📞</div><h3>Call Us</h3><p>Talk directly with our team about your requirements.</p><a href="tel:+919876543210">+91 98765 43210</a></div>
          <div className="contact-info-card"><div className="contact-info-icon">📍</div><h3>Our Location</h3><p>Come visit our office and meet our team.</p><span>Indore, Madhya Pradesh, India</span></div>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-left">
          <p className="form-label">START A CONVERSATION</p>
          <h2>Tell Us About<br /><span>Your Project.</span></h2>
          <p>Fill out the form and tell us what you&apos;re looking to build. Our team will contact you shortly.</p>
          <div className="form-benefits"><div><span>✓</span>Quick Response</div><div><span>✓</span>Expert Consultation</div><div><span>✓</span>Tailored Solutions</div></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group"><label htmlFor="contact-name">Your Name</label><input id="contact-name" name="name" type="text" placeholder="Enter your name" required /></div>
            <div className="form-group"><label htmlFor="contact-email">Email Address</label><input id="contact-email" name="email" type="email" placeholder="Enter your email" required /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label htmlFor="contact-phone">Phone Number</label><input id="contact-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" /></div>
            <div className="form-group"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" placeholder="How can we help?" required /></div>
          </div>
          <div className="form-group"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="6" placeholder="Tell us about your project..." required /></div>
          <button type="submit" className="send-message-btn">{submitted ? 'Message Ready' : 'Send Message'} <span aria-hidden="true">→</span></button>
          {submitted && <p className="form-success" role="status">Thanks. We&apos;ll be in touch shortly.</p>}
        </form>
      </section>

      <section className="office-section">
        <div className="office-content">
          <p>VISIT OUR OFFICE</p>
          <h2>Come Say<br /><span>Hello.</span></h2>
          <p className="office-description">We&apos;d love to meet you. Visit our office, grab a coffee and let&apos;s talk about technology, ideas and possibilities.</p>
          <div className="office-address"><strong>📍 Proagnexa Technology</strong><span>Indore, Madhya Pradesh<br />India</span></div>
        </div>
        <div className="map-placeholder">
          <iframe
            className="map-embed"
            title="Proagnexa Technology location in Indore"
            src="https://www.google.com/maps?q=Indore%2C%20Madhya%20Pradesh%2C%20India&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-label"><strong>Proagnexa Technology</strong><span>Indore, India</span></div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
