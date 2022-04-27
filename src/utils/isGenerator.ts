import { IMockGenerator } from '../monkeMockTypes';

export function isGenerator(val: any): val is IMockGenerator {
    return !!(val && val.generate && typeof val.generate === 'function');
}