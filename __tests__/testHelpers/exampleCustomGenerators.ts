import { IMockGenerator } from '../../src/monkeMockTypes';

export class NameGenerator implements IMockGenerator<string> {
    generate(): string {
        return 'Tomek';
    }
}

export class NameWithCstrParamsGenerator implements IMockGenerator<string> {
    constructor(private readonly name: string) {}

    generate(): string {
        return this.name;
    }
}

export class ExampleObjectGenerator implements IMockGenerator<Array<{a: number; b: string}>> {
    generate(): Array<{a: number; b: string}> {
        return [
            {a: 10, b: 'Ten'},
            {a: 1, b: 'One'},
            {a: 20, b: 'Twenty'}
        ];
    }
}

export class BrokenGenerator {}