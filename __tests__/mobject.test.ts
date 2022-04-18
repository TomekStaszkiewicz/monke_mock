import MObject from '../src/mobject';
import Monum from '../src/monum';

describe('MObject', () => {
    it('correctly parses object with one key', () => {
        const res = MObject({x: Monum()}).generate();

        expect(typeof res.x).toEqual('number');
    });

    it('correctly parses nested objects', () => {
        const res = MObject({ newObject: MObject({x: Monum()}), anotherObject: MObject({})}).generate();

        expect(res.anotherObject).toEqual({});
        expect(typeof res.newObject.x).toEqual('number');
    });
});