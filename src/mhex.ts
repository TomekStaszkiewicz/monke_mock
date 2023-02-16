import { IMockGenerator } from './monkeMockTypes';
import { generateRandom } from './utils';

const hexValues = '0123456789ABCDEF';

class CMHex implements IMockGenerator<string> {
    constructor(
        private length = 1,
    ){ }


    Length(newLength: number): CMHex {
        this.length = newLength;
        return this;
    }

    generate(): string {
        if(this.length < 1){
            throw new Error('Length must be bigger than 0');
        }
        let hex = '0x';

        for(let i = 0; i < this.length; i++) {
            const newNumber = generateRandom(0, hexValues.length, true);
            hex += hexValues[newNumber];
        }
        return hex;
    }
}

export default function() {
    return new CMHex();
}