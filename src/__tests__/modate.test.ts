import MOdate from '../modate';

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
        let minD = min;
        if(typeof minD === 'string'){
            minD = new Date(minD);
        }
        let maxD = max;
        if(typeof maxD === 'string'){
            maxD = new Date(maxD);
        }
        expect(res.getTime() < maxD.getTime());
        expect(res.getTime() >= minD.getTime());
    });
});