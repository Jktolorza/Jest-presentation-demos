// Ejemplo de matcher customizado en TS
import { expect } from '@jest/globals';
import type { MatcherFunction } from 'expect';

const toBeNine: MatcherFunction<[]> =
    function (number) {
        if (typeof number !== 'number') {
            throw new Error('Arguments must be of type number');
        }

        const pass = number == 9
        if (pass) {
            return {
                message: () =>
                    `expected ${this.utils.printReceived(
                        number,
                    )} not to be number ${this.utils.printExpected(
                        number,
                    )}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${this.utils.printReceived(
                        number,
                    )} to be number ${this.utils.printExpected(
                        9,
                    )}`,
                pass: false,
            };
        }
    };

expect.extend({
    toBeNine,
});

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeNine(): R;
        }
    }
}

