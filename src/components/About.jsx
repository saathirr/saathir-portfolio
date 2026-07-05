import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Graphic Design', level: 88 },
  { name: 'Python', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'Figma', level: 82 },
];

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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

  return (
    <section id="about" className={`section about ${visible ? 'about--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-tag animate-on-scroll">About Me</span>
            <h2 className="section-title animate-on-scroll">Turning Ideas Into Digital Reality</h2>
            <p className="section-subtitle animate-on-scroll">
              Passionate and motivated Computing and Software Engineering student with a strong
              interest in Web Development, UI/UX Design, Graphic Design, Artificial Intelligence,
              and Machine Learning. Skilled at combining creativity with technical expertise to
              develop modern, user-friendly, and visually engaging digital solutions.
            </p>
            <p className="section-subtitle animate-on-scroll">
              Experienced in designing product labels, social media creatives, promotional materials,
              branding assets, and responsive websites. Possesses strong problem-solving abilities,
              attention to detail, and a commitment to delivering high-quality work.
            </p>
            <p className="section-subtitle animate-on-scroll">
              A quick learner and collaborative team player who enjoys exploring emerging
              technologies and continuously improving technical and creative skills. Seeking
              opportunities to contribute innovative ideas while growing as a Full-Stack Web
              Developer and Creative Designer.
            </p>
          </div>

          <div className="about__skills animate-on-scroll">
            <h3 className="about__skills-title">Technical Skills</h3>
            <div className="about__skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="about__skill-item">
                  <div className="about__skill-header">
                    <span className="about__skill-name">{skill.name}</span>
                    <span className="about__skill-percent">{skill.level}%</span>
                  </div>
                  <div className="about__skill-bar">
                    <div
                      className={`about__skill-fill ${visible ? 'about__skill-fill--animate' : ''}`}
                      style={{ '--skill-level': `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
