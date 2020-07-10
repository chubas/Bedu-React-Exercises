import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { greet, greet2, Greetings, SingleGreeting } from './greet'

configure({ adapter: new Adapter() })

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

