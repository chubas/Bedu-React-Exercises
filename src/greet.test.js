import greet from './greet'

test('should greet single parameter', () => {
    expect(greet('mundo')).toBe('Hola mundo!')
    expect(greet('mundo!')).toBe('Hola mundo!!')
    expect(greet('')).toBe('Hola !')
})

test('should greet multiple people!', () => {
    expect(greet([])).toBe('Hola !')
    expect(greet(['tierra'])).toBe('Hola tierra!')
    expect(greet(['tierra', 'luna'])).toBe('Hola tierra y luna!')
    expect(greet(['tierra', 'luna', 'sol'])).toBe('Hola tierra, luna y sol!')
})