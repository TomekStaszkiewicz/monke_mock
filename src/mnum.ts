import { IMockGenerator } from './monkeMockTypes';
import { generateRandom } from './utils';

class CMnum implements IMockGenerator<number> {
    constructor(
        private min = 0,
        private max = 100,
        private isInteger = false,
    ){ }


    Min(minValue: number): CMnum {
        this.min = minValue;
        return this;
    }

    Max(maxValue: number): CMnum {
        this.max = maxValue;
        return this;
    }

    IsInt(isInt: boolean): CMnum {
        this.isInteger = isInt;
        return this;
    }

    generate(): number {
        if(this.max <= this.min){
            throw new Error('Max value must be bigger than min value');
        }
        
        const num = generateRandom(this.min, this.max, this.isInteger);
        return num;
    }
}

export default function() {
    return new CMnum();
}