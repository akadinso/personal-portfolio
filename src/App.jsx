import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

const skills = {
  Languages: ["Java", "TypeScript", "JavaScript", "PHP","Kotlin", "HTML/CSS", "Python"],
  Frameworks: ["React", "Next.js", "Node.js","Bootstrap", "WordPress"],
  "Tools & Platforms": ["Git", "VS Code", "IntelliJ", "XAMPP","Vercel"],
};

const projects = [
  {
    num: "001",
    title: "AfroDiva CMS",
    desc: "Content management system with PHP backend, secure authentication, MDBGO database integration, and data visualisation for engagement tracking.",
    stack: ["PHP", "MySQL", "XAMPP", "HTML/CSS", "MDBGO"],
    live: "http://afrodivacms.mdbgo.io/",
    repo: null,
  },
  {
    num: "002",
    title: "Student Marks Predictor",
    desc: "Machine learning model using linear regression to predict student marks based on study hours, with Matplotlib visualisations showing a clear linear trend.",
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    live: null,
    repo: "https://github.com/akadinso/student-marks-predictor",
  },
  {
    num: "003",
    title: "Grow Forward",
    desc: "Mobile-first self-improvement app for South Africans with limited data and older devices. Structured audio content reduced lesson completion time by 50%.",
    stack: ["Next.js", "React", "Vercel"],
    live: "https://growforward.vercel.app/",
    repo: null,
  },
    {
    num: "004",
    title: "DocsAI",
    desc: "DocsAI helps you analyze, explain, and extract valuable insights from PDFs and files using AI — turning complex documents into clear, actionable information.",
    stack: ["React", "Lovable"],
    live: "https://clever-contract-ace.lovable.app/upload",
    repo: "https://github.com/akadinso/DocsAI-v2.0",
  },
];

const experience = [
  {
    period: "May 2026 — June 2026",
    title: "Full Stack Developer - Intern",
    company: "Future Interns · Remote",
    bullets: [
      "Designed to be a valuable learning experience that includes orientation, skill development, and the practical application of concepts in a real-world environment.",
      "Built a professional website for a real local business and pitched it to the owner as a live project.",
      "Designed a simple CRM to manage client leads generated from website contact forms.",
    ],
  },
  {
    period: "Jun 2024 — Present",
    title: "Director",
    company: "DOSA Projects · Midrand",
    bullets: [
      "Led end-to-end web development projects using HTML, CSS, JavaScript, and PHP.",
      "Managed full project lifecycles — planning, task delegation, and client communication.",
      "Provided ongoing technical support and troubleshooting for deployed systems.",
      "Executed digital marketing strategies to grow client online presence.",
    ],
  },
  {
    period: "Jun 2023 — Aug 2024",
    title: "Freelance Web Developer",
    company: "AfroDiva Creations · Midrand",
    bullets: [
      "Designed and built a user-focused website improving interface responsiveness and overall UX.",
      "Built a PHP-based CMS supporting lesson uploads and content management for 3+ active users.",
    ],
  },
];

const education = [
  { year: "2025 — 2028", degree: "BSc Computer Science (Software Engineering)", school: "Eduvos, Midrand" },
  { year: "2024", degree: "Higher Certificate in Mobile Application & Web Development", school: "Varsity College, Waterfall" },
  { year: "2021 — 2023", degree: "AS-Level", school: "Summerhill College Noordwyk, Midrand" },
];

const contacts = [
  { label: "Email", value: "akadinso.osuagwu@gmail.com", href: "mailto:akadinso.osuagwu@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/akadinso-osuagwu", href: "https://www.linkedin.com/in/akadinso-osuagwu-715929258/" },
  { label: "GitHub", value: "github.com/akadinso", href: "https://github.com/akadinso" },
  { label: "Phone", value: "071-081-1915", href: "tel:0710811915" },
];

