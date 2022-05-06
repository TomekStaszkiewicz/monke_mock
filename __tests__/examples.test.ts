import {Mobject, Mstring, Mnum, Mdate, Marray} from '../src';

function testObject(mockShape: any, expectedShape: any) {
    const mockedObject = Mobject(mockShape).generate();
    expect(mockedObject).toMatchObject(expectedShape);
}

function testArray(mockShape: any, expectedShape: any) {
    const mockedArray = Marray(mockShape).generate();
    for(const item of mockedArray){
        if(typeof expectedShape === 'object') {
            expect(item).toMatchObject(expectedShape);
        } else {
            expect(typeof item).toEqual(expectedShape);
        }
    }
}

describe('example tests', () => {
    describe('objects with different shapes', () => {
        it('simple object', () => {
            testObject({
                x: Mstring()
            }, 
            {
                x: expect.any(String)
            });
        });

        it('object with multiple keys', () => {
            testObject({
                x: Mnum(),
                y: Mstring().UseNumbers(true),
                z: Mdate()
            },
            {
                x: expect.any(Number),
                y: expect.any(String),
                z: expect.any(Date)
            });
        });
        it('nested object', () => {
            testObject({
                o: Marray(1),
                nestedO: Mobject({
                    arr: Marray(Mnum())
                })
            },
            {
                o: expect.any(Array),
                nestedO: {
                    arr: expect.any(Array)
                }
            });
        });

        it('object with many levels', () => {
            testObject({
                o: Mobject({
                    o: Mobject({
                        o: Mobject({
                            o: 5
                        })
                    })
                }),
                ao: Mobject({
                    x: Marray(1)
                })
            }, {
                o: {o: {o: {o: expect.any(Number)}}},
                ao: {x: expect.any(Array)}
            });
        });
       
    });

    describe('arrays with different shapes', () => {
        it('works with simple data', () => {
            testArray(Mnum(), 'number');
            testArray(Mstring(), 'string');
        });
        it('works with simple object', () => {
            testArray(Mobject({num: Mnum(), str: Mstring()}), {num: expect.any(Number), str: expect.any(String)});
            testArray(Mobject({date: Mdate(), arr: Marray(10)}), {date: expect.any(Date), arr: expect.any(Array)});
        });
        it('works with complex objects', () => {
            testArray(Mobject({
                o: Mobject({
                    o: Mobject({
                        o: Marray(Mstring())
                    })
                })
            }), {o: {o: {o: expect.any(Array)}}});
            testArray(Mobject({o: Mobject({o: Mobject({o: Mobject({o: Mobject({x: Mnum()})})})})}), {o: {o: {o: {o: {x: expect.any(Number)}}}}});
        });
    });
});