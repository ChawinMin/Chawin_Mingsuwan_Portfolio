import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { AllWork } from './Components/AllWork';
import { Gateway } from './Components/Projects/Gateway';
import { LANL } from './Components/Projects/LANL';
import { APL } from './Components/Projects/APL';
import { TDE } from './Components/Projects/TDE';
import { VRStudyHub } from './Components/Projects/VRStudyHub';
import { Ilender } from './Components/Projects/Ilender';
import { UFO } from './Components/Projects/UFO';
import { Cull } from './Components/Projects/Cull';
import { LSPACE } from './Components/Projects/LSPACE';
import { Minecraft } from './Components/Projects/Minecraft';
import { WildFire } from './Components/Projects/WildFire';
import UpScroll from './Components/UpScroll';
import { Footer } from './Components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToHash from './Components/ScrollToHash';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  return (
    <div className = "App">
      <NavBar />
      <ScrollToHash />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/AllWork" element={<AllWork />} />
          <Route path="/Gateway" element={<Gateway />} />
          <Route path="/APL" element={<APL />} />
          <Route path="/LANL" element={<LANL />} />
          <Route path="/TDE" element={<TDE />} />
          <Route path="/VRStudyHub" element={<VRStudyHub />} />
          <Route path="/Ilender" element={<Ilender />} />
          <Route path="/Cull" element={<Cull />} />
          <Route path="/UFO" element={<UFO />} />
          <Route path="/LSPACE" element={<LSPACE />} />
          <Route path="/Minecraft" element={<Minecraft />} />
          <Route path="/WildFire" element={<WildFire />} />
        </Routes>
      </AnimatePresence>

      <UpScroll showAfter={50} />

      <Footer />
    </div>
  );
}

export default App;
