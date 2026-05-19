import React, { useState } from 'react';
import { 
  Database, 
  Code2, 
  BarChart3, 
  TerminalSquare, 
  Mail, 
  ChevronDown,
  ExternalLink,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-cyan-400 tracking-tight">JVE</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'Skills', 'Projects', 'Experience'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="md:hidden text-sm font-medium hover:text-cyan-400"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-start max-w-6xl mx-auto px-6 pt-20">
        <div className="space-y-6 max-w-3xl">
          <p className="text-cyan-400 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Jasiel Villa-Estrada.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-300 tracking-tight">
            I engineer data into action.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl pt-4">
            I am a Data Analyst, Full-Stack Developer, and Business Operator. I specialize in translating complex data into actionable insights for executive leadership and engineering robust, full-stack solutions to optimize business operations.
          </p>
          <div className="flex flex-wrap gap-4 pt-8">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              View My Work <ChevronDown size={18} />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 font-semibold rounded-lg transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Technical Arsenal</h2>
            <div className="h-px bg-slate-800 flex-grow ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <SkillCard 
              icon={<Database className="text-cyan-400" size={32} />}
              title="Data & BI"
              skills={['Tableau & Prep', 'Oracle BI', 'Microsoft SQL Server', 'CUIC', 'Access & Excel']}
            />
            <SkillCard 
              icon={<Code2 className="text-cyan-400" size={32} />}
              title="Languages"
              skills={['SQL', 'Python', 'React / JSX', 'R', 'Visual Basic']}
            />
            <SkillCard 
              icon={<TerminalSquare className="text-cyan-400" size={32} />}
              title="Development"
              skills={['Electron', 'Vite', 'Node.js', 'Full-Stack Architecture', 'UI/UX Design']}
            />
            <SkillCard 
              icon={<BarChart3 className="text-cyan-400" size={32} />}
              title="Analytics Expertise"
              skills={['Data Governance', 'Workflow Automation', 'Workload Forecasting', 'Reproducible Analytics']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Inventory Management & POS App"
              description="Engineered a feature-rich, full-stack desktop application using React and Electron to manage complex product tracking and point-of-sale operations. Designed tools including an analytics dashboard, QR code generation, multi-tag filtering, and bulk CSV import/export for seamless Shopify integration."
              tags={['React', 'Electron', 'Python', 'Tailwind']}
            />
            <ProjectCard 
              title="Real-Time KPM Dashboard"
              description="Built an Oracle Business Intelligence and Tableau dashboard that tracks whether Key Performance Measures are met and identifies contributing factors for missed goals. Partnered with database administrators to validate data sources, successfully removing barriers to data limitations."
              tags={['Oracle BI', 'Tableau', 'SQL', 'Data Modeling']}
            />
            <ProjectCard 
              title="UV Printer Ink Calculator"
              description="Developed a functional full-stack desktop application utilizing React, Python, and Electron to execute database management, process ink consumption logic, and deploy frontend updates for profitability analysis."
              tags={['React', 'Electron', 'Python', 'Database Management']}
            />
            <ProjectCard 
              title="Staff and Department Scorecards"
              description="Created Tableau-based scorecards to monitor agency, department, team, and individual performance. Conducted feasibility studies to optimize data sources for transparent, repeatable reporting mechanisms."
              tags={['Tableau', 'Data Architecture', 'Business Intelligence']}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Professional Experience</h2>
            <div className="h-px bg-slate-800 flex-grow ml-4"></div>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            <ExperienceItem 
              role="Data Analyst (Operations & Policy)"
              company="Oregon Employment Department"
              date="Dec 2018 - Present"
              details={[
                "Design, interpret, and engineer complex dashboards to assist executive leadership with making data-driven decisions.",
                "Assist Database Administrators in validating and establishing new data sources to ensure strict data governance and reproducible analytics.",
                "Forecast staffing, attrition, and leave allowances based on short-term and long-term business needs.",
                "Facilitate cross-department collaboration to track Key Performance Measures (KPMs) and Service Level Agreements (SLAs)."
              ]}
            />
            <ExperienceItem 
              role="AI Evaluator & Model Trainer"
              company="DataAnnotation"
              date="Remote"
              details={[
                "Evaluate artificial intelligence responses and complete training models to improve logic, coding, and reasoning.",
                "Work across specialized LLM projects including Achilles, Tokamak, Nightshade, and Tango."
              ]}
            />
            <ExperienceItem 
              role="Owner, Operator & Developer"
              company="Insert Engraving LLC"
              date="Apr 2025 - Present"
              details={[
                "Manage end-to-end business operations, optimizing production workflows to consistently meet high-demand customer deadlines.",
                "Establish reproducible data tracking for inventory, sales pipelines, and equipment maintenance to guide strategic business growth."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Whether you have a question about my projects, need robust data solutions, or want to discuss a full-stack build, my inbox is always open.
          </p>
          <div className="flex justify-center gap-6 mb-16">
            <a href="mailto:jasielvilla@gmail.com" className="p-4 bg-slate-800 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-full transition-all text-slate-300">
              <Mail size={28} />
            </a>
            <a href="https://github.com/jasielvilla-blip" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-full transition-all text-slate-300">
              <GithubIcon size={28} />
            </a>
            <a href="https://www.linkedin.com/in/jasielvilla" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-full transition-all text-slate-300">
              <LinkedinIcon size={28} />
            </a>
          </div>
          <p className="text-slate-600 text-sm font-mono">
            Designed & Built by Jasiel Villa-Estrada &copy; 2026
          </p>
        </div>
      </section>

    </div>
  );
};

// Custom SVG Icons for Brands (to bypass lucide-react missing exports)
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Sub-components
const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
    <div className="mb-4 bg-slate-900 w-14 h-14 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-200 mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-slate-400 flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, description, tags }) => (
  <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:-translate-y-2 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <Briefcase className="text-cyan-400" size={32} />
      <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
        <ExternalLink size={24} />
      </a>
    </div>
    <h3 className="text-2xl font-bold text-slate-100 mb-3">{title}</h3>
    <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag, index) => (
        <span key={index} className="px-3 py-1 bg-slate-950 text-cyan-400 border border-cyan-900/50 rounded-full text-xs font-mono">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ role, company, date, details }) => (
  <div className="relative pl-8 border-l border-slate-800 group">
    <div className="absolute w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full -left-[9px] top-1 group-hover:bg-cyan-500 transition-colors"></div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
      <h3 className="text-xl font-bold text-slate-100">
        {role} <span className="text-cyan-400">@ {company}</span>
      </h3>
      <span className="text-slate-500 font-mono text-sm mt-1 md:mt-0">{date}</span>
    </div>
    <ul className="space-y-3 mt-4">
      {details.map((detail, index) => (
        <li key={index} className="text-slate-400 flex items-start gap-3">
          <span className="text-cyan-500 mt-1.5 leading-none">▹</span>
          <span className="leading-relaxed">{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default App;