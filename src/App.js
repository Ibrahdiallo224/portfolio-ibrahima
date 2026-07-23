import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectSNCF from './pages/ProjectSNCF';
import ProjectCNN from './pages/ProjectCNN';
import ProjectGraphes from './pages/ProjectGraphes';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/sncf" element={<ProjectSNCF />} />
        <Route path="/projet/cnn" element={<ProjectCNN />} />
        <Route path="/projet/graphes" element={<ProjectGraphes />} />
      </Routes>
    </Router>
  );
}

export default App;
