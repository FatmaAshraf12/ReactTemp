import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contacts from './components/contacts/contacts';



function App() {
  return (

      <BrowserRouter>
                <Navbar />
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/Contacts' component={Contacts} />
        </BrowserRouter>
  );
}

export default App;
