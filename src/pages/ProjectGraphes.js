import { Link } from 'react-router-dom';

// Extraits de mes méthodes (Algorithmes.java)
const extraitKruskal = `Collections.sort(aretes); // arêtes triées par poids croissant

for (Arete arete : aretes) {
    // on garde l'arête seulement si elle relie deux composantes différentes (pas de cycle)
    if (cfc[arete.src] != cfc[arete.dest]) {
        arbre.ajouterArc(arete.src, arete.dest, arete.poids);
        nbAretes++;
        fusionner(arete.src, arete.dest, prem, pilch, cfc);
    }
    if (nbAretes == nbSommets - 1) break; // l'arbre est complet
}`;

const extraitPrufer = `for (int etape = 0; etape < n - 2; etape++) {
    // la feuille (sommet de degré 1) au plus petit numéro
    int feuille = -1;
    for (int i = 1; i <= n; i++) { if (degre[i] == 1) { feuille = i; break; } }
    // son voisin encore présent dans l'arbre entre dans la séquence
    int voisin = -1;
    for (int j : g.getSuccesseurs(feuille)) { if (degre[j] != 0) { voisin = j; break; } }
    sequence[indice++] = voisin;
    degre[feuille] = 0; // la feuille est retirée
    degre[voisin]--;
}`;

function ProjectGraphes() {
  return (
    <div className="project-page">
      <div className="project-shell">
        <Link to="/" className="back-link">← Retour à l’accueil</Link>
        <p className="section-kicker">Projet Algorithmique des graphes · L3 MIAGE</p>
        <h1>Gestion d’un réseau aéroportuaire</h1>
        <p className="project-intro">
          Une application Java avec interface graphique qui modélise un réseau aérien : les aéroports sont les
          sommets, les vols sont les arcs, pondérés par la distance. On y applique les algorithmes de la théorie
          des graphes et on visualise le résultat directement sur le réseau.
        </p>

        <div className="project-content">
          <div className="project-panel">
            <h2>L’objectif</h2>
            <p>
              Programmer soi-même, sans bibliothèque d’algorithmes, le stockage d’un graphe en mémoire et les
              algorithmes du cours, puis les appliquer à un cas concret : un réseau de vols entre aéroports.
            </p>
          </div>

          <div className="project-panel">
            <h2>Ce que j’ai codé</h2>
            <p>
              L’algorithme de Kruskal (le réseau de liaisons le moins long qui relie tous les aéroports),
              l’algorithme de Dantzig (les plus courts chemins entre toutes les paires d’aéroports), ainsi que le
              codage et le décodage de Prüfer (écrire un arbre sous forme de suite de nombres, puis le
              reconstruire).
            </p>
          </div>

          <div className="project-panel">
            <h2>Le stockage du graphe</h2>
            <p>
              Le graphe est stocké de façon compacte avec deux tableaux : FS (la file des successeurs de chaque
              sommet) et APS (l’adresse du premier successeur). C’est la représentation utilisée par les
              algorithmes pour parcourir rapidement les voisins d’un aéroport.
            </p>
          </div>
        </div>

        <h2 className="project-subtitle">Extrait : l’algorithme de Kruskal</h2>
        <pre className="project-code">
          <code>{extraitKruskal}</code>
        </pre>

        <h2 className="project-subtitle">Extrait : le codage de Prüfer</h2>
        <pre className="project-code">
          <code>{extraitPrufer}</code>
        </pre>

        <ul className="key-points">
          <li>Java 17, Maven, programmation orientée objet</li>
          <li>Interface graphique Swing et GraphStream</li>
          <li>Structures de données : FS / APS, matrice d’adjacence</li>
          <li>Kruskal, Dantzig, codage et décodage de Prüfer</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectGraphes;
