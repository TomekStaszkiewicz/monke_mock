import {Mhex} from '../src';

describe('Mhex', () => {
    it('generates random hex with length 1', () => {
        const n = Mhex().generate();

        expect(typeof n).toEqual('string');
        expect(n.length).toEqual(3); // 0x + 4 hex digits
        const regex = /0x[0-9A-F]{1}/;

        expect(n.match(regex)).not.toBeNull(); 
    });

    it('generates random hex with given value', () => {
        const n = Mhex().Length(100).generate();

        expect(typeof n).toEqual('string');
        expect(n.length).toEqual(102); // 0x + 4 hex digits
        const regex = /0x[0-9A-F]{100}/;

        expect(n.match(regex)).not.toBeNull(); 
    });

    it('throws error if the length is less than 1', () => {
        let n = Mhex().Length(-1);

        expect(() => n.generate()).toThrow();

        n = Mhex().Length(0);

        expect(() => n.generate()).toThrow();
    });
});