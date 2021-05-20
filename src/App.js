import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import About from './Components/About/About';
import Contact from './Components/Contacts/Contacts';
import Home from './Components/Home/Home';
import Project from './Components/Projects/Projects';
import Details from './Components/Projects/Details';
import Admin from './Components/Admin/Admin';
import { RiHome4Fill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoIosFolder } from "react-icons/io";
import './App.css';


export default function App(){
  const [showHome, setShowHome] = useState(false);
  const [inspiration, setInspiration] = useState([]);
  const [enter, setEnter] = useState(false);
  const [footer, setFooter] = useState(false);
  const [page, setPage] = useState(false);
  const [projectData, setProjectData] = useState([]);

  const hideHome = () => {
    setShowHome(false);
    getInspiration()
  };

  const revealHome = () => {
    setShowHome(true);
    getInspiration()
  };

  const handleEnter = () => {
    setEnter(true);
  };

  const handleFooter = () => {
    setFooter(true);
  };

  const loadPage = () => {
    setPage(true);
  }

  const style = { height: "30px", width: "30px" }


  const getInspiration = async () => {
    try {
        const res = await fetch('https://type.fit/api/quotes');
        const data = await res.json();
        setInspiration(data[Math.floor(Math.random() * 99)]);
    } catch (error) {
        console.log(error)
    }
  }


  const getProjects = async () => {
    try {
        const res = await fetch('https://sean-portfolio-backend.herokuapp.com/projects');
        const data = await res.json();
        setProjectData(data.reverse());
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    getInspiration();
    getProjects();
  }, []);

  console.log([...projectData])
  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <div className="nav-header">
            <div className={enter? "logo-page-enter" : "logo-page"}>
              <>{enter? null : <h1 className="front-header">Sean King's Portfolio WebPage</h1>}</>
              <img className={enter? "logo-enter" : "logo"} src="https://i.imgur.com/sflbz7o.png" alt="" />
              <>{enter? null : <button className="enter" onClick={() => {
                handleEnter();
                setTimeout(handleFooter, 1200);
                setTimeout(loadPage, 1200);
              }}>Enter</button>}</>
            </div>
            <h1>Sean King's Portfolio</h1>
          </div>
          <div id="quotes">
            <h3>"{inspiration.text}"</h3>
            <h3>-{inspiration.author}</h3>
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
            <div>
              <Link className="admin" onClick={revealHome} to='/admin'><IoMdContact style={style}/>Admin</Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Switch>
          <Route path='/' exact component={footer? Home : null} />
          <Route path='/about' component={page? About : null} />
          <Route path='/projects' component={page? Project : null} />
          <Route path='/contacts' component={page? Contact : null} />
          <Route path='/admin' component={page? Admin : null} />
          <Route path="/project/:_id" render={routerProps => {
            console.log(routerProps);
            const thisProject = [...projectData].filter(
              (a) => a._id === routerProps.match.params._id
            );
            console.log(thisProject)
              return <Details {...routerProps} thisProject={thisProject[0]} getInspiration={getInspiration} getProjects={getProjects} />
          }} />
        </Switch>
      </main>
      <>{footer? <footer>By: Sean King</footer>: null}</>
    </div>
  )
}
