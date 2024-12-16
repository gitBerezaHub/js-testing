const square = require('./square')

describe('square', () => {
    let mockValue
    // перед каждым тестом
    beforeEach(() => {

    })
    // перед всеми тестами (1 раз)
    beforeAll(() => {

    })

    test('Корректное значение', () => {
        // expect(square(4)).toBe(16)
        // expect(square(4)).toBeGreaterThan(15)
        // expect(square(4)).toBeLessThan(17)
        // expect(square(4)).not.toBeUndefined()
        const spyOnMath = jest.spyOn(Math, 'pow')
        expect(square(1))
        expect(spyOnMath).toBeCalledTimes(0)
    })

    // после каждого теста
    afterEach(() => {
        jest.clearAllMocks()
    })
    // после всех тестов (1 раз)
    afterAll(() => {

    })
})
