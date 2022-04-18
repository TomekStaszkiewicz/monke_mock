import Monum from '../src/monum';
import Moarray from '../src/moarray';
import MObject from '../src/mobject';
import Mostring from '../src/mostring';

describe('moarray', () => {
    it('generates array with correct length', () => {
        const res = Moarray(Monum()).generate();
        expect(res).toHaveLength(10)
    });
    it('generates array of objects', () => {
        const res = Moarray(MObject({
            x: Monum(),
            y: Mostring()
        })).generate();

        expect(res).toHaveLength(10);
        res.forEach((o) => {
            expect(typeof o.x).toEqual('number');
            expect(typeof o.y).toEqual('string');
        });
    });
});