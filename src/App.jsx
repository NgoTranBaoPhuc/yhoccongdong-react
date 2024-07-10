import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomHeader from './assets/components/Header';
import HomePage from './assets/pages/HomePage';
import ProjectsPage from './assets/pages/ProjectsPage';
import LibraryPage from './assets/pages/LibraryPage';
import JoinPage from './assets/pages/JoinPage';

function App() {
  return (
    <Router>
      <CustomHeader />
      <Routes>
        <Route path="/y-hoc-cung-dong" element={<HomePage />} />
        <Route path="/du-an" element={<ProjectsPage />} />
        <Route path="/tu-sach" element={<LibraryPage />} />
        <Route path="/lien-he" element={<JoinPage />} />

      </Routes>
    </Router>
  );
}

export default App;