import { IMockGenerator } from './types';
import { convertDate, generateRandom, isInRange } from './utils';

class CMDate implements IMockGenerator{
    constructor(
        private minDate = new Date(2001, 0, 1),
        private maxDate = new Date(2100, 0, 1),
        private day: number | null = null,
        private month: number | null = null,
        private year: number | null = null,
    ){}
    
    Min(d: string | Date): CMDate {
        this.minDate = convertDate(d);
        return this;
    }

    Max(d: string | Date): CMDate {
        this.maxDate = convertDate(d);
        return this;
    }

    Day(dayNo: number): CMDate {
        if(!isInRange(dayNo, 1, 31)) {
            throw new Error(`Day not in range 1-31. Provided day number: ${dayNo}`);
        }
        this.day = dayNo;
        return this;
    }

    Month(monthNo: number): CMDate {
        if(!isInRange(monthNo, 0, 11)) {
            throw new Error(`Month not in range 0-11. Provided day number: ${monthNo}`);
        }
        this.month = monthNo;
        return this;
    }

    Year(yearNo: number): CMDate {
        this.year = yearNo;
        return this;
    }

    generate(): Date {
        const start = this.minDate.getTime();
        const end = this.maxDate.getTime();
        const newT = generateRandom(start, end);
       
        const d = new Date(newT);
        if(this.year !== null){
            d.setFullYear(this.year);
        }
        if(this.month !== null){
            d.setMonth(this.month);
        }
        if(this.day !== null){
            d.setDate(this.day);
        }
        return d;
    }
}

export default function(): CMDate {
    return new CMDate();
}