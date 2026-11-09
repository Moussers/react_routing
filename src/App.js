import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={< NavMenu />} >
                  <Route index                  element={<Home />}      />
                  <Route index path="about"     element={<About />}     />
                  <Route index path="articles"  element={<Articles />}  />
              </Route>
          </Routes>
    </div>
  );
}

export default App;
