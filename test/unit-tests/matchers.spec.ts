describe('Matchers', () => {

    it.skip(`List of generals`, () => {
        const obj1 = { foo: 'bar' };
        const obj2 = { foo: 'bar' };

        // toBe compara la identidad de dos objetos (es decir, si son el mismo objeto en la memoria)
        expect(obj1).toBe(obj2); // Fail

        // toEqual compara el valor de los objetos (es decir, si los objetos tienen los mismos valores de propiedad)
        expect(obj1).toEqual(obj1); // Pass

        // toStrictEqual compara que los objetos posean el mismo tipo asi mismo como la misma estructura y valores.
        expect(obj1).toStrictEqual(obj2); // Pass
    });
    it(`List of Strings`, () => {
        const word = 'ABCD'
        expect(word).toContain('A');
        expect(word).toHaveLength(4);
        expect(word).not.toMatch('WXYZ');
        expect(word).toMatch(/BC/);
    });
    it(`List of Truthiness`, () => {
        const n = null
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();

        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });

    it(`List of Numbers`, () => {
        const value = 2 + 2;

        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);

        // toBe and toEqual son equivalentes para numeros
        expect(value).toBe(4);
        expect(value).toEqual(4);


        // Numeros flotantes
        const valueF = 0.1 + 0.2;
        //expect(value).toBe(0.3);    Podria no funconar por un error de redondeo
        expect(valueF).toBeCloseTo(0.3); // Este definitivamente si funciona
    });

    it(`List of Arrays and iterables`, () => {
        const shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'milk',
        ];

        // Con toContain comprobamos que un valor sea parte de un array
        expect(shoppingList).toContain('milk');
    });

    it(`List of Exceptions`, () => {
        function compileAndroidCode() {
            throw new Error('you are using the wrong JDK!');
        }

        expect(() => compileAndroidCode()).toThrow();
        expect(() => compileAndroidCode()).toThrow(Error);

        // Puedes usar un string que puede estar dentro del mensaje de error para comparar
        expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
        expect(() => compileAndroidCode()).toThrow(/JDK/);
    });

});