// --- CORE ARCHITECTURAL DATA ---
const projectData = [
  {
    id: 1,
    title: "Constellation, Algorithmic Vector Matchmaker Engine",
    category: "DATA PIPELINE INTERFACE",
    description: "Automated match logic engine consuming live Google Forms data schemas to map precise structural affinity nodes between entries without processing lag.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Form Architecture", "Matching Matrix", "Data Pipelines"],
    githubUrl: "https://shankaliveson.github.io/Constellation-virtual-matchmaking-Project/"
  },
  {
    id: 2,
    title: "Nexus Gadgets Digital Storefront",
    category: "E-COMMERCE ENTERPRISE",
    description: "High-throughput retail environment designed with a deep dark aesthetic, reactive state tracking across product inventories, and instantaneous filtering matrices.",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=800&q=80",
    tags: ["State Infrastructure", "UX Architecture", "Dynamic Cart"],
    githubUrl: " https://shankaliveson.github.io/E-COMMERCE-PROJECT-NEXUS-/"
  },
  {
    id: 3,
    title: "Vogue Apparel Hub & Studio",
    category: "LUXURY RETAIL STOREFRONT",
    description: "An immersive digital fashion experience focusing on smooth visual layout transformations, micro-interactions, and high-performance asset distribution.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Media Layouts", "Responsive Matrix", "Visual Design"],
    githubUrl: "https://github.com/SHANKALIVESON"
  },
  {
    id: 4,
    title: "Teez Café Web Environment",
    category: "LIVE PRODUCTION WORK",
    description: "Designed, built, and deployed a fully functional responsive business website live in production serving real-world customers.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML5 / CSS3", "Vanilla JS", "Mobile First UI"],
    githubUrl: "https://teezcafeng.com"
  },
  {
      id: 5,
      title: "Northwind Dashboard Project",
      category: "Dashboard",
      description: "Designed, built, and deployed a fully functional responsive Dashboard website.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      tags: ["HTML5 / CSS3", "Vanilla JS", "Mobile First UI"],
      githubUrl: "https://shankaliveson.github.io/Northwind-Dashboard-Project/"
    },
    {
          id: 6,
          title: "My Portfolio Project",
          category: "Portfolio",
          description: "Designed, built, and deployed a fully functional responsive Portfolio website.",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
          tags: ["HTML5 / CSS3", "Vanilla JS", "React", "Mobile First UI"],
          githubUrl: "https://shankaliveson.github.io/MY-PORTFOLIO-PROJECT/"
        }
];

// --- COMPONENT SUITES ---
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">TELE//PORTFOLIO</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="nav-cta">Let's Build</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">SYSTEM ARCHITECT & CLOUD DEVELOPER</p>
        <h1 className="hero-title">
          Building High-Performance <br />
          <span>Web Experiences.</span>
        </h1>
        <p className="hero-description">
          Computer Science graduate with deep foundations in React frontend systems, data-driven utility workflows, and Microsoft Azure cloud environments.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Applications</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-number">01 //</span>
        <h2>The Developer</h2>
      </div>
      <div className="about-grid">
        <div className="about-image-frame-wrapper">
          <div className="about-image-container">
            <img
              src="My Potrait Pic.jpeg"
              alt="Oloruntele Orungbeja"
              className="about-image"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
              }}
            />
          </div>
          <div className="image-border-accent"></div>
        </div>
        <div className="about-text">
          <p className="about-lead">
            I am a 21-year-old Computer Science graduate and Cloud Specialist bridging the space between interactive front-end systems and secure backend data infrastructure.
          </p>
          <p>
            My approach to development is rooted in high structural organization and agility. Having worked across diverse IT ecosystems—ranging from consulting pipelines at Ernst & Young to data workflows at Quomodo Systems—I engineer web applications that are robust, clean, and highly performant.
          </p>
          <p>
            Beyond system architecture, I maintain four professional Microsoft certifications (including Azure Data and AI Fundamentals) to keep my data-mapping architectures optimized.
          </p>
          <div className="hobbies-box">
            <h4>OFF-THE-CLOCK PARAMETERS</h4>
            <div className="hobbies-grid">
              <div className="hobby-tag">🎾 Lawn Tennis</div>
              <div className="hobby-tag">🏊‍♂️ Competitive Swimming</div>
              <div className="hobby-tag">🎮 Immersive Video Games</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, category, description, image, tags, githubUrl }) {
  return (
    <div className="project-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <div className="card-category">{category}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="card-actions">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
            Launch Repository
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-number">02 //</span>
        <h2>Selected Production Platforms</h2>
      </div>
      <div className="projects-grid">
        {projectData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="contact-container">
      <h3>Initiate Production Matrix</h3>
      <form onSubmit={(e) => e.preventDefault()} className="contact-form">
        <input type="text" placeholder="Identity Name" required />
        <input type="email" placeholder="Communication Routing Email" required />
        <textarea placeholder="Describe application parameters or integration needs..." rows="5" required></textarea>
        <button type="submit">Submit Parameters</button>
      </form>
    </section>
  );
}

// --- MAIN APPLICATION FRAMEWORK ---
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>

      <footer className="portfolio-footer">
        <ContactForm />
        <div className="footer-bottom">
          <p>Built by Tele //Web Developer</p>
          <p className="footer-date">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

// Mounting directly to root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);