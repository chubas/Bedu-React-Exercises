import React, { Fragment } from 'react'

/*
 * Esta es la función principal que tiene la lógica de nuestro componente.
 * El requerimiento de esta función debe estar bien definido de antemano, y debe de poder ser
 * comprobable. En TDD, primero escribiremos la prueba que valida que la función cumpla con ese
 * requerimiento
 */
const greet = (param) => {
  if (typeof(param) === 'string') {
    return `Hola ${param}!`
  } else {
    if (param.length > 1) {
      let result = 'Hola '
      for(let i = 0; i < param.length - 2; i++) {
        result = result + param[i] + ', '
      }
      result = result + param[param.length - 2 ] + ' y ' + param[param.length - 1] + '!'
      return result
    } else {
      return `Hola ${param.join(', ')}!`
    }
    
  }
}

/*
 * Esta es una diferente implementación de la misma función (que usa `slice` en vez de iterar por
 * los elementos). Para probar que cambiar la función no cambia el resultado, debemos de verificar
 * que las pruebas siguen pasando. Esto es lo que se conoce como el ciclo: rojo - verde - refactor.
 */
const greet2 = (param) => {
  if (typeof param === 'string') {
    return `Hola ${param}!`
  } else if (param.length > 1) {
    return `Hola ${param.slice(0, -1).join(', ')} y ${param[param.length - 1]}!`
  } else {
    return `Hola ${param.join(', ')}!`
  }
}

const SingleGreeting = (props) => {
  return (
    <div className="greeting">
      { greet(props.to) }
    </div>
  )
}

const Greetings = () => {
  return (
    <Fragment>
    
    <h1>Saludos...</h1>
    <ul>
      <li><SingleGreeting to="mundo" /></li>
      <li><SingleGreeting to={['Tierra', 'Luna']}/></li>
      <li><SingleGreeting to={['Tierra', 'Luna', 'Sol']}/></li>
    </ul>
    </Fragment>
    )
  }
  
  export default Greetings
  export { greet, greet2, SingleGreeting, Greetings }