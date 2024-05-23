//import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul> 
              <li><Link to="/">Home</Link></li>
            </ul>
            <ul>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
            <ul> 
              <li><Link to="/about">About</Link></li>
            </ul>
            <ul> 
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          < Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
