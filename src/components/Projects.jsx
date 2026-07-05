import { useEffect, useRef } from 'react';
import { FiFolder, FiCpu, FiGlobe, FiDatabase, FiEye } from 'react-icons/fi';

const projects = [
  {
    title: 'Smart Bridge & Flood Monitoring System',
    subtitle: 'IoT',
    tech: ['ESP32', 'Ultrasonic Sensor', 'Embedded Systems', 'IoT'],
    icon: <FiCpu />,
    highlights: [
      'Developed an IoT-based Smart Bridge & Flood Monitoring System that monitors water levels in real time.',
      'Implemented automatic road-blocking functionality when water reaches dangerous levels, ensuring public safety without manual intervention.',
      'Integrated LED indicators and an alarm buzzer to provide instant visual and audio alerts.',
      'Designed the system to automatically restore road access once water levels return to a safe range.',
      'Inspired by a real-life flood tragedy, with the goal of preventing accidents through smart automation and early warning systems.',
    ],
  },
  {
    title: 'Smart Travel',
    subtitle: 'Digital Travel Planning Assistant',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: <FiGlobe />,
    highlights: [
      'Developed a full-stack travel planning web application designed to help tourists plan trips efficiently.',
      'Implemented secure user registration, authentication, destination browsing, and travel management features.',
      'Built an administrative dashboard for managing destinations, bookings, and customer information.',
      'Focused on creating a responsive, user-friendly interface and improving the travel planning experience.',
    ],
  },
  {
    title: 'Online Prescription Management System',
    subtitle: 'Web Development',
    tech: ['Web Development', 'PHP', 'MySQL'],
    icon: <FiDatabase />,
    highlights: [
      'Designed and developed an online prescription management system for a coding competition.',
      'Enabled secure management of digital prescriptions and patient information.',
      'Implemented authentication, data management, and efficient record handling features.',
    ],
  },
  {
    title: 'Real-Time Sign Language Detection Using Hand Gestures',
    subtitle: 'Research Project',
    tech: ['AI', 'Machine Learning', 'Computer Vision', 'CNN'],
    icon: <FiEye />,
    highlights: [
      'Conducted research on real-time sign language recognition using hand gesture detection.',
      'Explored Convolutional Neural Networks (CNN) and computer vision techniques for gesture classification.',
      'Focused on improving communication accessibility for people with hearing and speech impairments.',
      'Studied existing research papers and AI models to evaluate detection accuracy and real-time performance.',
    ],
  },
];

export default function Projects() {
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
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <div className="projects__header animate-on-scroll">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Academic &amp; Personal Projects</h2>
          <p className="section-subtitle">
            Real-world solutions built with passion — from IoT safety systems to AI research
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="projects__card animate-on-scroll">
              <div className="projects__card-icon">{project.icon}</div>
              <h3 className="projects__card-title">{project.title}</h3>
              <span className="projects__card-subtitle">{project.subtitle}</span>

              <div className="projects__card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="projects__tech-tag">{t}</span>
                ))}
              </div>

              <ul className="projects__card-list">
                {project.highlights.map((item, i) => (
                  <li key={i} className="projects__card-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
