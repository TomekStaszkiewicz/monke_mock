import { IMockGenerator } from './monkeMockTypes';
import { convertDate, generateRandom, isInRange } from './utils';
const leapMonthDays = [31,29,31,30,31,30,31,31,30,31,30,31];

const nonLeapMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

function isLeapYear(year: number) {
    return ((year%4)===0 && !((year%100) === 0)) || (year%400) === 0;
}

export function generateRandomDay(month: number, year: number){
    const isLeap = isLeapYear(year);

    if(isLeap){
        return generateRandom(1, leapMonthDays[month], true);
    }

    return generateRandom(1, nonLeapMonthDays[month], true);
}
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
        if(!isInRange(dayNo, 0, 31)) {
            throw new Error(`Day not in range 1-31. Provided day number: ${dayNo}`);
        }        this.day = dayNo;
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
        if(this.day !== null && this.month !== null) {
            if(this.year !== null && isLeapYear(this.year)) {
                if(leapMonthDays[this.month] > this.day){
                    throw new Error('Wrong value of days for given month');
                }
            } else if(this.year === null) {
                if(nonLeapMonthDays[this.month] > this.day){
                    throw new Error('Wrong value of days for given month');
                }
            }
        }
        const day = this.day !== null ? this.day : generateRandomDay(month, year);
        return new Date(`${month+1}.${day}.${year}`);
    }
}

export default function(): CMDate {
    return new CMDate();
}