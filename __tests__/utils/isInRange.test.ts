import { isInRange } from '../../src/utils';


describe('isInRange', () => {
    it.each([
        [10, 0, 20, true],
        [-1, 0, 1, false],
        [5, 5, 10, true],
        [0, -10, 0, true],
        [0, -100, 100, true]
    ])('returns correct value - val: %p, min: %p, max: %p', (val, min, max, expected) => {
        expect(isInRange(val, min, max)).toEqual(expected);
    });
});