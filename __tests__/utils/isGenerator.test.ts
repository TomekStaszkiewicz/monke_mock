import { isGenerator } from '../../src/utils';
import {BrokenGenerator, ExampleObjectGenerator, NameGenerator, NameWithCstrParamsGenerator} from '../testHelpers/exampleCustomGenerators';

describe('isGenerator', () => {
    it('correctly checks if some class instance is a generator', () => {
        expect(isGenerator(new BrokenGenerator())).toEqual(false); 
        expect(isGenerator(new ExampleObjectGenerator())).toEqual(true); 
        expect(isGenerator(new NameGenerator())).toEqual(true);
        expect(isGenerator(new NameWithCstrParamsGenerator('a name'))).toEqual(true);
    });

    it.each([
        1, 'asd', null, undefined, NaN, {}, [], -10
    ])('checks correctly if a value is a generator - %p', (val) => {
        expect(isGenerator(val)).toEqual(false);
    });
});