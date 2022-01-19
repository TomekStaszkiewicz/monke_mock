import { generateRandom } from './utils';

class CMODate implements IMockGenerator{
    constructor(
        private minDate = new Date('01.01.2001'),
        private maxDate = new Date('31.12.2100')
    ){}
    Min(d: string | Date): CMODate {
        let newD = d;
        if(typeof newD === 'string'){
            newD = new Date(newD);
        }
        this.minDate = newD;
        return this;
    }

    Max(d: string | Date): CMODate {
        let newD = d;
        if(typeof newD === 'string'){
            newD = new Date(newD);
        }
        this.maxDate = newD;
        return this;
    }
    generate(): Date {
        const start = this.minDate.getTime();
        const end = this.maxDate.getTime();
        const newT = generateRandom(start, end);
       
        const d = new Date(newT);

        return d;
    }
}

export default function(): CMODate {
    return new CMODate();
}