/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
interface IMockGenerator<T = any> {
    generate: () => T;
}

//@ts-ignore
interface ICMObject<T = any> {
    generate: () => Nested<T>;
}
//@ts-ignore
interface ICMoarray<T = any> {
    generate: () => Arried<T>[];
}

type TypeFromWrapper<T> = T extends IMockGenerator<infer Z> ? Z : never; 

type Nested<T> = {
    [K in keyof T]: T[K] extends ICMObject<infer Z> ? Nested<Z> : TypeFromWrapper<T[K]>;
};

type Arried<T> = T extends ICMObject<infer Z> ? Nested<Z> : TypeFromWrapper<T>;