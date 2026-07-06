import { useEffect, useRef, useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const images = [
  'Lenzora Flyer  (2).jpg',
  'DUAL DIPLOMA.jpg',
  'COCO kiss Foaming body Scrub (5).jpg',
  'COCO kiss Foaming body Scrub (4).jpg',
  'Blossom Product Launching.jpg',
  'BITS DIWALI.jpg',
  'ATI Dj Party.jpg',
  'APEX Spoken Sinhala .jpg',
  'APEX Spoken English A5_page-0001 (1).jpg',
  'Apex HND IT.jpg',
  'Apex HND IT (2).jpg',
  'APEX HND IT (1).jpg',
];

export default function Designs() {
  const sectionRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () => {
    setSelected((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setSelected((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="designs" className="section designs" ref={sectionRef}>
      <div className="container">
        <div className="designs__header animate-on-scroll">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Design Portfolio</h2>
          <p className="section-subtitle">
            Branding, social media creatives, flyers, and promotional materials
          </p>
        </div>

        <div className="designs__grid">
          {images.map((img, index) => (
            <div
              key={index}
              className="designs__card animate-on-scroll"
              onClick={() => setSelected(index)}
            >
              <img
                src={`/designs/${img}`}
                alt={`Design ${index + 1}`}
                className="designs__img"
                loading="lazy"
              />
              <div className="designs__overlay">
                <span>Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="designs__modal" onClick={() => setSelected(null)}>
          <button className="designs__modal-close" onClick={() => setSelected(null)}>
            <FiX size={24} />
          </button>
          <button className="designs__modal-nav designs__modal-nav--prev" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <FiChevronLeft size={28} />
          </button>
          <img
            src={`/designs/${images[selected]}`}
            alt={`Design ${selected + 1}`}
            className="designs__modal-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="designs__modal-nav designs__modal-nav--next" onClick={(e) => { e.stopPropagation(); next(); }}>
            <FiChevronRight size={28} />
          </button>
          <div className="designs__modal-counter">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
