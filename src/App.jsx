import { useState } from "react";
import heroImage from "./assets/hero.png";
import logo from "./assets/logo.png";
import "./App.css";

const services = [
  { no: "01", icon: "⌂", title: "Residential Construction", text: "Thoughtfully planned homes with strong construction, clean finishes and practical layouts." },
  { no: "02", icon: "▦", title: "Commercial Construction", text: "Reliable spaces for offices, retail and business needs with organised execution." },
  { no: "03", icon: "↗", title: "Renovation & Remodeling", text: "Refresh existing spaces with modern layouts, finishes and efficient improvements." },
  { no: "04", icon: "✓", title: "Project Management", text: "Coordinated planning, execution and communication from start to handover." },
];

const projects = [
  { tag: "RESIDENTIAL", title: "Modern Family Residence", meta: "Residential • Mumbai", cls: "project-one" },
  { tag: "COMMERCIAL", title: "Contemporary Business Hub", meta: "Commercial • Thane", cls: "project-two" },
  { tag: "RENOVATION", title: "Premium Space Renovation", meta: "Renovation • Navi Mumbai", cls: "project-three" },
];

const testimonials = [
  { quote: "The team understood our requirements clearly and kept the process organised from planning to completion.", name: "Rahul Mehta", role: "Residential Client" },
  { quote: "Good communication, professional execution and attention to the details that mattered to our project.", name: "Priya Shah", role: "Commercial Client" },
  { quote: "Our renovation feels completely transformed. The work was planned around our needs and timeline.", name: "Amit Patil", role: "Renovation Client" },
];

