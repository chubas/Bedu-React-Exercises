import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, useParams, Switch } from "react-router-dom"
// Normalmente, importaríamos `Link` de "react-router-dom". Para este ejercicio se usará una versión
// modificada para poder usarse con los Tabs
import Link from '../util/Link'

import './RoutedApp.scss'

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <p>Hola mundo!</p>
  </Fragment>
)

// Usualmente estos datos vienen de un API, por ahora los importaremos de un JSON file
const courses = require('./courses.json')

const Course = () => {
  const { course } = useParams()
  return (
    <div className="course">
      <h2>{ courses[course].name }</h2>
      <p>{ courses[course].description }</p>
      <p><span>Horas:</span>{ courses[course].hours }</p>
      <p><span>Imparte:</span>{ courses[course].teacher }</p>
    </div>
  )
}
const About = () => {
  // Para cada uno de nuestros cursos, creamos un elemento en la lista con un link al detalle
  // del curso. Observa cómo pasamos el parámetro `:course` en la ruta, que se activa en nuestro
  // router anidado
  return (
    <Router>
      <Fragment>
        <h1>Nuestros cursos</h1>
        <ul>
          { Object.keys(courses).map((key) => {
            return (
              <li key={ key }>
                <Link to={`/about/${key}`}>
                  { courses[key].name }
                </Link>
              </li>
            )
          })}
        </ul>
      </Fragment>
      <Route path="/about/:course">
        <Course />
      </Route>
    </Router>
  )
}

// Este componente recibe un parámetro `name` que obtenemos de la ruta
const Contact = () => {
  const { name } = useParams()
  return (
    <Fragment>
      <h1>Contacto</h1>
      <p>Para sugerencias enviar correo a {name}@bedu.org</p>
    </Fragment>
  )
}
const RoutedApp = () => {

  // Observa el uso de la propiedad `exact` para el homepage. De no ponerlo, cualquier ruta haría
  // match con la ruta principal y todas nuestras URLs irían al componente Home
  // También observa el uso del componente `Switch` para prevenir que otro contenido que sea de tipo
  // `Route` se imprima en el DOM
  return (
    <Router>
      <Fragment>
        <div className="nav">
          <ul>
            <li>
              <Link to='/'>
               Home
              </Link>
            </li>
            <li>
             <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact/info'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="main">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about/">
              <About />
            </Route>
            <Route path="/contact/:name">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  )
};
export default RoutedApp