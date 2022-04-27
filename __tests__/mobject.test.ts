import {Mobject, Mnum, Mstring, Marray} from '../src';

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

    it('correctly parses shape with exact values passed', () => {
        const res = Mobject({ 
            aNumber: 10,
            aString: Mstring(),
            anObject: Mobject({
                anotherNumber: Mnum(),
                aString: 'Some string value'
            }),
            fixedObject: {
                a: 10,
                b: 'ten'
            },
            fixedArray: [1, 5, 3, 1],
            aNull: null,
            anUndefined: undefined
        }).generate();

        expect(res.aNumber).toEqual(10);
        expect(typeof res.aString).toEqual('string');
        expect(typeof res.anObject.anotherNumber).toEqual('number');
        expect(res.anObject.aString).toEqual('Some string value');
        expect(res.fixedObject).toEqual({ a: 10, b: 'ten'});
        expect(res.fixedArray).toEqual([1, 5, 3, 1]);
        expect(res.aNull).toBeNull();
        expect(res.anUndefined).toBeUndefined();
    });

    it('correctly parses object with array inside', () => {
        const res = Mobject({
            someArr: Marray(Mnum())
        }).generate();

        for(const val of res.someArr){
            expect(typeof val).toEqual('number');
        }
    });
});