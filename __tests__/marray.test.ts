import {Mnum, Marray, Mobject, Mstring} from '../src';

describe('moarray', () => {
    it('generates array with default length', () => {
        const res = Marray(Mnum()).generate();
        expect(res).toHaveLength(10);
    });

    it.each([1, 3, 5, 10, 100, 1000, 10000, 100000])('generates array with correct length - %p', (l) => {
        const res = Marray(Mnum()).Length(l).generate();
        expect(res).toHaveLength(l);
    });

    it('generates array of objects', () => {
        const res = Marray(Mobject({
            x: Mnum(),
            y: Mstring()
        })).generate();

        expect(res).toHaveLength(10);
        for(const o of res) {
            expect(typeof o.x).toEqual('number');
            expect(typeof o.y).toEqual('string');
        }
    });

    it('generates array of strings', () => {
        const res = Marray(Mstring()).generate();
        expect(res).toHaveLength(10);

        for(const o of res) {
            expect(typeof o).toEqual('string');
        }
    });

    it.each([1, 'a', {a: 'someData'}, [2, 1, 0], null, undefined, NaN])('generates an array of fixed value - %p', (val) => {
        const res = Marray(val).generate();
        expect(res).toHaveLength(10);

        for(const o of res) {
            expect(o).toEqual(val);
        }
    });
});