export default function App() {
  return (
    <main className="min-h-screen">

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-32 pb-20 overflow-hidden">
        <div className="hero-grid" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(200,245,71,0.05)" }} />

        <p className="flex items-center gap-3 text-xs tracking-[0.15em] uppercase font-mono mb-6 fade-up fade-up-1" style={{ color: "var(--color-accent)" }}>
          <span className="accent-line" />
          Full-Stack Developer · Midrand, South Africa
        </p>

        <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] mb-8 fade-up fade-up-2">
          Akadinso
          <br />
          <span style={{ color: "var(--color-accent)" }}>Osuagwu</span>
        </h1>

        <p className="text-lg max-w-md leading-relaxed mb-10 fade-up fade-up-3" style={{ color: "var(--color-muted)" }}>
          Building responsive, user-focused digital products — from content management systems to mobile-first web apps. Currently studying BSc Computer Science at Eduvos.
        </p>

        <div className="flex flex-wrap gap-4 fade-up fade-up-4">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>

        <div className="absolute bottom-10 left-6 md:left-16 flex items-center gap-3 text-xs font-mono tracking-widest uppercase" style={{ color: "var(--color-muted)" }}>
          <span className="block w-10 h-px animate-pulse" style={{ background: "var(--color-muted)" }} />
          Scroll to explore
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-16" style={{ borderTop: "0.5px solid var(--color-border)" }}>
        <p className="section-label">01 — About</p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl mb-8">Developer &amp;<br />Problem Solver</h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
              I'm a <span className="font-medium" style={{ color: "var(--color-text)" }}>full-stack developer</span> with a passion for crafting clean, purposeful digital experiences. My work spans web development, content management, and data-driven applications.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
              I've worked as both a <span className="font-medium" style={{ color: "var(--color-text)" }}>freelance developer</span> and{" "}
              <span className="font-medium" style={{ color: "var(--color-text)" }}>director</span> at DOSA Projects, managing end-to-end digital solutions for real clients — from initial planning through to launch and support.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Outside of work you'll find me{" "}
              <span className="font-medium" style={{ color: "var(--color-text)" }}>making music, at the gym, or on the basketball court</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px" style={{ background: "var(--color-border)" }}>
            {[["3+", "Projects Shipped"], ["2yr", "Experience"], ["10+", "Technologies"], ["BSc", "In Progress"]].map(([num, label]) => (
              <div key={label} className="card p-8 text-center">
                <div className="text-4xl font-black mb-1" style={{ color: "var(--color-accent)" }}>{num}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: "var(--color-muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-16" style={{ borderTop: "0.5px solid var(--color-border)" }}>
        <p className="section-label">02 — Skills</p>
        <h2 className="text-5xl mb-12">Technical Arsenal</h2>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "var(--color-border)" }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card p-8">
              <p className="text-xs font-mono tracking-widest uppercase mb-5" style={{ color: "var(--color-accent2)" }}>{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-16" style={{ borderTop: "0.5px solid var(--color-border)" }}>
        <p className="section-label">03 — Projects</p>
        <h2 className="text-5xl mb-12">Selected Work</h2>

        <div className="flex flex-col gap-px" style={{ background: "var(--color-border)" }}>
          {projects.map((p) => (
            <div key={p.num} className="card p-8 md:p-10 group">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="text-xs font-mono mb-2" style={{ color: "var(--color-muted)" }}>{p.num}</p>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed max-w-xl mb-5" style={{ color: "var(--color-muted)" }}>{p.desc}</p>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => <span key={s} className="stack-badge">{s}</span>)}
                    </div>
                    <div className="flex gap-2">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary text-xs py-1.5 px-3">
                          ↗ Live Site
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="btn-secondary text-xs py-1.5 px-3">
                          GitHub →
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <span className="text-2xl transition-all hidden md:block group-hover:-translate-y-1 group-hover:translate-x-1" style={{ color: "var(--color-muted)" }}>↗</span>
              </div>
            </div>
          ))}

          <a href="https://github.com/akadinso" target="_blank" rel="noreferrer" className="transition-all hidden md:block group-hover:-translate-y-0.5 hover:translate-x-1 text-xs py-8 px-3" style={{ color: "var(--color-muted)" }}> 
          View All Projects
        </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 md:px-16" style={{ borderTop: "0.5px solid var(--color-border)" }}>
        <p className="section-label">04 — Experience</p>
        <h2 className="text-5xl mb-12">Work History</h2>

        <div className="timeline">
          {experience.map((e) => (
            <div key={e.title} className="timeline-item">
              <span className="timeline-dot" />
              <p className="text-xs font-mono tracking-widest mb-2" style={{ color: "var(--color-accent)" }}>{e.period}</p>
              <h3 className="text-xl font-bold mb-0.5">{e.title}</h3>
              <p className="text-sm mb-4" style={{ color: "var(--color-muted)" }}>{e.company}</p>
              <ul className="space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="timeline-bullet">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="section-label mt-16">Education</p>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "var(--color-border)" }}>
          {education.map((e) => (
            <div key={e.degree} className="card p-7">
              <p className="text-xs font-mono tracking-widest mb-3" style={{ color: "var(--color-accent2)" }}>{e.year}</p>
              <h4 className="font-bold text-sm leading-snug mb-1">{e.degree}</h4>
              <p className="text-xs" style={{ color: "var(--color-muted)" }}>{e.school}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-16" style={{ borderTop: "0.5px solid var(--color-border)" }}>
        <p className="section-label">05 — Contact</p>

        <div className="flex lg:flex-row flex-col">
          <div className="card border p-10 md:p-14 max-w-2xl" style={{ borderColor: "var(--color-border)" }}>
            <h2 className="text-5xl leading-tight">Let's Build<br />Something.</h2>
            <p className="text-sm mt-4" style={{ color: "var(--color-muted)" }}>
              Open to freelance work, collaborations, and new opportunities.
            </p>
            <div className="mt-8" style={{ borderTop: "0.5px solid var(--color-border)" }}>
              {contacts.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-link">
                  <div>
                    <p className="contact-link-label">{c.label}</p>
                    <p className="contact-link-value">{c.value}</p>
                  </div>
                  <span className="contact-link-arrow">↗</span>
                </a>
              ))}
            </div>
          
          </div><Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderTop: "0.5px solid var(--color-border)" }}>
        <p className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>
          © {new Date().getFullYear()} <span style={{ color: "var(--color-accent)" }}>Akadinso Osuagwu</span>
        </p>
        <p className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>Built with intention · Midrand, South Africa</p>
      </footer>
    </main>
  );
}