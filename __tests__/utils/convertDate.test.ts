import { convertDate } from '../../src/utils';

describe('convertDate', () => {    
    it.each([
        ['10.12.2021'], 
        ['01.01.2009'], 
        [new Date('14.05.2020')]
    ])('returns date object', (d) => {
        expect(convertDate(d)).toBeInstanceOf(Date);
    });
});