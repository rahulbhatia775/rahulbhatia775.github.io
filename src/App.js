import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ContactSection from './components/contact';
import ProjectsSection from './components/project';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/footer';
import Hero from './components/hero';
import SkillsSection from './components/skills';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ProjectsSection/>
    <SkillsSection />
    <ContactSection/>
    <Footer/>
    </>
  );
}

export default App;
