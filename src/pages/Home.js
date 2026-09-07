import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const skills = [
  'Java',
  'Java EE',
  'Spring Boot',
  'Python',
  'SQL',
  'PowerShell',
  'JavaScript',
  'React',
  'HTML/CSS',
  'Linux',
  'TensorFlow',
  'Machine Learning',
  'Sécurité informatique',
];

const experiences = [
  {
    period: '04 mai 2026 – 27 août 2026',
    title: 'Stage Développeur – Gouvernance technique & flux de données',
    company: 'e.SNCF Solutions (filiale SNCF) – Lyon',
    description:
      'Intégré à l’équipe de gouvernance technique, j’ai travaillé sur plusieurs applications de la plateforme SNCF, notamment CIGAL, en pilotant les flux de données, la qualité des livraisons et la coordination technique avec les équipes de développement. J’ai aussi participé à la sécurisation de l’application SIRH sur OpenAM/SSO, OAuth2, MFA OTP, JWT, scripts SQL et administration des serveurs Linux/Apache Tomcat.',
  },
  {
    period: 'Sept. 2023 – Juin 2025',
    title: 'Étudiant en Licence 3 MIAGE',
    company: 'Université de Haute-Alsace – Mulhouse',
    description:
      'Formation approfondie en développement logiciel, méthodes informatiques, gestion d’entreprise, bases de données, algorithmique, mathématiques et systèmes d’information.',
  },
];

const projects = [
  {
    title: 'CIGAL / SIRH SNCF',
    category: 'Applications SNCF & sécurité',
    description:
      'Travail sur plusieurs applications SNCF, dont CIGAL et SIRH, avec gestion des flux de données, sécurisation des accès, OpenAM, OAuth2, MFA OTP, JWT, scripts SQL Oracle et déploiement sur environnement de recette.',
    path: '/projet/sncf',
    accent: 'blue',
  },
  {
    title: 'Détection de pathologies pulmonaires',
    category: 'IA médicale',
    description:
      'Projet de deep learning basé sur Python et TensorFlow pour classer des radiographies pulmonaires avec des architectures CNN et ResNet-50.',
    path: '/projet/cnn',
    accent: 'purple',
  },
  {
    title: 'Gestion d’un réseau aéroportuaire',
    category: 'Théorie des graphes',
    description:
      'Modélisation d’un réseau aéroportuaire avec Dijkstra, Kruskal, Prüfer, BFS et DFS pour optimiser les parcours et analyser les structures de connexion.',
    path: '/projet/graphes',
    accent: 'green',
  },
];

function Home() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="page-content">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Ibrahima Diallo</p>
            <h1>
              Recherche d’alternance en <span>développement logiciel</span> / sécurité informatique.
            </h1>
            <p className="lead">
              Étudiant en Licence 3 MIAGE, je développe des applications Java, Java EE et des
              solutions sécurisées autour des systèmes d’information, des flux de donnée.
            </p>
            <div className="hero-actions">
              <a href="#projets" className="primary-button">
                Voir mes projets
              </a>
              <a href="#contact" className="secondary-button">
                Me contacter
              </a>
            </div>
            <ul className="hero-metrics">
              <li>
                <strong>3</strong>
                <span>ans d’études</span>
              </li>
              <li>
                <strong>6+</strong>
                <span>projets</span>
              </li>
              <li>
                <strong>100%</strong>
                <span>motivé</span>
              </li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="mini-panel">
              <span className="dot blue" />
              KPI de performance
            </div>
            <div className="chart-bars" aria-label="Graphique synthétique">
              <span style={{ height: '35%' }} />
              <span style={{ height: '55%' }} />
              <span style={{ height: '68%' }} />
              <span style={{ height: '82%' }} />
              <span style={{ height: '100%' }} />
            </div>
            <div className="card-footer">
              <div>
                <small>Performance globale</small>
                <strong>89%</strong>
              </div>
              <span className="tag">+12% MoM</span>
            </div>
          </div>
        </section>

        <section id="apropos" className="section about-grid">
          <div>
            <p className="section-kicker">À propos</p>
            <h2>Je conçois des solutions logicielles fiables, sécurisées et utiles.</h2>
          </div>
          <p>
            Étudiant en MIAGE, je m’intéresse particulièrement au développement logiciel,à la DATA
            et la sécurité informatique et aux systèmes d’information. J’aime concevoir des
            applications fonctionnelles, lisibles et performantes, tout en restant orienté
            qualité, fiabilité et utilisateur.
          </p>
        </section>

        <section id="competences" className="section">
          <div className="section-header">
            <p className="section-kicker">Compétences</p>
            <h2>Ce que je sais faire</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-card">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-header">
            <p className="section-kicker">Expérience</p>
            <h2>Mon parcours</h2>
          </div>

          <div className="timeline">
            {experiences.map((item) => (
              <article key={item.period} className="timeline-item">
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projets" className="section">
          <div className="section-header">
            <p className="section-kicker">Projets</p>
            <h2>Projets phares</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className={`project-card ${project.accent}`}>
                <span className="project-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={project.path}>Découvrir le projet →</Link>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-box">
          <p className="section-kicker">Contact</p>
          <h2>Discutons de votre prochain projet.</h2>
          <a href="mailto:diallo67200@gmail.com" className="primary-button">
            diallo67200@gmail.com
          </a>
          <p className="contact-meta">06 95 25 89 82 • Lyon (69008) / Strasbourg/Mulhouse </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
