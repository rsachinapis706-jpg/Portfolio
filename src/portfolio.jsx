import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, ExternalLink, ChevronRight, BookOpen, Cpu, Radio, Zap, Network, Activity } from 'lucide-react';

export default function SachinPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedResearch, setSelectedResearch] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'research', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const researchProjects = [
    {
      id: 1,
      title: 'AgriOS: Governance-Driven Digital Twin',
      category: 'AI Governance',
      icon: Cpu,
      focus: 'System-level AI governance, safety, real-time control',
      highlights: [
        'OS-inspired digital twin architecture for safe agricultural monitoring',
        'Learning models in advisory role under supervisory control layer',
        'Eliminated critical stress exposure, reduced peak stress by 28%',
        'Real-time operation with end-to-end latency below 13 ms'
      ],
      impact: 'Safety-critical AI systems',
      color: '#3b82f6'
    },
    {
      id: 2,
      title: 'Physics-Based Cloud Removal',
      category: 'Remote Sensing',
      icon: Radio,
      focus: 'Physics-guided inference, remote sensing, real-time systems',
      highlights: [
        'Hybrid system combining satellite data with atmospheric physics',
        'Integrated NASA MODIS/VIIRS and Open-Meteo weather data',
        'Radiative transfer equations for participating medium modeling',
        'Preserved geographic structure without hallucinated textures'
      ],
      impact: 'Environmental monitoring',
      color: '#06b6d4'
    },
    {
      id: 3,
      title: 'AC-TimeGAN for Dream EEG Analysis',
      category: 'Biosignal Processing',
      icon: Activity,
      focus: 'Signal-aware generative modeling, biosignal processing',
      highlights: [
        'Auxiliary-Classifier TimeGAN for EEG generation under data scarcity',
        'Frequency-domain constraints using PSD and band-power losses',
        'Validated physiological realism via spectral analysis',
        'Improved classification accuracy from 77% to 90% with 100% recall'
      ],
      impact: 'Medical AI',
      color: '#8b5cf6'
    },
    {
      id: 4,
      title: 'Diffusion Cascade Prediction',
      category: 'Network Intelligence',
      icon: Network,
      focus: 'Network intelligence, spectral analysis, early-stage inference',
      highlights: [
        'Optimization-based framework for early diffusion prediction',
        'Sparse spectral representations for source localization',
        'Effective prediction at observation ratio τ = 0.2',
        'Source localized within Top-10/Top-20 candidates'
      ],
      impact: 'Information propagation',
      color: '#f59e0b'
    },
    {
      id: 5,
      title: 'Hybrid Passive Ankle–Foot Orthosis',
      category: 'Biomedical Engineering',
      icon: Zap,
      focus: 'Human-centered systems, energy-aware design',
      highlights: [
        'Passive orthosis with elastic torque assistance',
        'Electromagnetic energy harvesting for self-powered sensing',
        'Improved dorsiflexion by ~3°, reduced plantar pressure by 12–15%',
        'Generated 25–32 mW during walking'
      ],
      impact: 'Assistive technology',
      color: '#10b981'
    }
  ];

  const appliedProjects = [
    {
      title: 'Hospital Bed Transporter Robot',
      tech: 'ROS2, Gazebo, URDF/XACRO',
      description: 'End-to-end ROS2 workspace with publisher-subscriber motion control'
    },
    {
      title: 'Wi-Fi Signal Strength Mapping',
      tech: 'SDR Hardware, RF Processing',
      description: 'Real RF signal capture and RSSI extraction for coverage analysis'
    },
    {
      title: 'Agricultural Virtual OS',
      tech: 'System Architecture, Data Fusion',
      description: 'Rule-based monitoring simulation with multi-source data integration'
    }
  ];

  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'Java', 'C', 'MATLAB']
    },
    {
      category: 'AI / ML',
      skills: ['PyTorch', 'NumPy', 'Pandas', 'Scikit-learn']
    },
    {
      category: 'Signal & Physics',
      skills: ['EEG Processing', 'PSD Analysis', 'Radiative Transfer']
    },
    {
      category: 'Robotics',
      skills: ['ROS2', 'Gazebo', 'URDF/XACRO', 'Hardware Integration']
    },
    {
      category: 'Systems',
      skills: ['IoT Edge', 'Networking', 'System Architecture']
    }
  ];

  return (
    <div className="portfolio">
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Grid Background Effect */}
      <div className="grid-background" />
      
      {/* Cursor Glow */}
      <div 
        className="cursor-trail" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }} 
      />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-brand" onClick={() => scrollToSection('home')}>
            <span className="brand-name">SR</span>
            <span className="brand-dot">.</span>
          </div>
          <div className="nav-links">
            {['home', 'about', 'research', 'projects', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-label">AI Engineering Student</div>
          <h1 className="hero-title">
            <span className="title-line">Sachin</span>
            <span className="title-line title-accent">Rajamanickam</span>
          </h1>
          <p className="hero-subtitle">
            Research-Oriented Systems Developer
          </p>
          <p className="hero-description">
            Designing reliable AI systems through physics-based modeling, 
            system-level governance, and real-time deployability
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">8.0</div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value">2024–2028</div>
              <div className="stat-label">B.Tech AI & Data Eng.</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value">Amrita</div>
              <div className="stat-label">Vishwa Vidyapeetham</div>
            </div>
          </div>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => scrollToSection('research')}>
              View Research
              <ChevronRight size={18} />
            </button>
            <a href="mailto:rsachinapis706@gmail.com" className="cta-secondary">
              Contact
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="grid-dot" style={{ animationDelay: `${i * 0.02}s` }} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Research Focus</h2>
          </div>
          <div className="about-content">
            <div className="about-main">
              <p className="lead-text">
                I focus on designing reliable AI systems by combining machine learning 
                with physics-based modeling, system-level governance, and robotics.
              </p>
              <p className="body-text">
                My work emphasizes <strong>interpretability</strong>, <strong>stability under uncertainty</strong>, 
                and <strong>real-time deployability</strong> rather than purely data-driven optimization.
              </p>
              <div className="interests-grid">
                <div className="interest-item">
                  <Cpu className="interest-icon" />
                  <span>AI Systems</span>
                </div>
                <div className="interest-item">
                  <BookOpen className="interest-icon" />
                  <span>Governed Learning</span>
                </div>
                <div className="interest-item">
                  <Radio className="interest-icon" />
                  <span>Digital Twins</span>
                </div>
                <div className="interest-item">
                  <Activity className="interest-icon" />
                  <span>Signal Intelligence</span>
                </div>
                <div className="interest-item">
                  <Zap className="interest-icon" />
                  <span>Robotics (ROS2)</span>
                </div>
              </div>
            </div>
            <div className="about-objective">
              <h3 className="objective-title">Career Objective</h3>
              <p className="objective-text">
                Master's in Artificial Intelligence with a focus on research-driven, 
                system-level AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="research">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Research & Advanced Projects</h2>
          </div>
          <div className="research-grid">
            {researchProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.id} 
                  className="research-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedResearch(project.id === selectedResearch ? null : project.id)}
                >
                  <div className="card-header">
                    <div className="card-icon" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}>
                      <Icon size={24} />
                    </div>
                    <div className="card-meta">
                      <span className="card-category">{project.category}</span>
                      <span className="first-author">First Author</span>
                    </div>
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-focus">
                    <strong>Focus:</strong> {project.focus}
                  </p>
                  <div className={`card-details ${selectedResearch === project.id ? 'expanded' : ''}`}>
                    <ul className="highlights-list">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="impact-tag">Impact: {project.impact}</div>
                  </div>
                  <button className="expand-btn">
                    {selectedResearch === project.id ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Applied Engineering Projects</h2>
          </div>
          <div className="projects-list">
            {appliedProjects.map((project, index) => (
              <div 
                key={index} 
                className="project-item"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-tech">{project.tech}</span>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="skill-category"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="contact-content">
            <p className="contact-lead">
              Interested in research collaboration, internship opportunities, 
              or discussions about AI systems and governance?
            </p>
            <div className="contact-links">
              <a href="mailto:rsachinapis706@gmail.com" className="contact-link">
                <Mail size={20} />
                <span>rsachinapis706@gmail.com</span>
              </a>
              <a href="https://github.com/rsachinapis706-jpg" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github size={20} />
                <span>github.com/rsachinapis706-jpg</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Sachin Rajamanickam. Research-oriented systems development.</p>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #2563eb;
          --secondary: #64748b;
          --accent: #3b82f6;
          --bg-dark: #0f172a;
          --bg-darker: #020617;
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --border: #1e293b;
        }

        .portfolio {
          background: var(--bg-darker);
          color: var(--text-primary);
          font-family: 'IBM Plex Mono', 'Courier New', monospace;
          position: relative;
          overflow-x: hidden;
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          z-index: 10000;
          transition: width 0.1s linear;
        }

        /* Grid Background */
        .grid-background {
          position: fixed;
          inset: 0;
          background-image: 
            linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        /* Cursor Trail */
        .cursor-trail {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 1;
          transition: opacity 0.3s;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 1.5rem;
          font-weight: 700;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
        }

        .brand-name {
          color: var(--text-primary);
        }

        .brand-dot {
          color: var(--primary);
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: lowercase;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s;
          font-family: 'IBM Plex Mono', monospace;
        }

        .nav-link::before {
          content: '> ';
          opacity: 0;
          transition: opacity 0.3s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link.active::before {
          opacity: 1;
          color: var(--primary);
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 10;
        }

        /* Section Header */
        .section-header {
          display: flex;
          align-items: baseline;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .section-number {
          font-size: 2rem;
          color: var(--primary);
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 4rem;
          padding: 8rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .hero-label {
          font-size: 0.9rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .title-line {
          display: block;
          opacity: 0;
          animation: slideIn 0.8s ease-out forwards;
        }

        .title-line:nth-child(1) { 
          animation-delay: 0.2s; 
        }

        .title-line:nth-child(2) { 
          animation-delay: 0.4s; 
          color: var(--primary);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: 'JetBrains Mono', monospace;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-divider {
          width: 1px;
          background: var(--border);
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
        }

        .cta-primary {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          font-family: 'IBM Plex Mono', monospace;
        }

        .cta-primary:hover {
          background: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
        }

        .cta-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border);
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          font-family: 'IBM Plex Mono', monospace;
        }

        .cta-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(37, 99, 235, 0.05);
        }

        .hero-visual {
          position: relative;
          height: 500px;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 8px;
          height: 100%;
        }

        .grid-dot {
          width: 100%;
          height: 100%;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.2);
          opacity: 0;
          animation: dotFade 3s ease-in-out infinite;
        }

        @keyframes dotFade {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1); }
        }

        /* About Section */
        .about {
          padding: 8rem 0;
          background: var(--bg-dark);
        }

        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
        }

        .lead-text {
          font-size: 1.3rem;
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .body-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .body-text strong {
          color: var(--primary);
          font-weight: 600;
        }

        .interests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .interest-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid var(--border);
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .interest-item:hover {
          background: rgba(37, 99, 235, 0.1);
          border-color: var(--primary);
          transform: translateX(5px);
        }

        .interest-icon {
          color: var(--primary);
          width: 20px;
          height: 20px;
        }

        .about-objective {
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid var(--border);
          padding: 2rem;
          height: fit-content;
        }

        .objective-title {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-family: 'JetBrains Mono', monospace;
        }

        .objective-text {
          color: var(--text-secondary);
          line-height: 1.8;
        }

        /* Research Section */
        .research {
          padding: 8rem 0;
          background: var(--bg-darker);
        }

        .research-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .research-card {
          background: rgba(30, 41, 59, 0.3);
          border: 1px solid var(--border);
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s;
          opacity: 0;
          animation: fadeUp 0.6s ease-out forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .research-card:hover {
          border-color: var(--primary);
          background: rgba(30, 41, 59, 0.5);
          transform: translateY(-5px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .card-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .card-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .card-category {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .first-author {
          font-size: 0.75rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid var(--primary);
          padding: 0.25rem 0.5rem;
        }

        .card-title {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
        }

        .card-focus {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .card-focus strong {
          color: var(--primary);
        }

        .card-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
        }

        .card-details.expanded {
          max-height: 500px;
        }

        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }

        .highlights-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .highlights-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        .impact-tag {
          display: inline-block;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid var(--primary);
          color: var(--primary);
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          margin-top: 1rem;
        }

        .expand-btn {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          margin-top: 1rem;
          cursor: pointer;
          width: 100%;
          font-size: 0.85rem;
          transition: all 0.3s;
          font-family: 'IBM Plex Mono', monospace;
        }

        .expand-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        /* Projects Section */
        .projects {
          padding: 8rem 0;
          background: var(--bg-dark);
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .project-item {
          background: rgba(30, 41, 59, 0.3);
          border-left: 3px solid var(--primary);
          padding: 2rem;
          transition: all 0.3s;
          opacity: 0;
          animation: fadeUp 0.6s ease-out forwards;
        }

        .project-item:hover {
          background: rgba(30, 41, 59, 0.5);
          transform: translateX(10px);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .project-title {
          font-size: 1.3rem;
          color: var(--text-primary);
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
        }

        .project-tech {
          font-size: 0.85rem;
          color: var(--primary);
          white-space: nowrap;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Skills Section */
        .skills {
          padding: 8rem 0;
          background: var(--bg-darker);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: rgba(30, 41, 59, 0.3);
          border: 1px solid var(--border);
          padding: 2rem;
          opacity: 0;
          animation: fadeUp 0.6s ease-out forwards;
        }

        .category-title {
          font-size: 1.1rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.3);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          transition: all 0.3s;
        }

        .skill-tag:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: var(--primary);
        }

        /* Contact Section */
        .contact {
          padding: 8rem 0;
          background: var(--bg-dark);
        }

        .contact-lead {
          font-size: 1.3rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 700px;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-primary);
          text-decoration: none;
          padding: 1.5rem;
          background: rgba(30, 41, 59, 0.3);
          border: 1px solid var(--border);
          transition: all 0.3s;
          font-size: 1.1rem;
        }

        .contact-link:hover {
          border-color: var(--primary);
          background: rgba(37, 99, 235, 0.1);
          transform: translateX(10px);
        }

        /* Footer */
        .footer {
          padding: 3rem 0;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 6rem 2rem;
          }

          .hero-visual {
            display: none;
          }

          .about-content,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            gap: 1rem;
          }

          .hero-stats {
            flex-wrap: wrap;
          }

          .research-grid,
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .section-title {
            font-size: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .nav-links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
