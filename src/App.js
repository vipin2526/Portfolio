import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import About from './Components/About';
import Skill from './Components/Skill';
import './Local/Css/Common.css';
import Header from './Components/Header';
// import Certificate from './Components/Certificate'; 
// import './Background/main.css'
// import start from './Background/main'

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <LandingPage />
      <Skill />
      <About />
      <Projects />
      <Resume />
      {/* <Certificate /> */}

      {/* <div id="background" onClick={()=>start()}></div> */}
    </div>
  );
}

export default App;
