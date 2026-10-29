import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Cloud, Layers3, Database } from 'lucide-react';
import { certificateArray } from './component/constant.js/constant';
import portrait from './asset/MehulGargPic.jpg';
import cloudx from './asset/CloudX Suite.png';
import solutionsBadge from './asset/aws-certified-solutions-architect-associate-badge.png';
import aiBadge from './asset/Mehul Garg AWS AI Practitioner Badge.png';
import cloudBadge from './asset/Mehul Garg AWS Certified Cloud Practitioner Badge.png';
import trishul from './asset/Trishulwebsite.png';
import star from './asset/StarTroopers.png';
import resume from './asset/Mehul_Garg_Senior_Software_Engineer_4YoE_Resume.pdf';
import CloudXCaseStudy from './component/Projects/CloudXCaseStudy';
import ContactForm from './component/Contact/ContactForm';
import './App.css';

const external = { target: '_blank', rel: 'noopener noreferrer' };
const projects = [
  { number: '01', title: 'CloudX Suite', kind: 'SERVERLESS BACKEND · AWS', text: 'A full-stack platform that brings credit card rewards comparison and community blogging together.', detail: '13 Lambda functions across four application domains, integrating ten AWS services.', tags: ['Node.js', 'Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'S3', 'Step Functions', 'SNS', 'IAM', 'CloudWatch', 'CloudFront', 'React 19'], image: cloudx, url: 'https://cloudxsuite.netlify.app' },
  { number: '02', title: 'Trishul Techfest', kind: 'WEB EXPERIENCE', text: 'An interactive website for HNB Garhwal University’s annual technology festival.', tags: ['HTML', 'CSS', 'JavaScript'], image: trishul, url: 'https://trishulfest.netlify.app/' },
  { number: '03', title: 'Star Troopers', kind: 'WEB APPLICATION', text: 'A searchable character explorer that retrieves and displays data from an API.', tags: ['React', 'JavaScript', 'API'], image: star, url: 'https://mehulgarg22.github.io/Star-Troopers/' }
];
const awsBadges = [
  { name: 'AWS Certified Solutions Architect – Associate', image: solutionsBadge, url: certificateArray[0].imageLink, action: 'View certificate' },
  { name: 'AWS Certified AI Practitioner', image: aiBadge, url: certificateArray[1].linkToVerify, action: 'Verify credential' },
  { name: 'AWS Certified Cloud Practitioner', image: cloudBadge, url: certificateArray[2].linkToVerify, action: 'Verify credential' },
];
// Resume skills plus AWS SES, explicitly added by Mehul.
const skills = [
  {
    icon: Database,
    title: 'Backend & database',
    tags: ['Node.js', 'REST APIs', 'JWT Authentication', 'RBAC', 'OAuth 2.0', 'OIDC', 'DynamoDB']
  },
  {
    icon: Cloud,
    title: 'Cloud infrastructure (AWS)',
    tags: ['Lambda', 'S3', 'API Gateway', 'SES', 'SNS', 'Step Functions', 'Amplify', 'Cognito', 'IAM', 'CloudWatch', 'CloudFront']
  },
  {
    icon: Code2,
    title: 'Frontend',
    tags: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Context API', 'Zustand', 'Tailwind CSS', 'Material UI', 'Ant Design', 'HTML', 'CSS']
  },
  {
    icon: Layers3,
    title: 'Languages & development / AI tools',
    tags: ['C', 'C++', 'Git', 'GitHub', 'Bitbucket', 'AWS CodeCommit', 'Postman', 'Netlify', 'Webpack', 'npm', 'Vite', 'Jest (Basic)', 'Kiro']
  }
];

function App() {
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="header"><div className="nav container"><a className="logo" href="#top" aria-label="Mehul Garg home"><span className="logo-mark">m<span>.</span></span><span>MEHUL GARG<small>SOFTWARE ENGINEER</small></span></a><button className="menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{[['Experience','experience'],['Work','work'],['Skills','skills'],['About','about']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15}/></a></nav></div></header>
    <main id="main"><section className="hero container" id="top"><div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> BACKEND & CLOUD ENGINEERING</div><h1>Mehul Garg<span>.</span></h1><div className="hero-role">Software Engineer <span>·</span> Node.js & AWS</div><p>I build serverless backends, REST APIs, and event-driven workflows with Node.js and AWS, connecting identity, data, storage, and cloud services.</p><div className="actions"><a className="button button-primary" href="#work">Explore my work <ArrowDown size={17}/></a><a className="button button-secondary" href={resume} {...external}>View Resume <ArrowUpRight size={17}/></a></div><div className="hero-social"><span>FIND ME ON</span><a href="https://www.linkedin.com/in/mehulgarg22/" {...external} aria-label="LinkedIn"><Linkedin size={18}/></a><a href="https://github.com/MehulGarg22" {...external} aria-label="GitHub"><Github size={18}/></a><a href="mailto:mehul.garg104@gmail.com" aria-label="Email"><Mail size={18}/></a></div></div><div className="hero-side"><div className="portrait-card"><div className="portrait-top"><span>THE PERSON BEHIND THE CODE</span><span>✳</span></div><img src={portrait} alt="Mehul Garg"/><div className="portrait-bottom"><div><strong>Mehul Garg</strong><span>Software Engineer</span></div><span className="portrait-arrow">↗</span></div></div><div className="floating-note"><span>✳</span><div><strong>Backend & cloud</strong><small>APIs. Data. Events.</small></div></div></div></section>
    <div className="proof container"><div><strong>13</strong><p>Lambda functions in CloudX Suite</p></div><div><strong>10</strong><p>AWS services in CloudX Suite</p></div><div><strong>3<span>×</span></strong><p>AWS certified</p></div><div className="proof-caption">BACKEND & CLOUD<br/><span>APIs. Data. Event-driven workflows.</span></div></div>
    <section className="badge-spotlight" aria-labelledby="aws-heading"><div className="container credentials"><div><span className="kicker">ALWAYS LEARNING</span><h2 id="aws-heading">AWS certified.<br/><span>Ready to build.</span></h2><p>Three certifications across cloud architecture, AI, and foundational cloud knowledge.</p></div><div className="credential-links"><div className="aws-badge-grid">{awsBadges.map(badge => <a className="aws-badge-card" href={badge.url} key={badge.name} {...external}><img src={badge.image} alt="" loading="lazy"/><strong>{badge.name}</strong><span>{badge.action} <ArrowUpRight size={15}/></span></a>)}</div><details><summary>More certificates and training</summary>{certificateArray.slice(3).map(c => <a key={c.imageAlt} href={c.linkToVerify || c.imageLink} {...external}>{c.title || c.description}<ArrowUpRight size={16}/></a>)}</details></div></div></section>
    <section className="section container" id="experience"><div className="section-header"><div><div className="kicker"><span>01</span> / EXPERIENCE</div><h2>Built through<br/><span>experience.</span></h2></div><p>Learning, collaborating, and shipping solutions that make complex workflows simpler.</p></div><div className="experience-layout"><div className="timeline"><article><div className="timeline-date">2022 — PRESENT</div><div><div className="job-top"><div><h3>Software Engineer</h3><p>Tata Consultancy Services</p></div><span>01</span></div><p className="job-copy">Building enterprise cloud applications, reusable React interfaces, and secure serverless workflows.</p><ul><li>Created 45+ reusable React components, reducing UI build time by 40%.</li><li>Built document automation workflows that cut manual entry by 50%.</li><li>Worked with Cognito, Lambda, API Gateway, and DynamoDB.</li></ul></div></article><article><div className="timeline-date">2021 — 2022</div><div><div className="job-top"><div><h3>Software Development Engineer Intern</h3><p>Airtel Digital</p></div><span>02</span></div><a className="project-link" href="https://drive.google.com/file/d/1zj2Wz29O_KdMGf8NRrwC7AXPEVkIAD7V/view?usp=sharing" {...external}>View internship certificate <ArrowUpRight size={15}/></a></div></article></div><aside className="education-card"><div className="kicker">THE FOUNDATION</div><div className="education-symbol">✳</div><h3>Information<br/>Technology</h3><p>B.Tech · 2018–2022</p><div className="education-divider"/><strong>Hemvati Nandan Bahuguna Garhwal University</strong><p>Department rank 1 · Top 5 across the School of Engineering & Technology</p></aside></div></section>
    <section className="section container" id="work"><div className="section-header"><div><div className="kicker"><span>02</span> / SELECTED WORK</div><h2>Good ideas deserve<br/><span>great execution.</span></h2></div><p>Products and experiments that bring together thoughtful interfaces and practical engineering.</p></div><div className="project-grid">{projects.map((p,i) => <React.Fragment key={p.title}><article className={`project ${i===0?'featured':''}`} key={p.title}><a className="project-image" href={p.url} {...external} aria-label={`Visit ${p.title}`}><img src={p.image} alt={`${p.title} project screenshot`} loading="lazy"/><span className="image-arrow"><ArrowUpRight size={22}/></span></a><div className="project-content"><div className="project-overline"><span>{p.kind}</span><span>{p.number} / 03</span></div><h3>{p.title}</h3><p>{p.text}</p>{p.detail && <p className="project-detail">{p.detail}</p>}<div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="project-link" href={p.url} {...external}>View project <ArrowUpRight size={16}/></a></div></article>{i === 0 && <CloudXCaseStudy />}</React.Fragment>)}</div><div className="other-work"><span>MORE PROJECTS</span><div><a href="https://github.com/MehulGarg22/Cricket_Fantasy_Game" {...external}>Cricket Fantasy Game <ArrowUpRight size={15}/></a><a href="https://github.com/MehulGarg22/Algo_Engineering" {...external}>Algo Engineering <ArrowUpRight size={15}/></a><a href="https://colorpiker.netlify.app/" {...external}>Color Picker <ArrowUpRight size={15}/></a></div></div></section>
    <section className="section skills-section" id="skills"><div className="container"><div className="section-header"><div><div className="kicker"><span>03</span> / EXPERTISE</div><h2>APIs, data,<br/><span>and cloud systems.</span></h2></div><p>My backend and AWS toolkit, supported by full-stack experience that connects services to the people using them.</p></div><div className="skill-grid">{skills.map(({icon: Icon,title,tags})=><article className="skill-card" key={title}><div className="skill-icon"><Icon size={22}/></div><h3>{title}</h3><div className="skill-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>
    <section className="section about-section" id="about"><div className="container about-grid"><div><div className="kicker"><span>04</span> / A LITTLE ABOUT ME</div><h2>Curious by nature.<br/><span>Engineer by choice.</span></h2></div><div className="about-copy"><p>I enjoy turning complex requirements into maintainable backend systems. My focus is on API design, serverless workflows, data access, and connecting AWS services into working applications.</p><p>My full-stack experience helps me understand how those systems are used, from authentication and data flows to the React interfaces that bring them to users.</p><a href={resume} {...external} className="text-link">Get to know my experience <ArrowUpRight size={17}/></a></div></div></section>
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <div className="contact-intro">
          <div className="kicker">HAVE SOMETHING IN MIND?</div>
          <h2 id="contact-heading">Let’s build something<br/><span>meaningful together.</span></h2>
          <p>Have an opportunity, a project, or a question? Send me a message. I’d love to hear what you’re working on.</p>
          <a className="contact-email-link" href="mailto:mehul.garg104@gmail.com"><Mail size={17} aria-hidden="true"/>mehul.garg104@gmail.com</a>
        </div>
        <ContactForm />
      </div>
    </section></main>
    <footer><div className="container footer"><a href="#top" className="footer-logo">mehul<span>.</span></a><p>© {new Date().getFullYear()} Mehul Garg. Designed for the details.</p><div><a href="https://www.linkedin.com/in/mehulgarg22/" {...external}>LinkedIn ↗</a><a href="https://github.com/MehulGarg22" {...external}>GitHub ↗</a><a href="mailto:mehul.garg104@gmail.com">Email ↗</a></div></div></footer>
  </>;
}
export default App;
