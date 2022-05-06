import { convertDate, isLeapYear } from '../../src/utils';

describe('dateUtils', () => {    
    it.each([
        ['10.12.2021'], 
        ['01.01.2009'], 
        [new Date('14.05.2020')]
    ])('convertDate - returns date object', (d) => {
        expect(convertDate(d)).toBeInstanceOf(Date);
    });

    it.each([
        [2012, true],
        [2011, false],
        [2000, true],
        [2100, false],
        [1990, false]
    ])('isLeapYear - %p should be %p', (year, expectedResult) => {
        expect(isLeapYear(year)).toEqual(expectedResult);
    });
});