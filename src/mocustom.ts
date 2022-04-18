import { IMockGenerator } from 'types';

export default function<T extends IMockGenerator>(GeneratorClass: {new(...args: any[]): T}, ...args: any[]) {
    return new GeneratorClass(...args);
}