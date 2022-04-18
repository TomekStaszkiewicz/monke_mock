import { IMockGenerator, ICMoarray, Arried } from 'types';

class CMoarray<T extends IMockGenerator> implements ICMoarray<T> {
    private length = 10;
    constructor(
        private readonly objectDefinition: T
    ){}

    Length(newL: number): CMoarray<T> {
        this.length = newL;
        return this;
    }
    
    generate(): Arried<T>[] {
        const res = Array(this.length).fill(0).map(() => {
            return this.objectDefinition.generate();
        });
        
        return res;
    }
}

export default function<T extends IMockGenerator>(objectDefinition: T): CMoarray<T> {
    return new CMoarray<T>(objectDefinition)
}