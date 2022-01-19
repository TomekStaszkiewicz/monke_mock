import Mostring from '../mostring';

describe('mostring', () => {
    it('generates string with default length = 10', () => {
        const res = Mostring().generate();
        expect(res).toHaveLength(10)
    });

    it.each([
        [10], [100], [21], [3], [1], [2100]
    ])('generates string with length = %p', (l) => {
        const res = Mostring().Length(l).generate();
        expect(res).toHaveLength(l);
    });
});