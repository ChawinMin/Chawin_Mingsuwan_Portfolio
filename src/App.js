import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { AllWork } from './Components/AllWork';
import { Gateway } from './Components/Projects/Gateway';
import { LANL } from './Components/Projects/LANL';
import { APL } from './Components/Projects/APL';
import UpScroll from './Components/UpScroll';
import { Footer } from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import ScrollToHash from './Components/ScrollToHash';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className = "App">
      <NavBar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/AllWork" element={<AllWork />} />
        <Route path="/Gateway" element={<Gateway />} />
        <Route path="/APL" element={<APL />} />
        <Route path="/LANL" element={<LANL />} />
      </Routes>

      <UpScroll showAfter={50} />

      <Footer />
    </div>
  );
}

export default App;
