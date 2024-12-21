import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Careers from './pages/careers';
import Services from './pages/services';
import Contact from './pages/contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
