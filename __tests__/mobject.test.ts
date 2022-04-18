import {Mobject, Mnum} from '../src';

describe('MObject', () => {
    it('correctly parses object with one key', () => {
        const res = Mobject({x: Mnum()}).generate();

        expect(typeof res.x).toEqual('number');
    });

    it('correctly parses nested objects', () => {
        const res = Mobject({ newObject: Mobject({x: Mnum()}), anotherObject: Mobject({})}).generate();

        expect(res.anotherObject).toEqual({});
        expect(typeof res.newObject.x).toEqual('number');
    });

    it('correctly parses multiple level objects', () => {
        const res = Mobject({ 
            i: Mobject({
                walked: Mobject({
                    the: Mobject({
                        lonely: Mobject({
                            road: Mnum()
                        })
                    })
                })
            }), 
            anotherObject: Mobject({})
        }).generate();

        expect(typeof res.i.walked.the.lonely.road).toEqual('number');
        expect(res.anotherObject).toEqual({});
    });
});