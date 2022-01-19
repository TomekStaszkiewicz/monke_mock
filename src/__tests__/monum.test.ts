import Monum from '../monum';

describe('Monum', () => {
    it('generates random number in range 0 - 100 by default', () => {
        const n = Monum().generate();

        expect(typeof n).toEqual('number');
        expect(n >= 0).toBeTruthy();
        expect(n < 100).toBeTruthy();
    });

    it.each([
        [0, 10],
        [1, 10],
        [2, 1000],
        [-5, 300],
        [21, 37]
    ])('generates random number in range %p - %p by default', (p, q) => {
        const n = Monum().Min(p).Max(q).generate();

        expect(typeof n).toEqual('number');
        expect(n >= p).toBeTruthy();
        expect(n < q).toBeTruthy();
    });

    it('generates only integers when needed', () => {
        const n = Monum().IsInt(true).generate();

        expect(typeof n).toEqual('number');
        expect(Math.round(n)).toEqual(n);
    });
});