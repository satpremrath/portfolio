import React, { useState } from "react";
import "./index.css";

const blogPosts = [
  "Architecting Production-Grade Multi-Agent AI Systems with LangGraph and Watsonx",
  "Practical RAG Architectures for Enterprise Data",
  "Building Scalable Data Pipelines on Lakehouse Platforms (IBM DataStage & WatsonX)",
  "Enterprise RAG Pipelines with Hybrid Retrieval and Vector Search with Milvus and Elasticsearch",
  "AI Guardrails and LLM Vulnerability Evaluation for Enterprise Systems",
  "Observability for Multi-Agent AI Systems using Langfuse",
];

const projects = [
  {
    title: "AI-Powered ServiceNow Operations Automation Platform",
    overview: "Architected and deployed a production-grade multi-agent AI platform enabling conversational automation across core ServiceNow operations for enterprise customers.",
    capabilities: [
      "Incident Management Automation",
      "Asset Management Operations",
      "Knowledgebase Management",
      "Intelligent Ticket Management",
      "Conversational AI Workflows",
      "Enterprise System Orchestration",
    ],
    responsibilities: [
      "Designed end-to-end enterprise AI architecture",
      "Built scalable multi-agent orchestration workflows",
      "Designed production deployment and monitoring strategy",
      "Implemented AI observability and operational governance",
      "Enabled enterprise-grade scalability and reliability",
    ],
    impact: "Improved operational efficiency through intelligent conversational automation, reducing manual service workflows and accelerating enterprise support operations.",
    stack: "ServiceNow • watsonx Orchestrate ADK • Red Hat OpenShift • Langfuse • Datadog",
  },
  {
    title: "AI-Powered Employee Leave Management System",
    overview: "Architected and deployed a production-grade multi-agent AI platform enabling conversational leave management and approval workflows for enterprise airline employees and managers.",
    capabilities: [
      "Leave Request and Cancellation Automation",
      "Conversational Leave Balance Access",
      "Leave Workflow and Approval Tracking",
      "Manager Approval Workflows",
      "Team Leave Visibility and Overlap Detection",
      "Intelligent HR Workflow Orchestration",
    ],
    responsibilities: [
      "Designed end-to-end enterprise AI architecture",
      "Built scalable multi-agent orchestration workflows",
      "Integrated conversational AI with Oracle HCM services",
      "Designed secure API orchestration and deployment strategy",
      "Implemented AI observability and governance frameworks",
    ],
    impact: "Transformed traditional web-based HR workflows into an AI-powered conversational experience, improving employee experience, operational efficiency, and workflow automation at enterprise scale.",
    stack: "Oracle HCM • watsonx Orchestrate ADK • watsonx.ai • Red Hat OpenShift • Azure API Gateway • Langfuse • Datadog",
  },
  {
    title: "Customer Operations Optimization",
    overview: "Architected and deployed a production-grade multi-agent AI platform enabling real-time decision intelligence and conversational assistance for enterprise customer support operations.",
    capabilities: [
      "Real-Time Customer Call Intelligence",
      "Technician Visit Prediction Workflows",
      "Intelligent Issue Remediation Guidance",
      "Escalation Workflow Recommendations",
      "AI-Assisted Customer Support Operations",
      "Context-Aware Conversational AI Assistance",
    ],
    responsibilities: [
      "Designed end-to-end enterprise AI architecture",
      "Built scalable multi-agent orchestration workflows",
      "Developed intelligent customer and issue profiling systems",
      "Designed production deployment and observability frameworks",
      "Enabled real-time AI decision support for live operations",
    ],
    impact: "Significantly improved customer support SLA performance by reducing ticket resolution timelines from multiple business days to near real-time operational response, while improving customer satisfaction through intelligent context-aware assistance.",
    stack: "IBM COS • watsonx Orchestrate ADK • watsonx.ai • Red Hat OpenShift • Azure API Gateway • Langfuse • Datadog",
  },
];

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const p = projects[activeProject];
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
          <a href="#skills">Expertise</a>
          <a href="#blogs">Insights</a>
          <a href="#projects">Case Studies</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
              <p className="hero-kicker">AI Architect • Enterprise GenAI & Agentic Systems</p>
              <h1>Hi, I’m <span className="highlight">Satprem</span>.
              </h1>
            {/* Photo + Name + Title block */}
            <div className="hero-identity">
              <div className="profile-frame">
                <img src={process.env.PUBLIC_URL + '/satprem-dp.png'} alt="Satprem Rath" />
              </div>
            </div>

            <p className="hero-subtitle">
              Designing and scaling production-grade AI systems that drive real business outcomes across industries.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Case Studies</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0QaX02MiuBBENbU0RQD9IfFooV_5VzotEbCj3Yyaz6rwxow/viewform?usp=dialog" className="btn-secondary" target="_blank" rel="noopener noreferrer">Request Resume</a>
            </div>
        </div>

  <div className="hero-card">
    <div className="hero-tag">Open to leadership & architect roles</div>
    <div className="hero-stats">
      <div className="hero-stat">
        <span className="hero-stat-number">14+</span>
        <span className="hero-stat-label">Years in Data & AI</span>
      </div>
      <div className="hero-stat-divider" />
      <div className="hero-stat">
        <span className="hero-stat-number">10+</span>
        <span className="hero-stat-label">Enterprise AI Apps</span>
      </div>
      <div className="hero-stat-divider" />
      <div className="hero-stat">
        <span className="hero-stat-number">15+</span>
        <span className="hero-stat-label">Bootcamps & Workshops</span>
      </div>
    </div>
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
              AI Architect with 14+ years across Data Engineering, ML, NLP, and GenAI. I design scalable, production-grade AI systems for enterprise clients — spanning agentic workflows, RAG, MLOps, and multi-agent architectures — that drive measurable business outcomes.
            </p>
            <p>
              I enjoy mentoring teams, simplifying complex architectures, and driving initiatives that turn emerging AI capabilities into tangible business outcomes.
            </p>
          </div>
          <div className="card">
            <h3>What I Do</h3>
            <ul className="list">
              <li>Architect scalable production-grade GenAI and Agentic AI platforms.</li>
              <li>Lead enterprise AI architecture, discovery, and production-scale deployments.</li>
              <li>Build resilient multi-agent workflows and enterprise-grade RAG systems.</li>
              <li>Mentor engineers on scalable AI systems and enterprise AI adoption.</li>
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
              <p className="timeline-meta">Client-Facing AI Architect & Enterprise Technology Leader</p>
              <ul className="list">
                <li>Architected enterprise-scale Agentic AI and GenAI transformation platforms.</li>
                <li>Designed production-grade multi-agent systems and intelligent AI workflows.</li>
                <li>Built scalable RAG and multimodal AI enterprise architectures.</li>
                <li>Led AI discovery, solution architecture, and enterprise AI adoption.</li>
                <li>Conducted enterprise AI bootcamps and on-site client architecture workshops.</li>
                <li>Implemented AI guardrails and LLM vulnerability evaluation frameworks.</li>
                <li>Mentored engineers and established scalable AI governance standards.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content card">
              <h3>Lead Data Scientist | AI/ML Solution Architect – RDA Labs</h3>
              <p className="timeline-meta">Team leadership & solution delivery</p>
              <ul className="list">
                <li>Led AI/ML solution design and scalable enterprise AI delivery.</li>
                <li>Managed and mentored high-performing cross-functional AI engineering teams.</li>
                <li>Built NLP, semantic search, and multilingual AI applications.</li>
                <li>Developed scalable MLOps pipelines and production AI workflows.</li>
                <li>Conducted AI workshops and enabled enterprise AI adoption initiatives.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content card">
              <h3>Advanced Data Scientist – Honeywell Technology Solutions</h3>
              <p className="timeline-meta">Advanced Analytics AI, NLP & Graph Intelligence</p>
              <ul className="list">
                <li>Designed enterprise graph databases for MDM, supply chain, and fraud detection.</li>
                <li>Developed graph ML models for recommendations, inference, and deduplication.</li>
                <li>Built scalable Databricks PySpark pipelines for enterprise data processing.</li>
                <li>Developed multilingual NLP and similarity models using Hugging Face transformers.</li>
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
            <h3>AI & Architecture Expertise</h3>
            <div className="tags">
              <span className="tag">Agentic AI & Multi-Agent Systems</span>
              <span className="tag">Enterprise GenAI Architecture</span>
              <span className="tag">Retrieval-Augmented Generation (RAG)</span>
              <span className="tag">Multimodal AI Systems</span>
              <span className="tag">AI Platform Architecture</span>
              <span className="tag">NLP & Intelligent Automation</span>
              <span className="tag">AI Observability & Governance</span>
              <span className="tag">Production AI Deployments</span>
            </div>
          </div>
          <div className="card">
            <h3>Enterprise AI Technology Stack</h3>
            <div className="tags">
              <span className="tag">IBM watsonx.ai & watsonx Orchestrate</span>
              <span className="tag">LangChain, LangGraph & CrewAI</span>
              <span className="tag">Milvus, Elasticsearch & Vector Search</span>
              <span className="tag">Python, PySpark & FastAPI</span>
              <span className="tag">Kubernetes, OpenShift & IBM Cloud</span>
              <span className="tag">Langfuse, OpenTelemetry & AI Observability</span>
              <span className="tag">DataStage, Databand & Watsonx.data</span>
            </div>
          </div>
          <div className="card">
            <h3>Leadership & Delivery Approach</h3>
            <div className="tags">
              <span className="tag">Client-Facing Technical Leadership</span>
              <span className="tag">Pilot-to-Production Delivery</span>
              <span className="tag">Enterprise Architecture Workshops</span>
              <span className="tag">AI Discovery & Solution Design</span>
              <span className="tag">Technical Mentorship & Enablement</span>
              <span className="tag">Cross-Functional Collaboration</span>
              <span className="tag">Scalable AI Governance Practices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="section" id="blogs">
        <div className="section-header">
          <h2>Technical Blogs</h2>
          <p>Selected insights on enterprise AI architecture, Agentic AI, RAG systems, and scalable AI engineering.</p>
        </div>
        <div className="blogs-grid">
          {blogPosts.map((title, index) => (
            <div key={index} className="blog-card">
              <span className="blog-index">{String(index + 1).padStart(2, '0')}</span>
              <p className="blog-title">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="section-header">
          <h2>Enterprise AI Systems</h2>
          <p>Production-grade AI platforms architected and delivered for enterprise clients.</p>
        </div>

        {/* Project Tabs */}
        <div className="project-tabs">
          {projects.map((proj, i) => (
            <button
              key={i}
              className={`project-tab-btn ${activeProject === i ? "active" : ""}`}
              onClick={() => setActiveProject(i)}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Project Detail Panel */}
        <div className="project-detail card">
          <h3 className="project-detail-title">{p.title}</h3>

          <div className="project-detail-grid">
            <div className="project-detail-col">
              <div className="project-section-label">Overview</div>
              <p className="project-detail-text">{p.overview}</p>

              <div className="project-section-label">Business Impact</div>
              <p className="project-detail-text">{p.impact}</p>

              <div className="project-section-label">Technology Stack</div>
              <p className="project-stack">{p.stack}</p>
            </div>

            <div className="project-detail-col">
              <div className="project-section-label">Core Capabilities</div>
              <ul className="project-list">
                {p.capabilities.map((c, i) => <li key={i}>{c}</li>)}
              </ul>

              <div className="project-section-label">Architecture Responsibilities</div>
              <ul className="project-list">
                {p.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
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
              <a href="mailto:catchsatprem@gmail.com" className="contact-value">
                catchsatprem@gmail.com
              </a>
            </div>
            <div>
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/satprem-rath-6735501a/"
                target="_blank"
                rel="noreferrer"
                className="contact-value"
              >
                linkedin.com/in/satprem-rath
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
