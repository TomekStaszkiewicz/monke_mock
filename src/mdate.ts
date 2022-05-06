import { IMockGenerator } from './monkeMockTypes';
import { convertDate, generateRandom, generateRandomDay, isInRange, isLeapYear, leapMonthDays, nonLeapMonthDays } from './utils';

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
            throw new Error(`Month not in range 0-11. Provided month number: ${monthNo}`);
        }
        this.month = monthNo;
        return this;
    }

    Year(yearNo: number): CMDate {
        this.year = yearNo;
        return this;
    }

    generate(): Date {
        const year = this.year !== null ? this.year : generateRandom(this.minDate.getFullYear(), this.maxDate.getFullYear(), true);
        const month = this.month !== null ? this.month : generateRandom(0, 12, true);
        if(this.day !== null && this.month !== null && this.year !== null) {
                const dataSet = isLeapYear(this.year) ? leapMonthDays : nonLeapMonthDays;
                if(dataSet[this.month] < this.day){
                    throw new Error('Wrong value of days for given month');
                }
        }
        const day = this.day !== null ? this.day : generateRandomDay(month, year);
        return new Date(`${month+1}.${day}.${year}`);
    }
}

export default function(): CMDate {
    return new CMDate();
}