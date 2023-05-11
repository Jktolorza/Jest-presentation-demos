import { sum } from '../../src/functions/calculator';
// Describimos nuestro sujeto de prueba
describe("sum function", () => {

    // Podemos prepara cosas fueras de las pruebas
    let a: number;
    let b: number;

    // Podemos setear ciertas configuraciones antes de cada o en este caso
    // Todas las pruebas
    beforeAll(() => {
        a = 2;
        b = 3;
    });

    it(`Given two positive numbers 
        When sum function is executed
        Then should return the sum of the two positive numbers
        And the result shold be positive`, () => {
        // Arrenge
        // Act
        const result = sum(a, b)
        // Assert
        expect(result).toBe(5);
        expect(result).toBeGreaterThan(0)
    });

    it.skip(`Given two positive numbers 
    When sum function is executed
    Then should return the sum of the two positive numbers
    And the result shold be positive`, () => {
    // Arrenge
    a = 20
    b = 1000
    // Act
    const result = sum(a, b)
    // Assert
    expect(result).toBe(1020);
    expect(result).toBeGreaterThan(0)
});

    it(`Given a positive number and 0
        When sum function is executed
        Then should return the positive number as result`, () => {
        // Arrenge
        // Act
        const result = sum(a, 0)
        // Assert
        expect(result).toBe(a);
    });

    it(`Given two negative numbers 
        When sum function is executed
        Then should return the sum of the two negative numbers
        And the result shold be negative`, () => {
        // Arrenge
        // Act
        const result = sum(-a, -b)
        // Assert
        expect(result).toBe(-5);
        expect(result).toBeLessThan(0)
    });

    it(`Given a negative number and 0
        When sum function is executed
        Then should return the negative number as result`, () => {
        // Arrenge
        // Act
        const result = sum(-a, 0)
        // Assert
        expect(result).toBe(-a);
    });

    it(`Given two floating point numbers
        When sum function is executed
        Then should return the sum of two floating point numbers`, () => {
        // Arrenge
        a = 0.1
        b = 0.2
        // Act
        const result = sum(a, b)
        // Assert
        expect(result).toBeCloseTo(0.3);
    });
});