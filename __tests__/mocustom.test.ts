import MOcustom from '../src/mocustom';
import {ExampleObjectGenerator, NameGenerator, NameWithCstrParamsGenerator} from './testHelpers/exampleCustomGenerators';



describe('mocustom', () => {
    it('allows to embed own implementation into the generator', () => {
        const someName = MOcustom(NameGenerator).generate();

        expect(someName).toEqual('Tomek');
    });

    it.each([
        'Asia', 'Tomek', 'Mila', 'Simon'
    ])('allows to pass arguments to the class - name %p', (name) => {
        const someName = MOcustom(NameWithCstrParamsGenerator, name).generate();

        expect(someName).toEqual(name);
    });

    it('allows to pass generators which return objects', () => {
        const nums = MOcustom(ExampleObjectGenerator).generate();

        expect(nums[0].a).toEqual(10);
        expect(nums[0].b).toEqual('Ten');

        expect(nums[1].a).toEqual(1);
        expect(nums[1].b).toEqual('One');

        expect(nums[2].a).toEqual(20);
        expect(nums[2].b).toEqual('Twenty');
    });
});