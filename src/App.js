import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Portfolio from './Component/Portfolio';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Resume from './Component/Resume';
import Experience from './Component/Experience';
import './css/Portfolio.css'
import Contact from './Component/Contact';
import Education from './Component/Education';


function App() {
  return (
    <div>
     {/* <Portfolio/> */}
     <section id='home'>
      <Home/>
      
     </section>

     <section id='experience'>
      <Experience/>
     </section>

     <section id='education'>
      <Education/>
     </section>

     <section id='skills'>
      <Skills/>
     </section>

     <section id='projects'>
      <Projects/>
     </section>

     <section id='resume'>
      <Resume/>
     </section>

     <section id='contact'>
      <Contact/>
     </section>

    </div>
  );
}

export default App;
