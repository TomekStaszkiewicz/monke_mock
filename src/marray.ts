import { ICMarray, Arried } from './monkeMockTypes';
import {isGenerator} from './utils';

class CMarray<T> implements ICMarray<T> {
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
            if(isGenerator(this.objectDefinition)){
                return this.objectDefinition.generate();
            }
            return this.objectDefinition;
        });
        
        return res;
    }
}

export default function<T>(objectDefinition: T): CMarray<T> {
    return new CMarray<T>(objectDefinition);
}