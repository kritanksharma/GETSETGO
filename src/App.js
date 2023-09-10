import './App.css';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoreInfo from './components/MoreInfo';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
    <Router>
    <NavBar title='GET SET GO Studio'></NavBar>
    <Routes>
    <Route exact path="/" element={<MainSection/>} />
    <Route exact path="/services" element={<MoreInfo/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/contact" element={<Contact/>} />
    
    </Routes>
    <Footer></Footer>
    </Router>
   
   
   
    </div>
  );
}

export default App;