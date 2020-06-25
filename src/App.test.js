import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from './App'

configure({ adapter: new Adapter() })

describe('<Home />', () => {
    test('render', () => {
        const wrapper = shallow(<Home/>)
        expect(wrapper.find('h2').text()).toBe('Home')
        expect(wrapper.text()).toContain('Hello world!')
    })

    test('Contact', () => {
        const wrapper = shallow(<Contact name="noe"></Contact>)
        expect(wrapper.text().toContain("noe@bedu"))
    })
})

