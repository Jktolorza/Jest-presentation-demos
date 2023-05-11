// Mockeamos analytics desde el archivo mock
jest.mock('../mock');
// Esta linea de codigo es equivalente a:

// const analytics = {
//     default: {
//       sendEvent: jest.fn(),
//       sendButtonClickEvent: jest.fn().
//       sendInitEvent: jest.fn()
//     }
//   }

//   export default analytics;

// jest.fn() es una función útil que borrará el comportamiento actual de un método 
// y lo reemplazará con un objeto mock.
// Con esto, podemos invocar de forma segura analytics.sendEvent(), por ejemplo, con fines de prueba
// y no tenemos que preocuparnos por los efectos secundarios.

describe('Mock', () => {
    let analytics
    beforeAll(() => {
        analytics = require('../mock').default;
    })

    test('chek analytics module as a mock', () => {
        expect(analytics.sendEvent._isMockFunction).toEqual(true);   // ✅
        expect(analytics.sendButtonClickEvent._isMockFunction).toEqual(true);   // ✅
        expect(analytics.sendInitEvent._isMockFunction).toEqual(true);   // ✅
    });
    
    test('test analytics module', () => {
        analytics.sendEvent('button-click');
        analytics.sendEvent('init'); 
        
        expect(analytics.sendEvent).toHaveBeenCalledTimes(2);   // ✅
        expect(analytics.sendEvent).toHaveBeenCalledWith('button-click');   // ✅
        expect(analytics.sendEvent).toHaveBeenCalledWith('init');   // ✅
    });
})
