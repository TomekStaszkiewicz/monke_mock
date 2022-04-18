import { IMockGenerator } from 'types';

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numeric = '0123456789';

class CMostring implements IMockGenerator<string> {
    constructor(
        private length = 10,
        private useNumbers = false
    ) {}

    Length(l: number): CMostring {
        if(l <= 0) {
            throw new Error('String length must be a positive number!');
        }
        this.length = l;
        return this;
    }

    UseNumbers(shouldUse: boolean): CMostring {
        this.useNumbers = shouldUse;
        return this;
    }

    generate(): string {
        const chars = this.useNumbers ? alpha + numeric : alpha;
        const result = Array(this.length).fill(0).reduce((acc) => {
            return acc + chars.charAt(Math.floor(Math.random()*chars.length));
        }, '')
        return result;
    }
}

export default function() {
    return new CMostring();
}