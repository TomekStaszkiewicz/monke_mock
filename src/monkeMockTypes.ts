/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
export interface IMockGenerator<T = any> {
    generate: () => T;
}

//@ts-ignore
export interface ICMobject<T = any> {
    generate: () => Nested<T>;
}
//@ts-ignore
export interface ICMarray<T = any> {
    generate: () => Arried<T>[];
}

export type TypeFromGenerator<T> = T extends IMockGenerator<infer Z> ? Z : never; 

export type Nested<T> = {
    [K in keyof T]: T[K] extends ICMobject<infer Z> ? Nested<Z> : TypeFromGenerator<T[K]>;
};

export type Arried<T> = T extends ICMobject<infer Z> ? Nested<Z> : TypeFromGenerator<T>;