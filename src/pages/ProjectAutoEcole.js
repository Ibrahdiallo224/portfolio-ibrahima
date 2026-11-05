import { Link } from 'react-router-dom';

function ProjectAutoEcole() {
  return (
    <div className="project-page">
      <div className="project-shell">
        <Link to="/" className="back-link">← Retour à l’accueil</Link>
        <p className="section-kicker">Projet Bases de données et gestion de projet · L2 Informatique · équipe de 4</p>
        <h1>Gestion d’une auto-école en ligne</h1>
        <p className="project-intro">
          Une base de données Microsoft Access qui gère toute l’activité d’une auto-école : les élèves et leurs
          responsables légaux, les moniteurs et leurs spécialités, les formations et les permis, les cours de code
          et les leçons de conduite, les inscriptions, les paiements et les examens.
        </p>

        <div className="project-content">
          <div className="project-panel">
            <h2>L’objectif</h2>
            <p>
              Répondre au besoin d’un client, de l’expression du besoin jusqu’à l’application livrée : cahier des
              charges, modèle conceptuel, modèle logique, tables, requêtes et formulaires. Le projet s’est déroulé
              d’avril à juin 2025 et s’est terminé par une soutenance.
            </p>
          </div>

          <div className="project-panel">
            <h2>Mon rôle</h2>
            <p>
              J’ai réalisé la modélisation des données avec la méthode Merise : le modèle conceptuel (MCD), puis
              le modèle logique (MLD). J’ai conçu toute l’architecture des tables (24 tables reliées par 29
              relations) et écrit une partie des requêtes.
            </p>
          </div>

          <div className="project-panel">
            <h2>Le travail en équipe</h2>
            <p>
              Une équipe de 4 avec un chef de projet, face à un enseignant dans le rôle du client. Nous avons
              rédigé le cahier des charges, planifié le travail avec un diagramme de Gantt, maquetté les
              formulaires et préparé un plan de tests. Le client précisait ses besoins au fil du projet : il a
              fallu faire évoluer le modèle en conséquence.
            </p>
          </div>
        </div>

        <ul className="key-points">
          <li>Merise : MCD, MLD, tables d’association</li>
          <li>Microsoft Access : 24 tables, 29 relations</li>
          <li>Requêtes SQL : paramètres, regroupements, calcul des heures et des restes à payer</li>
          <li>24 formulaires avec menu, sous-formulaires et recherche d’élèves</li>
          <li>Gestion de projet : cahier des charges, Gantt, maquettage, plan de tests</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectAutoEcole;
