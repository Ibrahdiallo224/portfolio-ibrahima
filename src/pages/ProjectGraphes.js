import { Link } from 'react-router-dom';

function ProjectGraphes() {
  return (
    <div className="project-page">
      <div className="project-shell">
        <Link to="/" className="back-link">← Retour à l’accueil</Link>
        <p className="section-kicker">Projet Graphes</p>
        <h1>Gestion d’un réseau aéroportuaire</h1>
        <p className="project-intro">
          Objectif : modéliser un réseau aéroportuaire complet et optimiser les trajets à travers les
          algorithmes de la théorie des graphes.
        </p>

        <div className="project-content">
          <div className="project-panel">
            <h2>Modélisation</h2>
            <p>
              J’ai construit un système de graphes représentant des liaisons, des nœuds et des parcours complexes,
              puis j’ai appliqué des algorithmes de parcours et d’optimisation pour analyser les connexions.
            </p>
          </div>

          <div className="project-panel">
            <h2>Algorithmes utilisés</h2>
            <p>
              Dijkstra, Kruskal, Prüfer, BFS et DFS ont permis d’optimiser le parcours, d’évaluer les liaisons
              et d’extraire les structures de réseau de manière lisible et exploitable.
            </p>
          </div>
        </div>

        <ul className="key-points">
          <li>Théorie des graphes</li>
          <li>Java / structures de données</li>
          <li>Optimisation de parcours et modélisation</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectGraphes;
