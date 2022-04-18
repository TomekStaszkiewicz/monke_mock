import { IMockGenerator } from 'types';


export default function<T extends IMockGenerator>(GeneratorClass: {new(...args: any[]): T}, ...args: any[]) {
    const instance = new GeneratorClass(...args); 
    if(!instance.generate){
        throw new Error(`The ${GeneratorClass.name} class does not extend the IMockGenerator properly. No "generate" method found.`);
    }
    return instance;
}