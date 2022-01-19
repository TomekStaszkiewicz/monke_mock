import Monum from '../monum';
import Moarray from '../moarray';
import MObject from '../mobject';
import Mostring from '../mostring';

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