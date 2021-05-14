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
import './App.css';


export default function App(){
  const [showHome, setShowHome] = useState(false);
  const [inspiration, setInspiration] = useState([]);
  const [enter, setEnter] = useState(false);
  const [footer, setFooter] = useState(false)

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

  // let slideIndex = 0;
  
  // const showQuoteSlides = (arr) => {
  //   for(i = 0; i < arr.length; i++) {
  //     arr[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > arr.length) {slideIndex = 1}
  //   arr[slideIndex-1].style.display = "block";
  //   setTimeout(showQuoteSlides, 2000);
  // }

  useEffect(() => {
    getInspiration();
  }, []);

  console.log(inspiration.text)
  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <div className="nav-header">
            <div className={enter? "logo-page-enter" : "logo-page"}>
              <>{enter? null : <h1 className="front-header">Sean King's Portfolio WebPage</h1>}</>
              <img className={enter? "logo-enter" : "logo"} src="https://i.imgur.com/sflbz7o.png" />
              <>{enter? null : <button className="enter" onClick={() => {
                handleEnter();
                setTimeout(handleFooter, 2000);
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
      <>{footer? <footer>By: Sean King</footer>: null}</>
    </div>
  )
}
