
import Navbar from './projects/Navbar';
import {BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import Home from './projects/routing/Home';
import About from './projects/routing/About';
import Contect from './projects/routing/Contect';
import './App.css';



function App() {
  return (
   
    <div>
      
      <Router>
      <Navbar/>
      <br/>
      <Routes>
        <div>
        <Route path='/' element={<Home/>}/>
        <Route path='/About'element ={<About/>}/>
        <Route path='/Contect'element ={<Contect/>}/>
        </div>
      </Routes>
      </Router>
      

        </div>
  );
}

export default App;
