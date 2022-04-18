import { ICMObject, IMockGenerator, Nested } from './types';

class CMObject<T = Record<string, IMockGenerator>> implements ICMObject<T>{
    constructor(private readonly objectDefinition: T) {}

    generate(): Nested<T> {
        const oKeys = Object.keys(this.objectDefinition);
        
        const res = oKeys.reduce((acc, curr) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                return {...acc, [curr]: this.objectDefinition[curr].generate()} 
        }, {} as Nested<T>);

        return res;
    }
}

export default function MObject<T = Record<string, IMockGenerator>>(objectDefinition: T): CMObject<T> {
    return new CMObject<T>(objectDefinition)
}