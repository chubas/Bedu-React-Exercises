import React, { Fragment, useState } from "react"
import { BrowserRouter as Router, Route, useParams, Link } from "react-router-dom"
const Home = (props) => (
    <Fragment>
        <h2>Home</h2>
        <p>Hello world!</p>
    </Fragment>
)
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
            <h1>{ courses[course].name }</h1>
            <p>{ courses[course].description }</p>
            <p>Horas: { courses[course].hours }</p>
            <p>Imparte: { courses[course].teacher }</p>
        </Fragment>
    )
}
const About = () => {
    return (
        <Router>
            <Fragment>
                <h1>Nuestros cursos</h1>
                <ul>
                    {Object.keys(courses).map((key) => {
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

const Contact = () => {
    const { name } = useParams()
    return (
        <Fragment>
            <h1>Contacto</h1>
            <p>Para sugerencias enviar correo a {name}@bedu.org</p>
        </Fragment>
    )
}

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
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact/">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="main">
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about/">
                        <About />
                    </Route>
                    <Route path="/contact/:name">
                        <Contact />
                    </Route>
                </div>
            </Fragment>
        </Router>
    )
};

export default App;
export { Home, Contact, About, Course }