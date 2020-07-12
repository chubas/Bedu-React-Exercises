import React, { Fragment } from 'react'

// Podemos importar archivos css y scss si tenemos instalado `node-sass`
import './Students.scss'

/*
 * Este es un ejemplo de un componente de clase
 * Para definir un componente de esta manera, debemos de extender de la clase base
 * `React.Component`, y definir el método `render` (además de poder definir otros
 * métodos como el constructor, o los métodos del ciclo de vida de react)
 * Ver https://reactjs.org/docs/state-and-lifecycle.html para más información
 */
class Student extends React.Component {

  /*
   * Override del método render. Este método es el equivalente al valor de regreso
   * de un componente funcional.
   */
  render() {

    /*
     * Observa el uso de `this.props` en vez de pasar estas propiedades como parámetros.
     * Esto es porque al ser una clase podemos hacer referencia a esta y otras variables
     * como `state`.
     */
    return (
      <div className="student-card">
        <div className="name">
          { this.props.firstName } { this.props.lastName }
        </div>
        { this.props.children && (
          <div className="courses">
            { this.props.children }
          </div>
        )}
      </div>
    )
  }
}

class Students extends React.Component {

  render() {

    /*
     * Observa cómo se pasan propiedades al componente, de la misma manera que se definen
     * propiedades en cualquier etiqueta HTML.
     * También observa como nuestros componentes pueden tener más elementos HTML anidados, y
     * cómo se accede a ellos a través del uso de `props.children`
     */
    return (
      <Fragment>
        <Student firstName="Fulano" lastName="López"></Student>
        <Student firstName="Mengano" lastName="Pérez"></Student>
        <Student firstName="Zutano" lastName="Hernández">
          <div>
            <div>Cursos:</div>
            <ul>
              <li>Frontend con React</li>
              <li>Backend con Express</li>
              <li>Bases de datos con Mongo</li>
            </ul>
          </div>
        </Student>
      </Fragment>
    )
  }
}

export default Students