import { useEffect, useRef } from 'react';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';

const educationData = [
  {
    degree: 'BTEC Higher National Diploma in Computing (Software Engineering)',
    institution: 'BCAS Campus',
    period: '2024 – 2026',
    icon: <FiBookOpen />,
  },
  {
    degree: 'Higher National Diploma in Information Technology (Reading)',
    institution: 'Sri Lanka Advanced Technological Institute (SLIATE)',
    period: '2025 – Present',
    icon: <FiBookOpen />,
  },
  {
    degree: 'Diploma in Information Technology & English',
    institution: 'BCAS Campus',
    period: '2024',
    icon: <FiAward />,
  },
  {
    degree: 'GCE Advanced Level – Engineering Technology Stream',
    institution: 'KM/Al-Ashraq MMV (National School)',
    period: '2023',
    icon: <FiAward />,
    note: 'Successfully completed the Engineering Technology stream with three passes.',
  },
];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="section education" ref={sectionRef}>
      <div className="container">
        <div className="education__header animate-on-scroll">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Building a strong foundation in computing and software engineering
          </p>
        </div>

        <div className="education__grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education__card animate-on-scroll">
              <div className="education__card-icon">{edu.icon}</div>
              <h3 className="education__card-degree">{edu.degree}</h3>
              <p className="education__card-institution">{edu.institution}</p>
              <div className="education__card-period">
                <FiCalendar size={14} />
                <span>{edu.period}</span>
              </div>
              {edu.note && <p className="education__card-note">{edu.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
