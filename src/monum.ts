import { IMockGenerator } from 'types';

class CMonum implements IMockGenerator<number> {
    constructor(
        private min = 0,
        private max = 100,
        private isInteger = false,
    ){ }


    Min(minValue: number): CMonum {
        this.min = minValue;
        return this;
    }

    Max(maxValue: number): CMonum {
        this.max = maxValue;
        return this;
    }

    IsInt(isInt: boolean): CMonum {
        this.isInteger = isInt;
        return this;
    }

    generate(): number {
        if(this.max <= this.min){
            throw new Error('Max value must be bigger than min value');
        }
        const delta = this.max - this.min;
        const num = this.min + Math.random() * (delta);
        if(this.isInteger) return Math.floor(num);
        return num;
    }
}

export default function() {
    return new CMonum();
}