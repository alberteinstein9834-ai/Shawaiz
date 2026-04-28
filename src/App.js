import React, { useState, useEffect } from 'react';
import './App.css';
import logoIcon from './assets/lock main.png';
import Image from './assets//Shahwaiz1.png';
import Image2 from './assets//Shazzy1.png';


// Import icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaReact, FaSearch, FaMobile, FaWordpress, FaCloud, FaExternalLinkAlt, FaMapMarkerAlt, FaPhone, FaClock, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Theme toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  // Data
  const skills = ['React.js', 'JavaScript', 'HTML5/CSS3', 'Node.js',  'Git', 'Responsive Design', 'bootstrap'];
  
  const services = [
    { icon: <FaCode />, title: 'Web Development', description: 'I build complete responsive websites from scratch or using modern tools. Whether you need a personal brand, a business presence. Clean, maintainable code — easy to update and scale. Custom HTML/CSS/JS websites — fully hand-coded, lightweight, and fast.' },
    { icon: <FaReact />, title: 'React Developer', description: 'I build dynamic, fast, and interactive user interfaces using ReactJS. As a React developer, I focus on creating reusable components and smooth single-page application (SPA) experiences. I am still growing my React skills, but I can build functional, well-structured frontend apps and i am eager to take on real-world projects.' },
    { icon: <FaSearch />, title: 'SEO Optimization', description: 'Optimizing websites for search engines to improve visibility. Adding meta titles & descriptions. Basic keyword research and placement. I may not be an SEO expert yet, but I build websites with clean code and proper structure — which search engines love.' },
    { icon: <FaMobile />, title: 'Mobile Responsive', description: 'I build modern, mobile-friendly websites using HTML5, CSS3, and JavaScript. Every site I create adapts seamlessly to different screen sizes — from desktops to smartphones..' },
    { icon: <FaWordpress />, title: 'WordPress Website', description: 'I can help you create and manage websites using WordPress. Whether you need a blog, a business brochure site, or a personal portfolio using WordPress themes — I can set it up, customize layouts, and manage content easily without heavy coding.' },
    { icon: <FaCloud />, title: 'OOP-Based Applications (C++)', description: 'I design console-based applications using Object-Oriented Programming (C++) — ideal for academic projects, small business logic prototypes, or learning tools.' }
  ];

  const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'Full-featured e-commerce website with cart and payment integration.', tech: ['React', 'Node.js', 'MongoDB'], image: '🛒', github: '#', demo: '#' },
    { id: 2, title: 'Task Management App', description: 'Productivity app for managing tasks with drag-and-drop.', tech: ['React', 'Redux', 'Tailwind'], image: '✅', github: '#', demo: '#' },
    { id: 3, title: 'Weather App', description: 'Real-time weather application with location detection.', tech: ['React', 'API', 'Axios'], image: '🌤️', github: '#', demo: '#' },
    { id: 4, title: 'Chat Application', description: 'Real-time chat app with room creation.', tech: ['React', 'Socket.io', 'Node.js'], image: '💬', github: '#', demo: '#' }
  ];

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <img src={logoIcon} alt="Logo" /> SHAWAIZ</a>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <ul className="nav-links">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          )}
          
          <div className="nav-controls">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            
            {/* Mobile Hamburger Menu Button */}
            {isMobile && (
              <button 
                className="hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              <li><a href="#home" onClick={() => handleLinkClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" onClick={() => handleLinkClick('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="#services" onClick={() => handleLinkClick('services')} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
              <li><a href="#projects" onClick={() => handleLinkClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
              <li><a href="#contact" onClick={() => handleLinkClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="section home">
        <div className="container">
          <div className="hero">
            <div className="hero-content">
              <h1>Hi, I'm Shahwaiz Irshad</h1>
              <h2>A Passionate Web Developer</h2>
              <p>I builds modern, responsive, and user-friendly websites using modern technologies. I specialize in creating fast, scalable, and visually appealing web applications using the latest technologies.</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn-primary">Hire Me</a>
                <a href="#projects" className="btn-secondary">View Projects</a>
              </div>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="mailto:shahwaiz.irshad@example.com"><FaEnvelope /></a>
              </div>
            </div>
            <div className="hero-image">
              
              <div className="image-placeholder">
              
                <img src={Image} alt="Shahwaiz Irshad" className="image-placeholder" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder large">
                <img src={Image2} alt="Shahwaiz Irshad" className="image-placeholder" />
              </div>
            </div>
            <div className="about-text">
              <h3>Who Am I?</h3>
              <p>I am a motivated Web Developer and a BBIT student at Virtual University of Lahore, with a strong foundation in Object-Oriented Programming (OOP) and modern web technologies. I specialize in building responsive and user-friendly websites using HTML, CSS, and JavaScript, along with frameworks like React.js and Bootstrap. I enjoy solving problems, writing clean code, and creating interactive web experiences. With a combination of technical skills and business knowledge, I aim to develop solutions that are not only functional but also valuable for users and businesses.</p>
              <h3>Skills</h3>
              <div className="skills">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
              <h3>Experience</h3>
              <div className="experience">
                <div className="exp-item">
                  <h4>Best Web Developer</h4>
                  <p>Techstem | 2026-Present</p>
                </div>
                <div className="exp-item">
                  <h4>React Developer</h4>
                  <p>Techstem | 2026-2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Services</span></h2>
          <p className="section-subtitle">What I offer to help your business grow</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <p className="section-subtitle">Here are some of my recent works</p>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">{project.image}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><FaCode /> GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's work together!</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div><h4>Address</h4><p>Macca Colony Gulberg 3 Lahore</p></div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaPhone /></div>
                <div><h4>Phone</h4><p>+92 322 4921883</p></div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div><h4>Email</h4><p>shahwaizirshad20@gmail.com</p></div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FaClock /></div>
                <div><h4>Working Hours</h4><p>Mon-Fri: 9AM - 6PM</p></div>
              </div>
            </div>
            <div className="contact-form">
              {submitted && <div className="success-message">Thank you! Your message has been sent.</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Your Message" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
          <p>&copy; 2026 Shahwaiz Irshad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;