import { Box, Caja, mapBox } from '../dummy';
describe('Dummy', () => {
    jest.mock('../dummy')

    const boxDummy: Box = {
        capacity: 0,
        shape: '',
        length: 0,
        width: 0,
        height: 0,
    }


    test('mapBox', () => {
        // Arrange
        const expectRes = {
            capacidad: 0,
            forma: '',
            largo: 0,
            ancho: 0,
            alto: 0,
        }
        // Act
        const result = mapBox(boxDummy)
        // Assert
        expect(result).toEqual(expectRes)
    });

})