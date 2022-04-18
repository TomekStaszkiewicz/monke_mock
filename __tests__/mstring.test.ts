import {Mstring} from '../src';

describe('mostring', () => {
    it('generates string with default length = 10', () => {
        const res = Mstring().generate();
        expect(res).toHaveLength(10);
    });

    it.each([
        [10], [100], [21], [3], [1], [2100]
    ])('generates string with length = %p', (l) => {
        const res = Mstring().Length(l).generate();
        expect(res).toHaveLength(l);
    });
});