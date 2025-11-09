import React from "react";
import "./About.css";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and performant web applications with modern technologies.",
  },
  {
    title: "API Development",
    description: "Creating robust and scalable APIs for seamless integration.",
  },
  {
    title: "Database Design",
    description:
      "Designing efficient database schemas and optimization strategies.",
  },
];

const frontendSkills = [
  "React.js & TypeScript",
  "Next.js & Vite",
  "TailwindCSS & SCSS",
  "Redux & Context API",
  "Responsive Design",
];
const backendSkills = [
  "Node.js & Express",
  "RESTful APIs",
  "MongoDB & PostgreSQL",
  "AWS & Cloud Services",
];

export default function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1 className="about-title">About Me</h1>

        <div className="about-content-wrapper">
          <p className="about-paragraph">
            I am a passionate Full Stack Developer with expertise in building
            modern, scalable web applications. My journey in software
            development has equipped me with a comprehensive understanding of
            both frontend and backend technologies.
          </p>

          <div className="skills-grid">
            <SkillCard title="Frontend Technologies" skills={frontendSkills} />
            <SkillCard title="Backend Technologies" skills={backendSkills} />
          </div>

          <div className="section-container">
            <h2 className="section-title">What I Do</h2>
            <div className="cards-container">
              <div className="cards-slider">
                {services.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </div>
          </div>
          <div className="section-container">
            <h2 className="section-title">My Philosophy</h2>
            <p className="about-paragraph">
              I believe in writing clean, testable, and maintainable code. I
              thrive in collaborative environments where I can learn from others
              and share my own knowledge. Continuous learning is at the core of
              my professional growth, and I'm always exploring new technologies
              and methodologies to improve my craft.
            </p>
          </div>

          <div className="section-container">
            <h2 className="section-title">Professional Journey</h2>
            <p className="about-paragraph">
              With a strong foundation in computer science and years of hands-on
              experience, I've successfully delivered numerous projects from
              concept to deployment. I'm passionate about writing clean,
              maintainable code and implementing best practices in software
              development.
            </p>
          </div>

          <div className="section-container my-journey-section">
            <h2 className="section-title text-center">
              My Journey: A Timeline of Resilience
            </h2>
            <div className="timeline">
              {/* Timeline Item 1 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h3 className="timeline-title">The Foundation</h3>
                  <p className="timeline-text">
                    From a Small Village in Bihar to the Corporate World (MNC)
                  </p>
                </div>
              </div>
              {/* Timeline Item 2 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h3 className="timeline-title">The Foundation</h3>
                  <p className="timeline-text">
                    This is the my #Failures, #Rejections, and #Redirections,
                    because sometimes, Rejection is not the end; it’s just
                    redirection.
                  </p>
                </div>
              </div>
              {/* Timeline Item 3 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h3 className="timeline-title">
                    Early Setbacks & Redirection
                  </h3>
                  <p className="timeline-text">
                    I come from a small village in Bihar. After securing a good
                    rank in the <b><i><span style={{color:"cyan"}}>10th BSEB examination</span></i> </b>(completely from a
                    Hindi-medium background), I decided to switch my medium of
                    study from #Hindi to #English in Class 11th. At that time, I
                    could hardly understand what was written in the textbooks,
                    though my grammar was decent thanks to my constant
                    companion, the dictionary. Choosing I.Sc (Mathematics) in
                    English medium under the BSEB board was one of the toughest
                    decisions of my life. When my I.Sc results were declared, I
                    was completely disappointed. I felt that because of this
                    poor result, I would never get a good job or opportunity in
                    life.
                  </p>
                </div>
              </div>
              {/* Timeline Item 4 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <p className="timeline-text">
                    Later, I realized that 2014 was one of the worst result
                    evaluation years by Bihar School Examination Board for I.Sc
                    students, and many students across Bihar faced the same
                    situation. However, during that period, I managed to clear
                    the NDA-I written examination, but I couldn’t attend the
                    next round due to a lack of proper guidance and awareness.
                    That missed opportunity taught me a valuable lesson. With
                    the constant support of my parents and one of my close
                    relatives (who still guides me whenever I need advice), I
                    gathered myself again. My parents told me: “Whatever you
                    want to do in life, we’ll always be there for you.” Their
                    unconditional faith gave me new strength and courage. Then I
                    decided to pursue B.Sc (Mathematics). Initially, I thought I
                    could aim for a Group-D level government job, but deep
                    inside, my real dream was to appear for the UPSC examination
                    a dream that had lived in my heart since school. While
                    pursuing B.Sc, I also started preparing for the JEE exam,
                    because someone told me that most of the successful UPSC
                    candidates come from engineering or medical backgrounds.
                    Honestly, I was unsure about my future, I didn’t know what I
                    truly wanted to do.
                  </p>
                </div>
              </div>
              {/* Timeline Item 5 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <p className="timeline-text">
                    Then one person advised me to pursue Engineering from
                    Bangalore through the COMED-K exam and he told me why are
                    you wasting your time in B.Sc, and that advice completely
                    changed the direction of my journey. However, during my
                    engineering years (2016–2020), I faced some distractions and
                    challenges of teenage life. slightly affected my focus as I
                    was transitioning into professional life. Still, I managed
                    to complete my engineering degree successfully(Later, a
                    personal setback on August 12, 2021) After graduation, I
                    thought of restarting my UPSC preparation, but due to
                    personal reasons, I started looking for a job in the IT
                    field instead. That phase was one of the hardest in my life.
                    My communication skills, especially my English, were weak -
                    and I faced rejection after rejection. Here’s how my
                    rejection journey looked:
                  </p>
                  <div className="rejection-pills">
                    <span>TCS</span>
                    <span>Infosys</span>
                    <span>Capgemini</span>
                    <span>Tech Mahindra</span>
                    <span>Mindtree</span>
                    <span>Wipro</span> <span>Many StartUp</span>
                  </div>
                </div>
              </div>
              {/* Timeline Item 6 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <p className="timeline-text">
                    After 14 rejections and around 20 interviews, I finally
                    decided to join Allstate. It was a completely new journey
                    -challenging but full of learning. I worked hard and
                    gradually improved my technical skills, communication, and
                    confidence. Grateful to have completed over 4 years at
                    Allstate a journey of steady performance, learning, and
                    growth. In May 2024, I once again decided to restart my #CSE
                    preparation - my long-lost dream. Unfortunately, in my first
                    attempt, I couldn’t clear the preliminary round. But instead
                    of giving up, I treated failure as a teacher and began
                    working even harder. In June 2025, I continued my CSE
                    preparation alongside exploring new IT opportunities. But
                    once again, I faced multiple rejections:
                  </p>
                  <div className="rejection-pills">
                    <span>Accenture</span>
                    <span>Virtusa</span>
                    <span>Sopra Steria</span>
                    <span>Tech M</span>
                    <span>Walmart </span>
                    <span>Amazon</span>
                    <span>Other</span>
                  </div>
                </div>
              </div>
              {/* Timeline Item 7 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <p className="timeline-text">
                    Finally, in August 2025, I received a good offer from{" "}
                    <span>
                      <i>
                        <b style={{ color: "cyan" }}>GCA Saudi Arabia</b>
                      </i>
                    </span>{" "}
                    for a Full Stack Developer role. However, I decided to
                    decline the offer as my{" "}
                    <b>
                      <i>
                        <span style={{ color: "cyan" }}>
                          CSE 2025 examination
                        </span>
                      </i>
                    </b>{" "}
                    was too close to the joining date in GCA Saudi. Deep down, I
                    know that my next CSE attempt might also be tough as compare
                    to my preparation but I’m not giving up. Whether I succeed
                    or failure through hard work or luck, I’ll accept it as my
                    destiny. Each rejection has been painful, but every time,
                    I’ve reminded myself: Failure is not the opposite of success
                    - it’s part of success. Today, I’m still chasing my dream -
                    to find my true purpose, achieve my dream work, and make my
                    family proud.
                  </p>
                </div>
              </div>

              {/* Final thought */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card final-card">
                  <p className="final-thought">
                    ❣ ❣Never give up until you achieve your success. ✨ Because
                    sometimes, the longest journeys create the strongest souls.
                    Insha Allah, one day I will surely get my dream work - I
                    have faith and hope in that. Please remember me in your
                    prayers..❣ ❣
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-container text-center mt-12">
            <p className="text-2xl font-semibold text-cyan-300 tracking-wider">
              Thank you, see you soon!
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="skill-card">
      <h2 className="skill-card-title">{title}</h2>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-list-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-amber-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="service-card interactive-card">
      <div className="card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
    </div>
  );
}
