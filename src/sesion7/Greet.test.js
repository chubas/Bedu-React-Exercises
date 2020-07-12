/*
 * React-scripts define un comando dentro de la sección de `scripts` en nuestro archivo package.json
 * el cual automáticamente detecta y corre todos los archivos nombrados como `.test.js`
 * Para correr nuestras pruebas lo hacemos a través del comando `npm run test`
 */

import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { greet, greet2, Greetings, SingleGreeting } from './greet'

configure({ adapter: new Adapter() })

/*
 * Las pruebas de unidad deben de probar la funcionalidad como la definimos en los requerimientos.
 * Generalmente se hace una prueba por cada requerimiento, y de la funcionalidad también se hace
 * una prueba por cada condición.
 */
test('should greet single parameter', () => {
  expect(greet('mundo')).toBe('Hola mundo!')
  expect(greet('mundo!')).toBe('Hola mundo!!')
  expect(greet('')).toBe('Hola !')
})

test('should greet multiple parameters', () => {
  expect(greet([])).toBe('Hola !')
  expect(greet(['tierra'])).toBe('Hola tierra!')
  expect(greet(['tierra', 'luna'])).toBe('Hola tierra y luna!')
  expect(greet(['tierra', 'luna', 'sol'])).toBe('Hola tierra, luna y sol!')
})

/*
 * Esta prueba es sólo in ejemplo de cómo podemos asegurar que una función sigue regresando los
 * mismos resultados después de un refactor. En este caso, mantenemos la función original como
 * `greet` y la nueva función como `greet2`, y las comparamos para asegurarnos que los resultados
 * son iguales. En la práctica, esto se manifiesta con el hecho de que cambiar la implementación
 * sigue haciendo que las pruebas pasen (asumiendo que las pruebas están bien hechas y son
 * suficientes)
 */
test('greet2 should be same as greet', () => {
  const testParams = [
    'mundo',
    [],
    ['tierra'],
    ['tierra', 'luna'],
    ['tierra', 'luna', 'sol']
  ]
  for (const testParam of testParams) {
    expect(greet2(testParam)).toBe(greet(testParam))
  }
})

/*
 * Enzyme nos ayuda a probar componentes de React. En este caso, probamos tanto el componente
 * individual `SingleGreeting`, como el componente más complejo `Greetings` más abajo.
 * Este ejemplo muestra pruebas estáticas, por lo que usamos `shallow` para renderear sólo el 
 * markup (HTML), y las pruebas que hacemos sólo son para verificar que exista cierto componente o
 * texto. Se pueden hacer pruebas más complejas en donde también podemos probar propiedades,
 * cambios de estado, y funcionalidades dinámicas dentro del componente.
 */
describe('<SingleGreeting />', () => {
  test('render', () => {
    const greeting = shallow(<SingleGreeting to="mundo" />)
    expect(greeting.hasClass('greeting')).toBe(true)
    expect(greeting.text()).toBe('Hola mundo!')
  })
})

describe('<Greetings />', () => {
  test('render', () => {
    const wrapper = shallow(<Greetings/>)
    expect(wrapper.find('h1').text()).toBe('Saludos...')
    expect(wrapper.find(SingleGreeting)).toHaveLength(3)
  })
})

