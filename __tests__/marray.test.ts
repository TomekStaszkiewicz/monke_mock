import {Mnum, Marray, Mobject, Mstring} from '../src';

describe('moarray', () => {
    it('generates array with correct length', () => {
        const res = Marray(Mnum()).generate();
        expect(res).toHaveLength(10);
    });
    it('generates array of objects', () => {
        const res = Marray(Mobject({
            x: Mnum(),
            y: Mstring()
        })).generate();

        expect(res).toHaveLength(10);
        res.forEach((o) => {
            expect(typeof o.x).toEqual('number');
            expect(typeof o.y).toEqual('string');
        });
    });
});