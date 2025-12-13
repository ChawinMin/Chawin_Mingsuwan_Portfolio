import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { AllWork } from './Components/AllWork';
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
