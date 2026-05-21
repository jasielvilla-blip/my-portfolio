import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Code2, 
  BarChart3, 
  TerminalSquare, 
  Mail, 
  ChevronDown,
  ExternalLink,
  Briefcase,
  Menu,
  X,
  Calculator,
  ArrowLeft,
  DollarSign,
  Droplets,
  Info,
  Package,
  ShoppingCart,
  Search,
  Plus,
  QrCode,
  Download,
  AlertTriangle
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('portfolio');

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close menu after clicking
    }
  };

  if (currentView === 'ink-calculator') {
    return <InkCalculator onBack={() => setCurrentView('portfolio')} />;
  }
  
  if (currentView === 'inventory-app') {
    return <InventoryAppDemo onBack={() => setCurrentView('portfolio')} />;
  }

  if (currentView === 'tableau-scorecards') {
    return <TableauScorecards onBack={() => setCurrentView('portfolio')} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 mx-auto max-w-6xl bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-cyan-400 tracking-tight">JVE</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Hamburger Icon for Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full left-0 top-full bg-slate-950 border-b border-slate-800 shadow-xl">
            <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
              {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-6 pt-20 text-center">
        <div className="space-y-6 max-w-3xl flex flex-col items-center">
          <p className="text-cyan-400 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Jasiel Villa-Estrada.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-300 tracking-tight">
            I engineer data into action.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl pt-4 mx-auto">
            I am a Data Analyst, Full-Stack Developer, and Business Operator. I specialize in translating complex data into actionable insights for executive leadership and engineering robust, full-stack solutions to optimize business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
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
              actionText="Launch Inventory Demo"
              onAction={() => setCurrentView('inventory-app')}
            />
            <ProjectCard 
              title="Real-Time KPM Dashboard"
              description="Built an Oracle Business Intelligence and Tableau dashboard that tracks whether Key Performance Measures are met and identifies contributing factors for missed goals. Partnered with database administrators to validate data sources, successfully removing barriers to data limitations."
              tags={['Oracle BI', 'Tableau', 'SQL', 'Data Modeling']}
              disabledText="Demo Coming Soon"
            />
            <ProjectCard 
              title="UV Printer Ink Calculator"
              description="Developed a functional full-stack desktop application utilizing React, Python, and Electron to execute database management, process ink consumption logic, and deploy frontend updates for profitability analysis. (Interactive web demo available below)"
              tags={['React', 'Electron', 'Python', 'Database Management']}
              actionText="Launch Calculator Demo"
              onAction={() => setCurrentView('ink-calculator')}
            />
            <ProjectCard 
              title="Staff and Department Scorecards"
              description="Created Tableau-based scorecards to monitor agency, department, team, and individual performance. Conducted feasibility studies to optimize data sources for transparent, repeatable reporting mechanisms. (Live interactive dashboard embedded below)"
              tags={['Tableau', 'Data Architecture', 'Business Intelligence']}
              actionText="View Live Dashboard"
              onAction={() => setCurrentView('tableau-scorecards')}
              mobileDisabledText="View demo on desktop"
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

const ProjectCard = ({ title, description, tags, actionText, onAction, mobileDisabledText, disabledText }) => (
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
    <div className="flex flex-col gap-4 mt-auto">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-slate-950 text-cyan-400 border border-cyan-900/50 rounded-full text-xs font-mono">
            {tag}
          </span>
        ))}
      </div>
      {disabledText && (
        <button 
          disabled
          className="mt-2 w-full py-2.5 bg-slate-800/40 border border-slate-800 text-slate-500 font-semibold rounded-lg flex justify-center items-center gap-2 cursor-not-allowed"
        >
          {disabledText}
        </button>
      )}
      {actionText && !mobileDisabledText && !disabledText && (
        <button 
          onClick={onAction}
          className="mt-2 w-full py-2.5 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-semibold rounded-lg transition-colors flex justify-center items-center gap-2"
        >
          {actionText}
        </button>
      )}
      {actionText && mobileDisabledText && !disabledText && (
        <>
          <button 
            onClick={onAction}
            className="hidden md:flex mt-2 w-full py-2.5 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-semibold rounded-lg transition-colors justify-center items-center gap-2"
          >
            {actionText}
          </button>
          <button 
            disabled
            className="flex md:hidden mt-2 w-full py-2.5 bg-slate-800/40 border border-slate-800 text-slate-500 font-semibold rounded-lg justify-center items-center gap-2 cursor-not-allowed"
          >
            {mobileDisabledText}
          </button>
        </>
      )}
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

