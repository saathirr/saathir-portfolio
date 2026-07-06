import { useEffect, useRef } from 'react';
import { FiArrowDown, FiMail, FiMapPin, FiPhone, FiExternalLink } from 'react-icons/fi';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__gradient hero__gradient--1" />
        <div className="hero__gradient hero__gradient--2" />
        <div className="hero__gradient hero__gradient--3" />
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="hero__particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero__content container">
        <div className="hero__info animate-on-scroll">
          <span className="hero__greeting">Hello, I&apos;m</span>
          <h1 className="hero__name">
            Mohammed
            <span className="hero__name-highlight"> Saathir</span>
          </h1>
          <p className="hero__tagline">
            Computing &amp; Software Engineering Student &bull; Web Developer &bull; UI/UX &amp; Graphic Designer
          </p>

          <div className="hero__contact">
            <div className="hero__contact-item">
              <FiMapPin className="hero__contact-icon" />
              <span>Sri Lanka</span>
            </div>
            <div className="hero__contact-item">
              <FiMail className="hero__contact-icon" />
              <a href="mailto:mohammedsaathir@gmail.com">mohammedsaathir@gmail.com</a>
            </div>
            <div className="hero__contact-item">
              <FiPhone className="hero__contact-icon" />
              <a href="tel:+94771736756">+94 77 173 6756</a>
            </div>
          </div>

          <div className="hero__social">
            <a
              href="https://behance.net/mohammedsaathir"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              <FiExternalLink /> Behance
            </a>
            <a
              href="https://linkedin.com/in/mohammed-saathir"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              <FiExternalLink /> LinkedIn
            </a>
          </div>

          <a href="#about" className="hero__cta">
            Explore My Work
            <FiArrowDown className="hero__cta-icon" />
          </a>
        </div>

        <div className="hero__visual animate-on-scroll">
          <div className="hero__image-frame">
            <div className="hero__image-glow" />
            <div className="hero__image-border" />
            <img src="/mypic.jfif" alt="Mohammed Saathir" className="hero__profile-img" />
            <div className="hero__image-shine" />
          </div>
          <div className="hero__floating-badge hero__floating-badge--1">
            <span className="hero__badge-dot" style={{ background: 'var(--accent-cyan)' }} />
            Web Development
          </div>
          <div className="hero__floating-badge hero__floating-badge--2">
            <span className="hero__badge-dot" style={{ background: 'var(--accent-purple)' }} />
            UI/UX Design
          </div>
          <div className="hero__floating-badge hero__floating-badge--3">
            <span className="hero__badge-dot" style={{ background: 'var(--accent-green)' }} />
            Graphic Design
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
