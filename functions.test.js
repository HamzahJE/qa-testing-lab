const { returnTwo, greeting , add } = require('./functions')


describe('tests for returnTwo function', () => {
test('Test if returnTwo returns the number 2', () => {
    let returningTwo= returnTwo()
    expect(returningTwo).toBe(2)
})
})

describe('tests for greeting function', () => {
    test('Test if greeting returns the name with a Hello greeting', () => {
        let greetingFunc= greeting('James')
        expect(greetingFunc).toBe('Hello, James.')
    })
    test('Test if greeting returns the name with a Hello greeting', () => {
        let greetingFunc= greeting('Jill')
        expect(greetingFunc).toBe('Hello, Jill.')
    })
    })

describe('tests for add function', () => {
        test('Test to see if add function adds correctly (= to 3)', () => {
            let addition = add(1, 2)
            expect(addition).toBe(3)
        })
        test('Test to see if add function adds correctly (= to 14)', () => {
            let addition = add(5, 9)
            expect(addition).toBe(14)
        })
        })