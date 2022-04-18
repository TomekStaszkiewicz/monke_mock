import {Mnum} from '../src';

describe('Monum', () => {
    it('generates random number in range 0 - 100 by default', () => {
        const n = Mnum().generate();

        expect(typeof n).toEqual('number');
        expect(n >= 0).toBeTruthy();
        expect(n < 100).toBeTruthy();
    });

    it.each([
        [0, 10],
        [1, 10],
        [2, 1000],
        [-5, 300],
        [21, 37],
        [-10, -3],
        [-10, 10]
    ])('generates random number in range %p - %p by default', (p, q) => {
        const n = Mnum().Min(p).Max(q).generate();

        expect(typeof n).toEqual('number');
        expect(n >= p).toBeTruthy();
        expect(n < q).toBeTruthy();
    });

    it('generates only integers when needed', () => {
        const n = Mnum().IsInt(true).generate();

        expect(typeof n).toEqual('number');
        expect(Math.round(n)).toEqual(n);
    });
});