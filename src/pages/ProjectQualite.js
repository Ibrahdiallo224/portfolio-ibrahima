import { Link } from 'react-router-dom';

function ProjectQualite() {
  return (
    <div className="project-page">
      <div className="project-shell">
        <Link to="/" className="back-link">← Retour à l’accueil</Link>
        <p className="section-kicker">Projet Qualité de programmation · L3 MIAGE · équipe de 4</p>
        <h1>Application de questionnaires en C++</h1>
        <p className="project-intro">
          Une application en console pour apprendre et s’évaluer sur des questionnaires chargés depuis des
          fichiers JSON : questions texte, numériques ou à choix multiples, plusieurs modes d’apprentissage et
          d’évaluation, et un certificat de résultat en texte ou en HTML.
        </p>

        <div className="project-content">
          <div className="project-panel">
            <h2>L’objectif</h2>
            <p>
              Appliquer les principes de qualité logicielle sur un vrai projet d’équipe : programmation orientée
              objet (classes abstraites, héritage, polymorphisme), une responsabilité par classe, code documenté,
              tests unitaires et travail en parallèle avec Git.
            </p>
          </div>

          <div className="project-panel">
            <h2>Mon rôle</h2>
            <p>
              J’ai écrit la classe abstraite Question et la classe Questionnaire, avec leurs tests unitaires
              (doctest) : constructeur par défaut, modification du nom et de la description, réinitialisation.
              J’ai aussi développé le mode « Évaluation test » (score, enregistrement des erreurs, sortie en cours
              de route) et le menu principal qui relie toute l’application.
            </p>
          </div>

          <div className="project-panel">
            <h2>Le travail en équipe</h2>
            <p>
              D’octobre à décembre 2025, chaque fonctionnalité a été développée sur sa propre branche Git
              (16 branches), puis fusionnée dans la branche principale, avec résolution des conflits et correction
              des erreurs de compilation.
            </p>
          </div>
        </div>

        <ul className="key-points">
          <li>C++14, programmation orientée objet</li>
          <li>Tests unitaires avec doctest</li>
          <li>Lecture et écriture JSON (nlohmann/json)</li>
          <li>Git et GitHub en équipe (branches, fusions, conflits), CMake</li>
        </ul>

        <a
          className="primary-button project-link"
          href="https://github.com/aka06wo/Qualite_de_programmation_Questionnaires"
          target="_blank"
          rel="noreferrer"
        >
          Voir le code sur GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectQualite;
