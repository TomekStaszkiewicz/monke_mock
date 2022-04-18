import {Mcustom, Mobject, Marray} from '../src';
import {ExampleObjectGenerator, NameGenerator, NameWithCstrParamsGenerator} from './testHelpers/exampleCustomGenerators';


describe('mocustom', () => {
    it('allows to embed own implementation into the generator', () => {
        const someName = Mcustom(NameGenerator).generate();

        expect(someName).toEqual('Tomek');
    });

    it.each([
        'Asia', 'Tomek', 'Mila', 'Simon'
    ])('allows to pass arguments to the class - name %p', (name) => {
        const someName = Mcustom(NameWithCstrParamsGenerator, name).generate();

        expect(someName).toEqual(name);
    });

    it('allows to pass generators which return objects', () => {
        const nums = Mcustom(ExampleObjectGenerator).generate();

        expect(nums[0].a).toEqual(10);
        expect(nums[0].b).toEqual('Ten');

        expect(nums[1].a).toEqual(1);
        expect(nums[1].b).toEqual('One');

        expect(nums[2].a).toEqual(20);
        expect(nums[2].b).toEqual('Twenty');
    });

    it('allows to embed custom types as nested types in other structs', () => {
        const data = Marray(Mobject({
            name: Mcustom(NameGenerator)
        })).Length(10).generate();
        expect(data).toHaveLength(10);

        for(const singleObject of data){
            expect(singleObject.name).toEqual('Tomek');
        }
    });
});