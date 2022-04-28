import { isGenerator } from './utils';
import { ICMobject, IMockGenerator, Nested } from './monkeMockTypes';

class CMobject<T = Record<string, any>> implements ICMobject<T>{
    constructor(private readonly objectDefinition: T) {}

    generate(): Nested<T> {
        const oKeys = Object.keys(this.objectDefinition);
        
        const res = oKeys.reduce((acc, curr) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                
                return {...acc, [curr]: isGenerator(this.objectDefinition[curr]) ? this.objectDefinition[curr].generate() : this.objectDefinition[curr]}; 
        }, {} as Nested<T>);

        return res;
    }
}

export default function MObject<T extends Record<string, any>>(objectDefinition: T): CMobject<T> {
    return new CMobject<T>(objectDefinition);
}