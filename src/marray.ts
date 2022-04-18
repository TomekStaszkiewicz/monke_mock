import { IMockGenerator, ICMarray, Arried } from 'types';

class CMarray<T extends IMockGenerator> implements ICMarray<T> {
    private length = 10;
    constructor(
        private readonly objectDefinition: T
    ){}

    Length(newL: number): CMarray<T> {
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

export default function<T extends IMockGenerator>(objectDefinition: T): CMarray<T> {
    return new CMarray<T>(objectDefinition);
}