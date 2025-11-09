import React from 'react'
import './Home.css'
import Typewriter from '../../components/Typewriter'

export default function Home(): JSX.Element {

  const address = {
  line1: "Masjid Road, Batla House",
  line2: "Jamia Nagar, Okhla",
  city: "New Delhi",
  zip: "110025",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.869432397244!2d77.27820811456015!3d28.56231688241438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38c9ea28f03%3A0xcf085976f2110601!2sJamia%20Millia%20Islamia!5e0!3m2!1sen!2sin!4v1678886569123!5m2!1sen!2sin"
};
  return (
    <section className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <div className="min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Hi, <Typewriter text={"I'm Saddam Husain — Full‑Stack Developer"} speed={50} />
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/85">Experienced Full Stack Developer with 4+ years of building scalable applications using Java, Spring Boot, ReactJS, and microservices. Proficient in CI/CD (Jenkins, Docker, SonarQube) and deploying on PaaS/CaaS platforms. Skilled in Kafka for event-driven systems and committed to TDD with 95%+ test coverage. Strong team player with a solid Agile background</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300" href="#skills">Skills</a>
            <a className="inline-block bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300" href="#experience">Experience</a>
            <a className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300" href="#projects">Projects</a>
            <a className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300" href="#education">Education</a>
            <a className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300" href="#contact">Contact me</a>
        </div>
      {/* Skills */}
      <section id="skills" className="py-6 md:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Technical Skills</h2>
        <div className="main-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-2">
              <h4 className="font-semibold text-cyan-400 mb-2">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-900/50 text-green-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Spring Boot</span>
                <span className="bg-green-900/50 text-green-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">ReactJS</span>
                <span className="bg-green-900/50 text-green-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Microservices</span>
                <span className="bg-green-900/50 text-green-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Spring MVC</span>
                <span className="bg-green-900/50 text-green-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Spring Security</span>
                <span className="bg-green-900/50 text-green-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Hibernate</span>
            </div>
              
            </div>
        
            <div className="space-y-2">
              <h4 className="font-semibold text-cyan-400 mb-2">Databases</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-900/50 text-purple-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">MySQL</span>
                <span className="bg-purple-900/50 text-purple-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">SQL Server</span>
                <span className="bg-purple-900/50 text-purple-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Redis</span>
                <span className="bg-purple-900/50 text-purple-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Flyway</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-cyan-400 mb-2">DevOps & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-900/50 text-orange-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Jenkins</span>
                <span className="bg-orange-900/50 text-orange-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Docker</span>
                <span className="bg-orange-900/50 text-orange-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Kubernetes</span>
                <span className="bg-orange-900/50 text-orange-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Git</span>
                <span className="bg-orange-900/50 text-orange-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">SonarQube</span>
                <span className="bg-orange-900/50 text-orange-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">CI/CD</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-cyan-400 mb-2">Testing</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-900/50 text-pink-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">JUnit</span>
                <span className="bg-pink-900/50 text-pink-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Mockito</span>
                <span className="bg-pink-900/50 text-pink-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Jest</span>
                <span className="bg-pink-900/50 text-pink-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">React Testing Library</span>
                <span className="bg-pink-900/50 text-pink-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">TDD</span>
              </div>
            </div>
            <div className="space-y-2">
                <h4 className="font-semibold text-cyan-400 mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-900/50 text-blue-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">Java 8</span>
                <span className="bg-blue-900/50 text-blue-300 text-sm font-medium px-3 py-1 rounded-full transition-transform hover:scale-105 hover:bg-opacity-75">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="py-6 md:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Experience</h2>
        <div className="timeline">
          {/* Timeline Item */}
          <div className="timeline-item">
            {/* Dot */}
            <div className="timeline-dot"></div>
            
            <div className="main-card">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">Full Stack Developer | Project Engineer</h3>
                  <p className="text-white/75 mt-1">Allstate India Pvt Ltd</p>
                </div>
                <div className="text-left sm:text-right mt-2 sm:mt-0">
                  <p className="text-white/75 text-sm">Sep 2021 - Present</p>
                  <p className="text-white/50 text-xs mt-1">Bangalore, India</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/85 text-sm mt-5">
                {[
                  "Engineered robust microservices using Java, Spring Boot, Cloud, and Security to streamline core business functionalities.",
                  "Architected a high-availability deployment system, achieving automated, zero-downtime releases and enhancing deployment reliability by 40%.",
                  "Pioneered a Flyway-based schema migration tool, ensuring version-controlled database changes and decreasing deployment errors by 30%.",
                  "Optimized API performance by implementing Redis caching, cutting response latency by 20%.",
                  "Orchestrated end-to-end CI/CD pipelines with Jenkins, Docker, and SonarQube for automated delivery.",
                  "Instituted a SonarQube quality gate, enforcing 95% test coverage on new code.",
                  "Crafted extensive JUnit, Mockito, and React Testing Library suites, adhering to TDD principles and achieving 95% coverage.",
                  "Led Agile delivery cycles, mentoring juniors and leveraging Jira/VersionOne to boost team efficiency by 15%."
                ].map((item, index) => (
                  <li key={index} className="star-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-6 md:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Selected Projects</h2>
        <div className="main-card">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">Managed Delivery – Automated Deployment and Compliance Platform</h3>
          <p className="text-white/80 mt-2 text-sm leading-relaxed">
            An automated deployment pipeline comprising four components—Conveyor, Compliance Buddy, Agent Smith, and Gate-Keeper—each handling a distinct phase of the product delivery lifecycle. The platform ensures deployment quality, compliance enforcement, security validation, and seamless communication with product and support teams.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/50 rounded-lg border border-white/5">
              <h4 className="font-semibold text-cyan-400">Conveyor</h4>
              <p className="text-white/70 text-xs mt-1">Validated initial configurations (Jenkins, GitHub, Anubis, Artifactory) pre-deployment.</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-white/5">
              <h4 className="font-semibold text-cyan-400">Compliance Buddy</h4>
              <p className="text-white/70 text-xs mt-1">Enforced SonarQube checks, Jira story linkage, compliance rules, and approval policies.</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-white/5">
              <h4 className="font-semibold text-cyan-400">Agent Smith</h4>
              <p className="text-white/70 text-xs mt-1">Performed static code analysis, dependency validation, security scanning, and triggered automated support workflows.</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-white/5">
              <h4 className="font-semibold text-cyan-400">Gate-Keeper</h4>
              <ul className="text-white/80 text-xs mt-1 space-y-1 list-disc list-inside">
                <li>Triggered notifications and automated support workflows based on deployment status.</li>
                <ul className="space-y-3">
            {[
              "Automated ACR (Change Number) generation post-compliance for traceability and audits.",
              "Recognized as Employee of the Quarter twice for outstanding performance."
            ].map((item, index) => (
              <li key={index} className="star-list-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="text-white/85 text-sm">{item}</span>
              </li>
            ))}
          </ul>
                <ul className="space-y-2 text-white/85 text-sm mt-5">


                  <li></li>
                  <li></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-6 md:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Education</h2>
        <div className="timeline">
          {/* Timeline Item */}
          <div className="timeline-item">
            {/* Dot */}
            <div className="timeline-dot"></div>
            <div className="main-card">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">Bachelor of Engineering in Computer Science & Engineering</h3>
                  <p className="text-white/75 mt-1">Vishveshwarya Technical University</p>
                </div>
                <div className="text-left sm:text-right mt-2 sm:mt-0">
                  <p className="text-white/75 text-sm">2016 – 2020</p>
                  <p className="text-white/50 text-xs mt-1">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-6 md:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Certifications</h2>
        <div className="timeline">
          {/* Timeline Item */}
          <div className="timeline-item">
            {/* Dot */}
            <div className="timeline-dot"></div>
            <div className="main-card">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">XP Full Stack Developer</h3>
                  <p className="text-white/75 mt-1">Allstate</p>
                </div>
                <div className="text-left sm:text-right mt-2 sm:mt-0">
                  <p className="text-white/75 text-sm">January 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-6 md:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Achievements</h2>
        <div className="main-card">
          <ul className="space-y-3">
            {[
              "Solved 100+ coding problems on LeetCode and HackerRank.",
              "Recognized as Employee of the Quarter twice for outstanding performance."
            ].map((item, index) => (
              <li key={index} className="star-list-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="text-white/85 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
        <div className="main-card">
          <h3 className="text-xl font-semibold text-cyan-300">Managed Delivery Platform</h3>
          <p className="text-white/80 mt-2 text-sm leading-relaxed">An automated deployment and compliance platform ensuring quality, security, and seamless communication across the product delivery lifecycle.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="text-md font-semibold text-cyan-400 mb-2">Backend & DevOps</h4>
              <ul className="space-y-1">
                {["Spring Boot", "Microservices", "Jenkins", "Docker", "SonarQube"].map((tech, index) => (
                  <li key={index} className="flex items-center p-1 rounded-md transition-all duration-200 hover:bg-white/5 hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-white/85 text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-cyan-400 mb-2">Frontend</h4>
              <ul className="space-y-1">
                {["ReactJS", "Custom UI for pipeline script generation"].map((tech, index) => (
                  <li key={index} className="flex items-center p-1 rounded-md transition-all duration-200 hover:bg-white/5 hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-white/85 text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      {/* Personal Details */}
      <section id="personal-details" className="py-6">
        <h2 className="text-2xl font-bold text-white mb-4">Personal Details</h2>
        <div className="info-card rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-1">Languages Known</h4>
              <ul className="space-y-1 mt-2">
                {[
                  "English",
                  "Hindi",
                  "Urdu"
                ].map((skill, index) => (
                  <li key={index} className="flex items-center p-1 rounded-md transition-all duration-200 hover:bg-white/5 hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-white/85 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-1">Soft Skills</h4>
              <ul className="space-y-1 mt-2">
                {[
                  "Cooperative",
                  "Quick Learner",
                  "Good Listener",
                  "Positive Thinker"
                ].map((skill, index) => (
                  <li key={index} className="flex items-center p-1 rounded-md transition-all duration-200 hover:bg-white/5 hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-white/85 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Address */}
      <section id="address" title="Address">
        <div className="main-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-cyan-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div className="text-white/85">
                <p className="font-semibold">{address.line1}, {address.line2}</p>
                <p>{address.city} - {address.zip}</p>
              </div>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe src={address.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Contact / CTA */}
      <section id="contact" className="py-6 md:py-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Let's build something great</h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">I'm available for contract and full-time roles. I love solving hard problems and shipping delightful products.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a className="gradient-border inline-flex items-center bg-transparent text-cyan-300 font-semibold px-4 py-2 rounded-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" href="mailto:shussain24a@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
          <a className="gradient-border inline-flex items-center bg-transparent text-cyan-300 font-semibold px-4 py-2 rounded-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" href="https://www.linkedin.com/in/shusain24/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a className="gradient-border inline-flex items-center bg-transparent text-cyan-300 font-semibold px-4 py-2 rounded-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" href="https://github.com/shusain24" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a className="gradient-border inline-flex items-center bg-transparent text-cyan-300 font-semibold px-4 py-2 rounded-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" href="https://www.facebook.com/shusain24" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.038v-3.47h3.038v-2.661c0-3.004 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874v2.267h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
          </a>
          <a className="gradient-border inline-flex items-center bg-transparent text-cyan-300 font-semibold px-4 py-2 rounded-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" href="https://www.instagram.com/s_husain_24/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
          </a>
        </div>
      </section>
      </div>
        
    </section>
  )
}
