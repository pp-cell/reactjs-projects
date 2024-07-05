import './App.css';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';


function App() {
  
  
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Switch>
    <Route path='/' exact Component={Home}/>
    <Route path='/about' exact Component={About}/>
    <Route path='/dashboard' exact Component={Dashboard}/>
   </Switch>
   </BrowserRouter>
    </>
  )

  

}

export default App;
