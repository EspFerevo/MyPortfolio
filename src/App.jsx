import './styles/main.css';
import NavBar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import HomePage from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contacts from './pages/Contacts.jsx';
import Project from './pages/Project.jsx';
import GitBtn from './components/btnGithub/GitBtn.jsx';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <HomePage />
        {/* <Projects /> */}
        {/* <Project /> */}
        {/* <Contacts /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
