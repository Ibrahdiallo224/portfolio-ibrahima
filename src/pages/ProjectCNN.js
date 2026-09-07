import { Link } from 'react-router-dom';

function ProjectCNN() {
  return (
    <div className="project-page">
      <div className="project-shell">
        <Link to="/" className="back-link">← Retour à l’accueil</Link>
        <p className="section-kicker">Projet IA</p>
        <h1>Détection de pathologies pulmonaires par IA</h1>
        <p className="project-intro">
          Objectif : classifier des radiographies pulmonaires afin d’aider à la détection de pathologies
          comme le COVID-19 à partir d’images médicales.
        </p>

        <div className="project-content">
          <div className="project-panel">
            <h2>Approche</h2>
            <p>
              J’ai utilisé Python et TensorFlow pour traiter un jeu de données d’images médicales, puis
              construire et évaluer des modèles de classification basés sur des architectures CNN et ResNet-50.
            </p>
          </div>

          <div className="project-panel">
            <h2>Résultat</h2>
            <p>
              Le projet a permis d’explorer le transfer learning, la préparation des données, les métriques
              d’évaluation et l’interprétation des performances sur des tâches sensibles.
            </p>
          </div>
        </div>

        <ul className="key-points">
          <li>Python / TensorFlow</li>
          <li>Architecture CNN / ResNet-50</li>
          <li>Classification d’images médicales</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCNN;
