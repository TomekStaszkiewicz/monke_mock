import { IMockGenerator } from '../types';

export function isGenerator(val: any): val is IMockGenerator {
    return !!(val && val.generate && typeof val.generate === 'function');
}