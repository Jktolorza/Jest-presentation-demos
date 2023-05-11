import '../unit-tests/utils/custom-matchers'
describe('Custom matcher', () => {

    it('toBeNine matcher', () => {
        const number = 9
        expect(number).toBeNine()
    })

})