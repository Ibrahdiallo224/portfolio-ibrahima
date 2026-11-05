import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectSNCF from './pages/ProjectSNCF';
import ProjectCNN from './pages/ProjectCNN';
import ProjectGraphes from './pages/ProjectGraphes';
import ProjectMines from './pages/ProjectMines';
import ProjectQualite from './pages/ProjectQualite';
import ProjectAutoEcole from './pages/ProjectAutoEcole';
import './index.css';

// Quand on change de page, on remonte en haut (sinon on arrive au milieu de la nouvelle page)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/sncf" element={<ProjectSNCF />} />
        <Route path="/projet/cnn" element={<ProjectCNN />} />
        <Route path="/projet/graphes" element={<ProjectGraphes />} />
        <Route path="/projet/mines" element={<ProjectMines />} />
        <Route path="/projet/qualite" element={<ProjectQualite />} />
        <Route path="/projet/autoecole" element={<ProjectAutoEcole />} />
      </Routes>
    </Router>
  );
}

export default App;
