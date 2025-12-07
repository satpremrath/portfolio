import React from "react";
import "./index.css";

const blogPosts = [
  "Designing Multi-Agent AI Systems with LangGraph and Watsonx",
  "Practical RAG Architectures for Enterprise Data",
  "Scaling PySpark Pipelines on Lakehouse Architectures",
  "Building Robust RAG Pipelines with Milvus and watsonx.data",
];

function App() {
  return (
    <div className="app">

      {/* Top Navigation */}
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo">SR</span>
          <span className="brand">Satprem Rath</span>
        </div>
        <nav className="navbar-right">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#blogs">Blogs</a> {/* NEW */}
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
              <p className="hero-kicker">Advisory AI Engineer • Data & AI</p>
              <h1>Hi, I’m <span className="highlight">Satprem</span>.
              </h1>
            {/* Photo + Name + Title block */}
            <div className="hero-identity">
              <div className="profile-frame">
                <img src="/Satprem_pp.jpeg" alt="Satprem Rath" />
              </div>
            </div>

            <p className="hero-subtitle">
              I architect and lead AI solutions that turn real-world business problems
              into production-ready MVPs – with a strong focus on Generative AI,
              multi-agent systems, and data engineering at scale.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
        </div>

  <div className="hero-card">
    <div className="hero-tag">Open to leadership & architect roles</div>
    <ul className="hero-list">
      <li>14+ years in Data & AI</li>
      <li>Advisory AI Engineer at IBM Watsonx Client Engineering</li>
      <li>Led 60+ AI pilots across 30+ enterprise clients</li>
    </ul>
  </div>
</section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="section-header">
          <h2>About</h2>
          <p>A quick snapshot of who I am and how I work.</p>
        </div>
        <div className="about-grid">
          <div className="card">
            <h3>Who I Am</h3>
            <p>
              I’m an Advisory AI Engineer with strong hands-on experience in
              building scalable AI and data solutions. I partner closely with
              business and technical stakeholders to design, build, and
              operationalise high-impact AI MVPs.
            </p>
            <p>
              I enjoy mentoring teams, simplifying complex architectures, and
              driving initiatives that turn emerging AI capabilities into
              tangible business outcomes.
            </p>
          </div>
          <div className="card">
            <h3>What I Do</h3>
            <ul className="list">
              <li>Architect end-to-end AI/ML and GenAI solutions.</li>
              <li>Lead technical discovery, design, and MVP delivery.</li>
              <li>Build multi-agent workflows and RAG-based applications.</li>
              <li>Mentor engineers and conduct bootcamps & enablement sessions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <div className="section-header">
          <h2>Experience Highlights</h2>
          <p>Key responsibilities and impact across roles.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content card">
              <h3>Advisory AI Engineer – IBM Watsonx Client Engineering</h3>
              <p className="timeline-meta">Client-facing AI architect & technical lead</p>
              <ul className="list">
                <li>Led 60+ AI pilots with 30+ enterprise clients across industries.</li>
                <li>Architected GenAI and RAG solutions using watsonx, Spark, and vector DBs.</li>
                <li>Collaborated with global teams to deliver scalable AI PoCs and MVPs.</li>
                <li>Ran enablement sessions and bootcamps for engineers and stakeholders.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content card">
              <h3>Lead Data Scientist – RDA Labs</h3>
              <p className="timeline-meta">Team leadership & solution delivery</p>
              <ul className="list">
                <li>Led a team of 3–5 data scientists on end-to-end ML projects.</li>
                <li>Designed and deployed solutions for NLP, classical ML, and deep learning.</li>
                <li>Worked hands-on with Python, SQL, Spark, and cloud-native tooling.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="section-header">
          <h2>Skills</h2>
          <p>Technologies and areas I work with most.</p>
        </div>
        <div className="skills-grid">
          <div className="card">
            <h3>Core Expertise</h3>
            <div className="tags">
              <span className="tag">Generative AI</span>
              <span className="tag">AI Agents & Multi-Agent Systems</span>
              <span className="tag">RAG Workflows</span>
              <span className="tag">Data Engineering</span>
              <span className="tag">Solution Architecture</span>
              <span className="tag">Client Engineering</span>
            </div>
          </div>
          <div className="card">
            <h3>Tech Stack</h3>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">Pandas</span>
              <span className="tag">PySpark</span>
              <span className="tag">React</span>
              <span className="tag">Java</span>
              <span className="tag">SQL</span>
              <span className="tag">LangChain / LangGraph</span>
              <span className="tag">CrewAI</span>
              <span className="tag">Milvus</span>
              <span className="tag">IBM Watsonx</span>
            </div>
          </div>
          <div className="card">
            <h3>Ways of Working</h3>
            <div className="tags">
              <span className="tag">Technical Leadership</span>
              <span className="tag">Mentoring</span>
              <span className="tag">MVP Delivery</span>
              <span className="tag">Stakeholder Management</span>
              <span className="tag">Workshops & Bootcamps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="section" id="blogs">
        <div className="section-header">
          <h2>Technical Blogs</h2>
          <p>Selected titles from my writing on AI, data, and engineering.</p>
        </div>
        <div className="blogs-grid">
          <div className="card">
            <h3>Recent Blog Titles</h3>
            <ul className="blogs-list">
              {blogPosts.map((title, index) => (
                <li key={index} className="blogs-list-item">
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <p>A snapshot of some representative work.</p>
        </div>
        <div className="projects-grid">
          <div className="card project-card">
            <h3>ZIA – Z Intelligent Assistant for Code</h3>
            <p>
              Multi-agent GenAI assistant for code generation, conversion, and validation,
              built with LangChain and Watsonx to accelerate developer productivity.
            </p>
            <ul className="list">
              <li>Supports multi-language code workflows and best-practice patterns.</li>
              <li>Integrates with RAG and custom tools for enterprise scenarios.</li>
            </ul>
          </div>

          <div className="card project-card">
            <h3>Dynamic Pricing Engine</h3>
            <p>
              Multi-agent pricing system that ingests competitor data from e-commerce
              platforms to recommend optimal prices for retail products.
            </p>
            <ul className="list">
              <li>Used LangChain, LangGraph, and vector stores for decision logic.</li>
              <li>Enabled near real-time pricing strategy updates.</li>
            </ul>
          </div>

          <div className="card project-card">
            <h3>RAG for Financial Analytics</h3>
            <p>
              Built a retrieval-augmented generation workflow on financial CSVs and
              unstructured documents to answer complex analytical queries.
            </p>
            <ul className="list">
              <li>Implemented hybrid search (BM25 + dense) and metadata-aware retrieval.</li>
              <li>Focused on explainability and evaluation using RAG metrics.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Let’s connect for collaborations, opportunities, or speaking sessions.</p>
        </div>
        <div className="contact-card card">
          <p>
            I’m happy to chat about AI architecture, multi-agent systems, data platforms,
            or potential collaborations.
          </p>
          <div className="contact-items">
            <div>
              <span className="contact-label">Email</span>
              <a href="mailto:youremail@example.com" className="contact-value">
                youremail@example.com
              </a>
            </div>
            <div>
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                className="contact-value"
              >
                linkedin.com/in/your-profile
              </a>
            </div>
            <div>
              <span className="contact-label">Location</span>
              <span className="contact-value">Bangalore, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Satprem Rath. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
