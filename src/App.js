import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, useParams } from "react-router-dom"
import Home from './Home'
import Courses from './Courses'

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/courses/">Courses</a>
            </li>
          </ul>
        </div>
        <div className="main">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/courses/">
            <Courses />
          </Route>
        </div>
      </Fragment>
    </Router>
  )
};

export default App;