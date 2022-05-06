import { convertDate } from '../src/utils';
import Mdate from '../src/mdate';

describe('mdate', () => {
    it('generates some date', () => {
        const res = Mdate().generate();
        expect(res).toBeInstanceOf(Date);
    });

    it.each([
        [new Date('10.10.2010'), '12.10.2010'], 
        ['01.03.1980', '12.12.2021'], 
        [new Date('08.01.2020'), new Date('31.12.2130')], 
    ])('generates date within correct range', (min, max) => {
        const res = Mdate().Min(min).Max(max).generate();
        const minD = convertDate(min);
        const maxD = convertDate(max);
        
        expect(res.getTime() < maxD.getTime());
        expect(res.getTime() >= minD.getTime());
    });
    
    it.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
             11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
             21, 22, 23, 24, 25, 26, 27, 28])('allows to set day - %p', (dayNo) => {
        const res = Mdate().Day(dayNo).generate();
        expect(res.getDate()).toEqual(dayNo);
    });

    it('throws error when day out of range', () => {
        expect(() => Mdate().Day(100)).toThrow();
    });

    it.each([0, 1, 2, 3, 4, 5, 6, 
             7, 8, 9, 10, 11])('allows to set month - %p', (monthNo) => {
        const res = Mdate().Month(monthNo).generate();
        expect(res.getMonth()).toEqual(monthNo);
    });

    it('throws error when month out of range', () => {
        expect(() => Mdate().Month(31)).toThrow();
    });

    it.each([1971, 2000, 2001, 1997, 2210, 1781])('allows to set year - %p', (yearNo) => {
        const res = Mdate().Year(yearNo).generate();
        expect(res.getFullYear()).toEqual(yearNo);
    });

    it.each([
        [1, 1, 2001],
        [31, 2, 2010],
        [25, 0, 1997],
        [16, 5, 1997]
    ])('allows to set full date - %p/%p/%p', (dayNo, monthNo, yearNo) => {
        const res = Mdate().Day(dayNo).Month(monthNo).Year(yearNo).generate();
        expect(res.getFullYear()).toEqual(yearNo);
        expect(res.getMonth()).toEqual(monthNo);
        expect(res.getDate()).toEqual(dayNo);
    });

    it('throws proper error when trying to set month out of range', () => {
        expect(() => Mdate().Month(13)).toThrow('Month not in range 0-11. Provided month number: 13');
    });


    it('throws proper error when trying to set day out of range', () => {
        expect(() => Mdate().Day(33)).toThrow('Day not in range 1-31. Provided day number: 33');
    });


    it('throws proper error when trying to set day out of range for given month', () => {
        expect(() => Mdate().Year(2012).Month(1).Day(30).generate()).toThrow('Wrong value of days for given month');
        expect(() => Mdate().Year(2012).Month(1).Day(29).generate()).not.toThrow('Wrong value of days for given month');
    
        expect(() => Mdate().Year(2011).Month(1).Day(30).generate()).toThrow('Wrong value of days for given month');
        expect(() => Mdate().Year(2011).Month(1).Day(29).generate()).toThrow('Wrong value of days for given month');  
    });
});