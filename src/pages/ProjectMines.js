import { Link } from 'react-router-dom';

const etapes = [
  {
    titre: '1. Le poids des mines dans l’économie',
    texte:
      'Part des mines dans les exportations, le PIB et la rente minière, comparée au Mali, à la Sierra Leone, au Sénégal et à la Côte d’Ivoire. Données de la Banque mondiale, du ministère des Mines et de l’INS.',
  },
  {
    titre: '2. Qui exploite les mines, et combien l’État touche',
    texte:
      'Production et exportations de bauxite et d’or par entreprise, parts de marché, taxe minière payée par tonne exportée (annuaires du ministère des Mines).',
  },
  {
    titre: '3. À qui la Guinée vend ses minerais',
    texte:
      'Clients de la bauxite et de l’or reconstitués à partir des déclarations des pays acheteurs (données « miroir » UN Comtrade), car la Guinée publie peu de données détaillées.',
  },
  {
    titre: '4. Simandou, le plus grand gisement de fer inexploité au monde',
    texte:
      'Scénarios d’exportations et de recettes pour l’État de 2026 à 2030, selon trois niveaux de prix du fer. Les faits sourcés (Rio Tinto, code minier) sont séparés des hypothèses.',
  },
  {
    titre: '5. Prévisions à 2035 (machine learning)',
    texte:
      'Régression linéaire avec scikit-learn sur la production de bauxite et d’or, avec un intervalle de confiance à 95 %, et comparaison avec la production mondiale (USGS).',
  },
  {
    titre: '6. Simandou comparé aux autres grandes mines',
    texte:
      'Prévision par analogie avec la montée en charge réelle de Roy Hill (Australie) et de S11D (Brésil), et classement mondial des producteurs de fer.',
  },
  {
    titre: '7. Lire automatiquement les rapports ITIE (IA)',
    texte:
      'Extraction des tableaux de paiements des rapports PDF de 400 pages (pdfplumber), analyse de ce que chaque société verse à l’État, puis entraînement de mon propre modèle de classification de texte, en cours de comparaison avec Gemini (Google).',
  },
];

function ProjectMines() {
  return (
    <div className="project-page">
      <div className="project-shell">
        <Link to="/" className="back-link">← Retour à l’accueil</Link>
        <p className="section-kicker">Projet Data & IA</p>
        <h1>Guinée Mines Data</h1>
        <p className="project-intro">
          Que représentent les mines pour l’économie guinéenne, qui en profite, et que va changer Simandou ?
          Une analyse complète du secteur minier guinéen (bauxite, or, fer) de 2000 à 2025, à partir de
          données publiques, toujours comparée aux autres pays.
        </p>

        <div className="project-content">
          <div className="project-panel">
            <h2>Le contexte</h2>
            <p>
              La Guinée possède les plus grandes réserves de bauxite du monde et est devenue le premier
              producteur mondial en 2023. Les mines font l’essentiel de ses exportations, mais les données sont
              dispersées dans des rapports PDF, des bases internationales et des annuaires du ministère.
            </p>
          </div>

          <div className="project-panel">
            <h2>Ma démarche</h2>
            <p>
              Rassembler et vérifier les données de nombreuses sources (Banque mondiale, USGS, UN Comtrade, ITIE, ministère des Mines, Rio Tinto…), les analyser en SQL, prévoir avec du machine
              learning, puis construire une IA qui lit seule les rapports officiels. Chaque chiffre cite sa
              source et sa page, et chaque analyse se termine par ses limites.
            </p>
          </div>
        </div>

        <h2 className="project-subtitle">Les 7 étapes du projet</h2>
        <div className="project-content">
          {etapes.map((etape) => (
            <div key={etape.titre} className="project-panel">
              <h2>{etape.titre}</h2>
              <p>{etape.texte}</p>
            </div>
          ))}
        </div>

        <h2 className="project-subtitle">Les résultats clés</h2>
        <ul className="key-points">
          <li>Les mines font 94 % des exportations de la Guinée en 2024 : le pays le plus dépendant de la région.</li>
          <li>Exportations de bauxite multipliées par 2,8 : 66 Mt en 2019, 183 Mt en 2025.</li>
          <li>La Chine achète 93 % de la bauxite guinéenne, contre 2 % en 2015.</li>
          <li>La Guinée a fait 94 % de la hausse de la production mondiale de bauxite entre 2015 et 2025 ; sa part du monde passerait de 34 % à environ 44 % en 2035.</li>
          <li>L’État touche environ 9 % de la valeur exportée de la bauxite ; deux sociétés (SMB et CBG) versent 70 % des paiements miniers en 2023.</li>
          <li>Simandou démarre bien plus lentement que les mines comparables ; un plein régime prudent serait d’environ 100 Mt par an.</li>
          <li>Mon modèle d’IA reconnaît le thème de 93 % des pages d’un rapport ITIE qu’il n’a jamais vu, contre 42 % pour une réponse par défaut.</li>
        </ul>

        <div className="project-content">
          <div className="project-panel">
            <h2>La qualité des données</h2>
            <p>
              Une grande partie du travail a été de vérifier les sources. Exemples : une rente minière à 0 % en
              2019-2021 dans la base de la Banque mondiale (donnée manquante), un total faux de 9 Mt dans un
              annuaire officiel, des paiements déclarés à l’ITIE plus bas que la seule taxe minière publiée par
              le ministère.
            </p>
          </div>

          <div className="project-panel">
            <h2>L’IA que j’ai construite</h2>
            <p>
              Le sommaire de chaque rapport ITIE sert d’étiquettes d’entraînement : aucune page annotée à la main.
              Le modèle (TF-IDF + régression logistique) est entraîné sur le rapport 2022 et testé sur celui de
              2023. Il est explicable : on voit les mots qui guident chaque décision.
            </p>
          </div>
        </div>

        <h2 className="project-subtitle">Technologies</h2>
        <ul className="key-points">
          <li>Python, pandas, matplotlib</li>
          <li>SQL avec DuckDB : CTE, jointures, fonctions de fenêtre, pivots</li>
          <li>Machine learning : scikit-learn (régression, classification de texte)</li>
          <li>Extraction de PDF : pdfplumber, expressions régulières</li>
          <li>IA générative : API Gemini (comparaison en cours)</li>
          <li>API Banque mondiale et UN Comtrade, Git et GitHub</li>
        </ul>

        <a
          className="primary-button project-link"
          href="https://github.com/Ibrahdiallo224/guinee-mines-data"
          target="_blank"
          rel="noreferrer"
        >
          Voir le code sur GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectMines;
