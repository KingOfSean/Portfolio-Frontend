import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import About from './Components/About/About';
import Contact from './Components/Contacts/Contacts';
import Home from './Components/Home/Home';
import Project from './Components/Projects/Projects';
import { RiHome4Fill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoIosFolder } from "react-icons/io";
// import { IconContext } from "react-icons";
import './App.css';


export default function App(){
  const [showHome, setShowHome] = useState(false);
  const [inspiration, setInspiration] = useState([]);

  const hideHome = () => {
    setShowHome(false);
  };

  const revealHome = () => {
    setShowHome(true);
  };

  const style = { height: "30px", width: "30px" }


  const getInspiration = async () => {
    try {
        const res = await fetch('https://type.fit/api/quotes');
        const data = await res.json();
        setInspiration(data);
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    getInspiration();
}, []);

  
  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <div className="nav-header">
            <h1>Sean King's Portfolio</h1>
          </div>
          <div id="quotes">
            {inspiration.map((quote, i) => {
              
            })}
          </div>
          <div className="nav-links">
            <div>
              <>{showHome? <Link className="home" onClick={hideHome} to='/'><RiHome4Fill style={style}/>Home</Link>: null}</>
            </div>
            <div>
              <Link className="about" onClick={revealHome} to='/about'><IoMdPerson style={style}/>About</Link>
            </div>
            <div>
              <Link className="projects" onClick={revealHome} to='/projects'><IoIosFolder style={style}/>Projects</Link>
            </div>
            <div>
              <Link className="contacts" onClick={revealHome} to='/contacts'><IoMdContact style={style}/>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Project} />
          <Route path='/contacts' component={Contact} />
        </Switch>
      </main>
      <footer>By: Sean King</footer>
    </div>
  )
}
