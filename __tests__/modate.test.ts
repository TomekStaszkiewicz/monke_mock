import { convertDate } from '../src/utils';
import MOdate from '../src/modate';

describe('modate', () => {
    it('generates some date', () => {
        const res = MOdate().generate();
        expect(res).toBeInstanceOf(Date)
    });

    it.each([
        [new Date('10.10.2010'), '12.10.2010'], 
        ['01.03.1980', '12.12.2021'], 
        [new Date('08.01.2020'), new Date('31.12.2130')], 
    ])('generates date within correct range', (min, max) => {
        const res = MOdate().Min(min).Max(max).generate();
        const minD = convertDate(min);
        const maxD = convertDate(max);
        
        expect(res.getTime() < maxD.getTime());
        expect(res.getTime() >= minD.getTime());
    });
});