import './Achievement.css';

const achievements = [
  {
    title: "Full-Stack E-commerce Platform",
    description: "Designed and deployed a feature-rich e-commerce website from scratch. Implemented product catalog, shopping cart, user authentication, and secure payment gateway integration using the Stripe API.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    animationDelay: '0.1s'
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Built a dynamic and responsive analytics dashboard for visualizing user data in real-time. Utilized WebSockets for live data updates and Chart.js for rich data visualization.",
    technologies: ["Vue.js", "Node.js", "WebSockets", "PostgreSQL"],
    animationDelay: '0.2s'
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Automated the build, test, and deployment process by creating a robust CI/CD pipeline. This reduced deployment time by over 50% and significantly improved team productivity.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "AWS"],
    animationDelay: '0.3s'
  },
  {
    title: "API Performance Optimization",
    description: "Improved API response time by 40% through strategic query optimization, implementing a Redis caching layer, and configuring a load balancer to handle high traffic.",
    technologies: ["Node.js", "Express", "Redis", "Nginx"],
    animationDelay: '0.4s'
  }
];

export default function Achievement() {
  return (
    <div className="achievement-container">
      <div className="achievement-wrapper">
        <div className="achievement-header">
          <h1 className="achievement-title">
            Achievements
          </h1>
          <p className="achievement-subtitle">
            A collection of my key projects and accomplishments.
          </p>
        </div>
        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </div>
    </div>
  )
}

const pillColorClasses = ["tech-pill-blue", "tech-pill-green", "tech-pill-purple", "tech-pill-orange", "tech-pill-pink"];

function AchievementCard({ title, description, technologies, animationDelay }: typeof achievements[0]) {
  return (
    <div className="achievement-card" style={{ animationDelay }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="tech-pills-container">
        {technologies.map((tech, index) => <span key={tech} className={`tech-pill ${pillColorClasses[index % pillColorClasses.length]}`}>{tech}</span>)}
      </div>
    </div>
  );
}