const InkCalculator = ({ onBack }) => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  
  const [cmykCost, setCmykCost] = useState(65);
  const [whiteCost, setWhiteCost] = useState(70);
  const [varnishCost, setVarnishCost] = useState(75);
  
  const [cmykCoverage, setCmykCoverage] = useState(80);
  const [whiteCoverage, setWhiteCoverage] = useState(100);
  const [varnishCoverage, setVarnishCoverage] = useState(50);

  // Industry standard rough estimate: 1 liter covers ~100 sq meters at 100% coverage
  // 100 sq meters = ~155,000 sq inches
  // -> ~0.00645 ml per sq inch at 100% coverage
  const mlPerSqInch = 0.00645;
  const area = width * height;

  const cmykUsage = area * mlPerSqInch * (cmykCoverage / 100);
  const whiteUsage = area * mlPerSqInch * (whiteCoverage / 100);
  const varnishUsage = area * mlPerSqInch * (varnishCoverage / 100);

  const cmykTotal = cmykUsage * (cmykCost / 1000);
  const whiteTotal = whiteUsage * (whiteCost / 1000);
  const varnishTotal = varnishUsage * (varnishCost / 1000);

  const totalCost = cmykTotal + whiteTotal + varnishTotal;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-12 overflow-x-hidden selection:bg-cyan-500/30">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-all"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
              <Calculator className="text-cyan-400" /> 
              UV Printer Ink Calculator
            </h1>
            <p className="text-slate-400 mt-1">Interactive profitability & consumption demo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h2 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <Database size={20} className="text-cyan-500" /> Print Dimensions
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Width (inches)</label>
                  <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:border-cyan-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Height (inches)</label>
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:border-cyan-500 focus:outline-none" />
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h2 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <Droplets size={20} className="text-cyan-500" /> Coverage & Density
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'CMYK Color', val: cmykCoverage, set: setCmykCoverage, color: 'text-blue-400' },
                  { label: 'White Base', val: whiteCoverage, set: setWhiteCoverage, color: 'text-slate-200' },
                  { label: 'Gloss / Varnish', val: varnishCoverage, set: setVarnishCoverage, color: 'text-purple-400' }
                ].map((ink, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={ink.color}>{ink.label}</span>
                      <span className="text-slate-400">{ink.val}%</span>
                    </div>
                    <input type="range" min="0" max="100" value={ink.val} onChange={(e) => ink.set(e.target.value)} className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Results Panel */}
          <div className="bg-slate-900 p-6 rounded-xl border border-cyan-900/50 shadow-[0_0_30px_rgba(6,182,212,0.1)] h-fit sticky top-6">
            <h2 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
              <DollarSign size={20} className="text-cyan-500" /> Consumption Results
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between pb-4 border-b border-slate-800">
                <span className="text-slate-400">Total Area</span>
                <span className="font-mono text-slate-200">{area.toFixed(1)} sq in</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-slate-800">
                <span className="text-slate-400">CMYK Cost</span>
                <span className="font-mono text-blue-400">${cmykTotal.toFixed(4)}</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-slate-800">
                <span className="text-slate-400">White Cost</span>
                <span className="font-mono text-slate-200">${whiteTotal.toFixed(4)}</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-slate-800">
                <span className="text-slate-400">Varnish Cost</span>
                <span className="font-mono text-purple-400">${varnishTotal.toFixed(4)}</span>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-center">
              <span className="block text-sm text-slate-400 mb-1">Total Ink Cost</span>
              <span className="text-4xl font-bold text-cyan-400">${totalCost.toFixed(3)}</span>
            </div>
          </div>

        </div>

        {/* Explanation Block */}
        <div className="bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-800 mt-12">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Info size={22} className="text-cyan-400" /> 
            Under the Hood: How this works
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">1. State Management (The Memory)</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                This component uses React's <code>useState</code> hook to store all variables that can change (dimensions, ink costs, and coverage sliders). Whenever you drag a slider or type a new dimension, React automatically triggers a re-render to instantly update the math on the screen.
              </p>
            </div>
            <div className="h-px w-full bg-slate-800"></div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">2. The Math Engine (The Logic)</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                The app runs calculations on the fly during every render cycle. It calculates the total Area (Width × Height), applies an industry-standard estimate (0.00645 ml required to cover one square inch at 100% density), and multiplies that by your chosen coverage percentages. Finally, it converts the milliliter volume into dollars based on the per-liter cost of the ink.
              </p>
            </div>
            <div className="h-px w-full bg-slate-800"></div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">3. The User Interface (The Display)</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                The interface relies on Tailwind CSS Grid for layout structure. The Results Panel uses <code>sticky</code> positioning so it stays visible while scrolling on smaller devices. The live dollar amounts utilize JavaScript's <code>.toFixed()</code> method to ensure the decimals remain cleanly formatted, proving out a seamless frontend user experience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const InventoryAppDemo = ({ onBack }) => {
  // Mock Initial Data based on Insert Engraving LLC
  const initialInventory = [
    { id: 1, name: '20oz Tumbler - Matte Black', sku: 'TUM-20-BLK', stock: 45, price: 25.00, tags: ['Drinkware', 'Laserable'] },
    { id: 2, name: 'Slate Coaster Set (4)', sku: 'CST-SLT-04', stock: 12, price: 15.00, tags: ['Home', 'Stone'] },
    { id: 3, name: 'Leatherette Patch Hat', sku: 'HAT-LTH-BRN', stock: 5, price: 22.00, tags: ['Apparel', 'Low Stock'] },
    { id: 4, name: 'Acrylic LED Nightlight Base', sku: 'LED-ACR-01', stock: 85, price: 12.50, tags: ['Acrylic', 'Accessories'] },
    { id: 5, name: 'Cutting Board - Walnut', sku: 'BRD-WAL-LG', stock: 2, price: 45.00, tags: ['Kitchen', 'Wood', 'Low Stock'] },
  ];

  const [inventory, setInventory] = useState(initialInventory);
  const [searchQuery, setSearchQuery] = useState('');

  // Derived state for KPI metrics
  const totalItems = inventory.reduce((acc, curr) => acc + curr.stock, 0);
  const totalValue = inventory.reduce((acc, curr) => acc + (curr.stock * curr.price), 0);
  const lowStockCount = inventory.filter(item => item.stock < 10).length;

  // Derived state for filtering
  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mock actions
  const handleSell = (id) => {
    setInventory(inventory.map(item => 
      item.id === id && item.stock > 0 ? { ...item, stock: item.stock - 1 } : item
    ));
  };

  const handleRestock = (id) => {
    setInventory(inventory.map(item => 
      item.id === id ? { ...item, stock: item.stock + 5 } : item
    ));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-12 overflow-x-hidden selection:bg-cyan-500/30">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <Package className="text-cyan-400" /> 
                Inventory Management & POS
              </h1>
              <p className="text-slate-400 mt-1">Interactive state management & filtering demo</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 rounded-lg text-sm font-medium transition-colors">
              <QrCode size={16} /> QR Labels
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 rounded-lg text-sm font-medium transition-colors">
              <Download size={16} /> Export CSV
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-4">
            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg">
              <Package size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Total Items in Stock</p>
              <p className="text-2xl font-bold text-slate-100">{totalItems}</p>
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Low Stock Alerts</p>
              <p className="text-2xl font-bold text-slate-100">{lowStockCount}</p>
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-lg">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Total Inventory Value</p>
              <p className="text-2xl font-bold text-slate-100">${totalValue.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Main Interface */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
          
          {/* Toolbar */}
          <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row justify-between gap-4 bg-slate-900/50">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search by name or SKU..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <button className="flex justify-center items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-medium transition-colors">
              <Plus size={16} /> Add Product
            </button>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950/50 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-medium">Product Name & SKU</th>
                  <th className="px-6 py-4 font-medium">Tags</th>
                  <th className="px-6 py-4 font-medium">Price</th>
                  <th className="px-6 py-4 font-medium">Stock</th>
                  <th className="px-6 py-4 font-medium text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {filteredInventory.length > 0 ? filteredInventory.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-200">{item.name}</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">{item.sku}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map(tag => (
                          <span key={tag} className={`px-2 py-0.5 rounded text-xs ${tag === 'Low Stock' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-slate-300">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-bold ${item.stock < 10 ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                        {item.stock} in stock
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button 
                        onClick={() => handleSell(item.id)}
                        disabled={item.stock === 0}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 disabled:opacity-50 disabled:hover:border-slate-700 disabled:hover:text-slate-200 rounded text-xs font-medium transition-colors"
                      >
                        <ShoppingCart size={14} /> Sell 1
                      </button>
                      <button 
                        onClick={() => handleRestock(item.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-700 hover:border-emerald-500 hover:text-emerald-400 rounded text-xs font-medium transition-colors"
                      >
                        <Plus size={14} /> Restock 5
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                      No products found matching "{searchQuery}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Explanation Block */}
        <div className="bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-800 mt-12">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Info size={22} className="text-cyan-400" /> 
            Under the Hood: The Full-Stack Context
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">1. Derived State & Filtering</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Type in the search bar above. Notice how the table updates instantly? This demo uses React's derived state to filter an array of objects in real-time based on the <code>searchQuery</code> state, completely eliminating the need for a database round-trip for basic UI searches.
              </p>
            </div>
            <div className="h-px w-full bg-slate-800"></div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">2. Immutable State Mutations</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Clicking "Sell 1" or "Restock 5" triggers a function that maps over the inventory array, finds the matching ID, and returns a new object with the updated stock count. This adherence to immutability is crucial for predictable rendering in complex React applications. Notice how the top KPIs (Total Items, Low Stock, Value) update automatically because they are calculated directly from the state.
              </p>
            </div>
            <div className="h-px w-full bg-slate-800"></div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">3. The Real Application Architecture</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                While this is a client-side web demo, the actual production version of this software was built using <strong>Electron</strong>. This allowed the application to break out of the browser sandbox, enabling direct file system access to generate physical QR code labels, communicate with hardware scanners, and execute local Python scripts for heavy database transactions and Shopify CSV compilation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const TableauScorecards = ({ onBack }) => {
  useEffect(() => {
    const divElement = document.getElementById('viz1779333883470');
    const vizElement = divElement.getElementsByTagName('object')[0];
    
    // Adjusted height values to remove excess white space
    if (divElement.offsetWidth > 800) { 
      vizElement.style.width = '100%'; 
      vizElement.style.height = '850px'; 
    } else if (divElement.offsetWidth > 500) { 
      vizElement.style.width = '100%'; 
      vizElement.style.height = '850px'; 
    } else { 
      vizElement.style.width = '100%'; 
      vizElement.style.height = '850px'; 
    }
    
    // Check if script is already present to prevent duplicates on remounts
    if (!document.getElementById('tableau-api-script')) {
      const scriptElement = document.createElement('script');
      scriptElement.id = 'tableau-api-script';
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-12 overflow-x-hidden selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <BarChart3 className="text-cyan-400" /> 
                Staff and Department Scorecards
              </h1>
              <p className="text-slate-400 mt-1">Live Tableau Public Embed</p>
            </div>
          </div>
        </div>

        {/* Tableau Container */}
        <div className="bg-white p-2 rounded-xl border border-slate-800 overflow-hidden flex justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)]">
          <div className='tableauPlaceholder' id='viz1779333883470' style={{ position: 'relative' }}>
            <noscript>
              <a href='#'>
                <img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/NH/NHPDKFS27/1_rss.png' style={{ border: 'none' }} />
              </a>
            </noscript>
            <object className='tableauViz' style={{ display: 'none' }}>
              <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
              <param name='embed_code_version' value='3' /> 
              <param name='path' value='shared/NHPDKFS27' /> 
              <param name='toolbar' value='yes' />
              <param name='static_image' value='https://public.tableau.com/static/images/NH/NHPDKFS27/1.png' /> 
              <param name='animate_transition' value='yes' />
              <param name='display_static_image' value='yes' />
              <param name='display_spinner' value='yes' />
              <param name='display_overlay' value='yes' />
              <param name='display_count' value='yes' />
              <param name='language' value='en-US' />
            </object>
          </div>
        </div>
        
        {/* Explanation Block */}
        <div className="bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-800 mt-12">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <Info size={22} className="text-cyan-400" /> 
            Under the Hood: Tableau React Integration
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">Dynamic Script Injection</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Since React single-page applications do not execute inline <code>&lt;script&gt;</code> tags inherently for security reasons, this demo utilizes the <code>useEffect</code> hook to dynamically calculate device width and inject the Tableau JavaScript API into the Document Object Model (DOM) seamlessly after the component mounts.
              </p>
            </div>
            <div className="h-px w-full bg-slate-800"></div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-500 mb-2">Preserved Design Environment</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                The embedding container uses specific Tailwind classes (<code>bg-white</code> and custom overflow handling) to ensure that the bright colors and layout styling built in Tableau do not clash visually with the overarching "dark mode" theme of the portfolio architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;