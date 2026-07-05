import { useEffect, useRef } from 'react';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    role: 'Graphic Designer & Marketing Executive',
    company: 'APEX International College of Professional Studies',
    period: 'December 2025 – Present',
    highlights: [
      'Design social media posts, event flyers, course advertisements, banners, and branding materials.',
      'Create engaging visual content that strengthens brand identity and audience engagement.',
      'Produce promotional videos and edit marketing content for multiple digital platforms.',
      'Collaborate with marketing and academic teams to execute successful promotional campaigns.',
      'Manage multiple design projects while meeting deadlines in a fast-paced environment.',
      'Apply digital marketing strategies to improve online visibility, reach, and customer engagement.',
      'Strengthened leadership, communication, teamwork, and project management skills through real-world industry experience.',
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <div className="experience__header animate-on-scroll">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            Real-world experience building brands and digital presence
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__card animate-on-scroll">
              <div className="experience__card-line" />
              <div className="experience__card-dot" />
              <div className="experience__card-content">
                <div className="experience__card-header">
                  <div className="experience__card-icon">
                    <FiBriefcase />
                  </div>
                  <div>
                    <h3 className="experience__card-role">{exp.role}</h3>
                    <span className="experience__card-company">{exp.company}</span>
                  </div>
                </div>
                <div className="experience__card-period">
                  <FiCalendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <ul className="experience__card-list">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="experience__card-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
