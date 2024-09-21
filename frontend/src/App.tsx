import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Tim from "./components/Tim/Tim";
import Services from "./components/Services/Services";
import Quote from "./components/Quote/Quote";
import Contacts from "./components/Contacts/Contacts";
import styles from "./App.module.css";
import HomeInstall from './components/Service_Pages/HomeInstall';
import SecurityInstall from './components/Service_Pages/SecurityInstall';
import WiringManagement from './components/Service_Pages/WiringManagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
   <ScrollToTop/>

      <NavBar />
      <div className={styles.mainBg}>
        
        <Routes>
          {/* Home route with all the sections */}
          <Route 
            path="/" 
            element={
              <>
                <div id="Home" className={styles.section} />
                <About />
                <div id="About" className={styles.section} />
                <Tim />
                <div id="Services" className={styles.section} />
                <Services />
                <div id="Quote" className={styles.section} />
                <Quote />
                <div id="Contacts" className={styles.section} />
                
              </>
            } 
          />
          
          <Route path="/security-camera-install" element={<SecurityInstall />} />
          <Route path="/wiring-management" element={<WiringManagement />} />
          <Route path="/smart-home-install" element={<HomeInstall />} />
        </Routes>
      </div>
      <Contacts />
    </Router>
  );
}

export default App;