const blogPosts = [
  { category: "CONSTRUCTION", title: "5 Things to Plan Before Starting a New Construction Project", date: "12 Sep 2026" },
  { category: "DESIGN", title: "How Better Space Planning Improves Everyday Living", date: "28 Aug 2026" },
  { category: "RENOVATION", title: "A Simple Guide to Planning a Home Renovation", date: "10 Aug 2026" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="topbar">
        <span>✦ Building spaces that last</span>
        <div><span>Mon – Sat: 9:00 AM – 6:00 PM</span><span>✉ hello@vighnahartaconstruction.com</span></div>
      </div>

      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Vighnaharta Construction home">
          <img className="company-logo" src={logo} alt="Vighnaharta Construction Logo" />
          <span><strong>VIGHNAHARTA</strong><small>CONSTRUCTION</small></span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#blog" onClick={closeMenu}>Blog</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#admin" className="admin-btn">Admin</a>
        </div>

        <a href="#contact" className="nav-cta">Get a Quote <span>↗</span></a>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content reveal">
            <div className="eyebrow"><span></span> BUILDING YOUR DREAMS</div>
            <h1>We build <em>your vision</em> into reality.</h1>
            <p className="hero-text">Quality construction, thoughtful design and dependable project execution for residential and commercial spaces.</p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">Explore Projects <span>↗</span></a>
              <a href="#contact" className="secondary-btn">Talk to Our Team</a>
            </div>
          </div>

          <div className="hero-stats">
            <div><strong>10+</strong><span>Years of<br />experience</span></div>
            <div><strong>50+</strong><span>Projects<br />delivered</span></div>
            <div><strong>100%</strong><span>Client-focused<br />approach</span></div>
          </div>
          <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="about-visual reveal">
            <div className="about-photo"><img src={heroImage} alt="Construction project" /></div>
            <div className="experience-card"><strong>10+</strong><span>Years of<br />building with trust</span></div>
            <div className="corner-label">QUALITY<br />FIRST</div>
          </div>
          <div className="about-copy reveal">
            <div className="section-kicker">ABOUT VIGHNAHARTA</div>
            <h2>Strong foundations.<br /><span>Better spaces.</span></h2>
            <p>Vighnaharta Construction is focused on creating dependable spaces with a practical approach to planning, construction and finishing.</p>
            <p>We bring together quality workmanship, clear communication and careful project coordination to turn ideas into spaces that people can rely on.</p>
            <div className="about-points">
              <div><span>✓</span><div><strong>Quality workmanship</strong><small>Attention to materials and finishing</small></div></div>
              <div><span>✓</span><div><strong>Transparent process</strong><small>Clear communication at every stage</small></div></div>
            </div>
            <a href="#services" className="text-link">Discover our services <span>→</span></a>
          </div>
        </section>

        <section className="services-section section-shell light-section" id="services">
          <div className="section-intro reveal">
            <div><div className="section-kicker">WHAT WE DO</div><h2>Services built around<br /><span>your requirements.</span></h2></div>
            <p>From the first plan to the final finish, our services are designed to keep construction clear, organised and focused on the end result.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.no}>
                <div className="service-top"><span className="service-icon">{service.icon}</span><span className="service-number">{service.no}</span></div>
                <h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Learn more <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section-shell" id="projects">
          <div className="section-intro reveal"><div><div className="section-kicker">SELECTED WORK</div><h2>Projects that speak<br /><span>for themselves.</span></h2></div><a className="outline-link" href="#contact">Start a project <span>↗</span></a></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.cls} reveal`} key={project.title}>
                <div className="project-visual"><span className="project-tag">{project.tag}</span><span className="project-arrow">↗</span></div>
                <div className="project-info"><h3>{project.title}</h3><p>{project.meta}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section section-shell dark-section">
          <div className="section-intro reveal"><div><div className="section-kicker gold">OUR PROCESS</div><h2>From idea to<br /><span>built reality.</span></h2></div><p>A simple, structured process keeps every project moving with clarity and purpose.</p></div>
          <div className="process-grid">
            {[["01", "Understand", "We discuss your needs, site and project goals."], ["02", "Plan", "We shape the scope, timeline and execution approach."], ["03", "Build", "Our team coordinates the work with quality in focus."], ["04", "Deliver", "We complete the final details and hand over the space."]].map(([no, title, text]) => <div className="process-item reveal" key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="gallery-section section-shell" id="gallery">
          <div className="section-intro reveal"><div><div className="section-kicker">PROJECT GALLERY</div><h2>A closer look at<br /><span>our work.</span></h2></div><p>Explore the details, textures and spaces that shape the Vighnaharta experience.</p></div>
          <div className="gallery-grid">
            <div className="gallery-tile gallery-large"><img src={heroImage} alt="Construction site" /><div>Building progress</div></div>
            <div className="gallery-tile tile-blue"><span>STRUCTURE</span><strong>Built for<br />strength.</strong></div>
            <div className="gallery-tile tile-gold"><span>DETAILS</span><strong>Finished<br />with care.</strong></div>
            <div className="gallery-tile tile-dark"><span>VISION</span><strong>Spaces made<br />to belong.</strong></div>
          </div>
        </section>

        <section className="testimonials-section section-shell light-section" id="testimonials">
          <div className="section-heading-center reveal"><div className="section-kicker">CLIENT STORIES</div><h2>Built on trust,<br /><span>proven by experience.</span></h2></div>
          <div className="testimonial-grid">
            {testimonials.map((item) => <article className="testimonial-card reveal" key={item.name}><div className="stars">★★★★★</div><p>“{item.quote}”</p><div className="client"><span>{item.name.charAt(0)}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></div></article>)}
          </div>
        </section>

        <section className="blog-section section-shell" id="blog">
          <div className="section-intro reveal"><div><div className="section-kicker">FROM THE JOURNAL</div><h2>Ideas for your<br /><span>next project.</span></h2></div><a className="text-link" href="#contact">View all articles <span>→</span></a></div>
          <div className="blog-grid">
            {blogPosts.map((post, index) => <article className="blog-card reveal" key={post.title}><div className={`blog-image blog-${index + 1}`}><span>{post.category}</span></div><div className="blog-info"><small>{post.date}</small><h3>{post.title}</h3><a href="#contact">Read article <span>↗</span></a></div></article>)}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-inner"><div className="section-kicker">HAVE A PROJECT IN MIND?</div><h2>Let’s build something<br /><em>great together.</em></h2><p>Tell us what you have in mind and our team will get back to you.</p></div><a href="#contact" className="primary-btn dark-btn">Start a conversation <span>↗</span></a>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-copy reveal"><div className="section-kicker">GET IN TOUCH</div><h2>Let’s talk about<br /><span>your project.</span></h2><p>Whether you are planning a new build, renovation or commercial space, tell us a little about your requirements.</p><div className="contact-details"><div><span>✉</span><div><small>Email us</small><strong>hello@vighnahartaconstruction.com</strong></div></div><div><span>☎</span><div><small>Call us</small><strong>+91 98765 43210</strong></div></div><div><span>⌖</span><div><small>Visit us</small><strong>Mumbai, Maharashtra</strong></div></div></div></div>
          <form className="contact-form reveal" onSubmit={(e) => e.preventDefault()}><div className="form-row"><label>YOUR NAME<input type="text" placeholder="Enter your name" /></label><label>PHONE NUMBER<input type="tel" placeholder="Enter your number" /></label></div><label>EMAIL ADDRESS<input type="email" placeholder="Enter your email" /></label><label>PROJECT TYPE<select defaultValue=""><option value="" disabled>Select project type</option><option>Residential Construction</option><option>Commercial Construction</option><option>Renovation</option><option>Project Management</option></select></label><label>YOUR MESSAGE<textarea rows="4" placeholder="Tell us about your project..."></textarea></label><button className="primary-btn form-btn" type="submit">Send enquiry <span>↗</span></button></form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark">V</span><span><strong>VIGHNAHARTA</strong><small>CONSTRUCTION</small></span></a><p>Building dependable spaces with quality, care and purpose.</p><div className="socials"><a href="#home">in</a><a href="#home">ig</a><a href="#home">fb</a></div></div>
        <div className="footer-bottom"><span>© 2026 Vighnaharta Construction. All rights reserved.</span><span>Designed for a better build.</span></div>
      </footer>
    </div>
  );
}

export default App;
