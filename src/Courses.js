import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, useParams, Link } from "react-router-dom"

const courses = {
  frontend: {
    name: "Curso de frontend",
    description: "Aprenderemos React y JSX para hacer aplicaciones dinámicas",
    hours: "Martes y Jueves 7 - 10",
    teacher: "Rubén"
  },
  backend: {
    name: "Backend en nodejs",
    description: "Veremos Express y GraphQL",
    hours: "Lunes y Miércoles 7 - 10",
    teacher: "Bryan"
  },
  python: {
    name: "Python y computer vision",
    description: "Usaremos python y opencv",
    hours: "Sábados 9 - 3",
    teacher: "Luis"
  }
}

const Course = () => {
  const { course } = useParams()
  return (
    <Fragment>
      <h1>{courses[course].name}</h1>
      <p>{courses[course].description}</p>
      <p>Horas: {courses[course].hours}</p>
      <p>Imparte: {courses[course].teacher}</p>
    </Fragment>
  )
}

const Courses = () => {
  return (
    <Router>
      <Fragment>
        <h1>Nuestros cursos</h1>
        <ul>
          {Object.keys(courses).map((key) => {
            return (
              <li key={key}>
                <Link to={`/courses/${key}`}>
                  {courses[key].name}
                </Link>
              </li>
            )
          })}
        </ul>
      </Fragment>
      <Route path="/courses/:course">
        <Course />
      </Route>
    </Router>
  )
}

export default Courses