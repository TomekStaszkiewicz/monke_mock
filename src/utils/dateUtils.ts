import { generateRandom } from './generateRandom';

export function convertDate(d: string | Date): Date {
    if(typeof d === 'string'){
        return new Date(d);
    }
    return d;
}

export function isLeapYear(year: number) {
    return ((year%4)===0 && !((year%100) === 0)) || (year%400) === 0;
}

export const leapMonthDays = [31,29,31,30,31,30,31,31,30,31,30,31];

export const nonLeapMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31];


export function generateRandomDay(month: number, year: number){
    const isLeap = isLeapYear(year);

    if(isLeap){
        return generateRandom(1, leapMonthDays[month], true);
    }

    return generateRandom(1, nonLeapMonthDays[month], true);
}