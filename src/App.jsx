import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import HomePage from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contacts from './pages/Contacts.jsx';
import Project from './pages/Project.jsx';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
