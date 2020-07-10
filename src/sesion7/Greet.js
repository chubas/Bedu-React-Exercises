import React, { Fragment } from 'react'

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

const greet2 = (param) => {
  if (typeof(param) === 'string') {
    return `Hola ${param}!`
  } else {
    if (param.length > 1) {
      return `Hola ${param.slice(0, -1).join(', ')} y ${param[param.length - 1]}!`
    } else {
      return `Hola ${param.join(', ')}!`
    }
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