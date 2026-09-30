import { Link } from 'react-router-dom';

function ProjectSNCF() {
  return (
    <div className="project-page">
      <div className="project-shell">
        <Link to="/" className="back-link">← Retour à l’accueil</Link>
        <p className="section-kicker">Projet SNCF</p>
        <h1>CIGAL / SIRH – gouvernance technique et sécurité</h1>
        <p className="project-intro">
          Objectif : travailler sur plusieurs applications SNCF, notamment CIGAL et SIRH, en assurant la
          qualité des flux de données, la sécurité des accès et la coordination avec les équipes techniques.
        </p>

        <div className="project-content">
          <div className="project-panel">
            <h2>Contexte</h2>
            <p>
              Pendant le stage, j’ai été intégré à l’équipe de gouvernance technique et j’ai suivi plusieurs
              applications internes SNCF. CIGAL était l’une des applications sur lesquelles j’ai travaillé,
              avec un besoin fort sur les flux de données et la qualité des livraisons.
            </p>
          </div>

          <div className="project-panel">
            <h2>Solution</h2>
            <p>
              J’ai participé à la gestion des flux de données, à la sécurisation des accès SIRH, au déploiement
              des mécanismes SSO OpenAM, à la MFA par OTP, au JWT et à l’écriture de scripts SQL Oracle pour
              sécuriser les traitements et les droits d’accès.
            </p>
          </div>
        </div>

        <ul className="key-points">
          <li>Flux de données et gouvernance technique</li>
          <li>CIGAL et SIRH SNCF</li>
          <li>SSO OpenAM / OAuth2 / JWT / MFA OTP</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectSNCF;
