import { Link } from 'react-router-dom';

// Les images sont dans public/images/autoecole/
const img = (nom) => `${process.env.PUBLIC_URL}/images/autoecole/${nom}`;

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
              le modèle logique (MLD). J’ai conçu toute l’architecture des tables (25 tables et 27
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

        <h2 className="project-subtitle">En images</h2>
        <div className="project-gallery">
          <figure className="project-figure wide">
            <img src={img('modele-tables.png')} alt="Modèle logique des données : les tables et leurs relations" />
            <figcaption>
              Le modèle logique (MLD), redessiné à partir de la base : en bleu-vert les entités, en brun les tables
              d’association issues des relations plusieurs-à-plusieurs du MCD. PK = clé primaire, FK = clé étrangère.
            </figcaption>
          </figure>
          <figure className="project-figure wide">
            <img src={img('requete-paiements.png')} alt="Requête SQL des paiements non finalisés" />
            <figcaption>
              Requête « Paiements non finalisés » : pour chaque élève, le prix de la formation moins le total déjà
              payé, grâce à des jointures entre élèves, inscriptions, formations et paiements.
            </figcaption>
          </figure>
          <figure className="project-figure">
            <img src={img('requete-planning.png')} alt="Requête SQL du planning d’un moniteur" />
            <figcaption>
              Requête paramétrée « planning moniteur » : Access demande une date et un moniteur, puis affiche
              ses cours.
            </figcaption>
          </figure>
          <figure className="project-figure">
            <img src={img('formulaire-inscriptions.png')} alt="Formulaire des inscriptions" />
            <figcaption>Formulaire des inscriptions, avec les formations choisies et leur prix.</figcaption>
          </figure>
          <figure className="project-figure wide">
            <img src={img('formulaire-eleves.png')} alt="Formulaire de gestion des élèves" />
            <figcaption>
              Formulaire des élèves : listes déroulantes pour le moniteur, sous-formulaire pour l’adresse, boutons
              de navigation, d’ajout, de recherche et de suppression (données de test).
            </figcaption>
          </figure>
        </div>

        <ul className="key-points">
          <li>Merise : MCD, MLD, tables d’association</li>
          <li>Microsoft Access : 25 tables, 27 relations</li>
          <li>Requêtes SQL : paramètres, regroupements, calcul des heures et des restes à payer</li>
          <li>24 formulaires avec menu, sous-formulaires et recherche d’élèves</li>
          <li>Gestion de projet : cahier des charges, Gantt, maquettage, plan de tests</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectAutoEcole;
