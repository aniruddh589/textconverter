import './App.css';
import {  BrowserRouter as Router,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import TextConverter from './pages/TextConverter';

function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Routes>
            <Route path="/" element={<TextConverter />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/text-converter" element={<Home />}></Route>
        </Routes> 
      </Router> 
    </>
  );
}

export default App;
