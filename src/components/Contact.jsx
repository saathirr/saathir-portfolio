import { useEffect, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiExternalLink, FiSend } from 'react-icons/fi';

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <div className="contact__header animate-on-scroll">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info animate-on-scroll">
            <div className="contact__card">
              <div className="contact__card-icon">
                <FiMail />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:mohammedsaathir@gmail.com">mohammedsaathir@gmail.com</a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <FiPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+94771736756">+94 77 173 6756</a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <FiMapPin />
              </div>
              <div>
                <h4>Location</h4>
                <p>Sri Lanka</p>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <FiExternalLink />
              </div>
              <div>
                <h4>Portfolio</h4>
                <a
                  href="https://behance.net/mohammedsaathir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  behance.net/mohammedsaathir
                </a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <FiExternalLink />
              </div>
              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/mohammed-saathir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/mohammed-saathir
                </a>
              </div>
            </div>
          </div>

          <form className="contact__form animate-on-scroll">
            <div className="contact__form-row">
              <input type="text" placeholder="Your Name" className="contact__form-input" />
              <input type="email" placeholder="Your Email" className="contact__form-input" />
            </div>
            <input type="text" placeholder="Subject" className="contact__form-input" />
            <textarea
              placeholder="Your Message"
              className="contact__form-input contact__form-textarea"
              rows={5}
            />
            <button type="submit" className="contact__form-btn">
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <p>&copy; {new Date().getFullYear()} Mohammed Saathir. All rights reserved.</p>
            <p>Designed &amp; Built with React</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
