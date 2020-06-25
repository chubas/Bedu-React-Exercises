import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App = () => {
    return (
        <Router>
         <main>
           <nav>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
             </ul>
           </nav>
     
         <Route path="/" exact>
             <Home></Home>
         </Route>
         <Route path="/about"  component={About} />
         <Route path="/contact"  component={Contact} />
     
         </main>
     </Router>
       );
};

const Home = () => (
    <Fragment>
      <h1>Home</h1>
      Hola mundo
    </Fragment>
    );
  // About Page
  const About = () => (
    <Fragment>
      <h1>About</h1>
      Este es un curso de Bedu
    </Fragment>
    );
  // Contact Page
  const Contact = () => (
    <Fragment>
      <h1>Contact</h1>
      Email: react@bedu.org
    </Fragment>
    );
  
  const FakeText = () => (
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    )

export default App;
