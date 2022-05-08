# Monke mock

A fast mock data generator with a great typescript support and no 3rd party dependencies.

## Introduction

I could not find any cool package for quickly creating a mock schema of objects and arrays for my unit tests or just to populate site with random data. That is why I decided to create my own version of it. 


## Benefits of using monke-mock

While `faker.js` provides an excellent generator for data like emails, names, etc. it is not suitable for generating developer-defined shapes of data. Let's say that you want to have an array of objects for testing purposes. While it is possible, but not straightforward to accomplish using the `faker.js`, it is extremely easy with `monke-mock`.

Faker way:
```typescript
const arr = [];
for(let i = 0; i < 100; i++){
    arr.push({
        x: faker.datatype.number()
    });
}
```

Monke-mock way:
```typescript
const data = Marray(MObject({x: Mnum()})).Length(100).generate();
```

## Getting started

Install with:
```
npm install monke-mock
```
```
yarn add monke-mock
```

Currently `monke-mock` supports following data types:
* number - `Mnum`
* string - `Mstring`
* object - `Mobject`
* array - `Marray`
* Date - `Mdate`

| Data type | Function | Available modifiers|
|-----------|----------|--------------------|
| number    | Mnum    | Max(), Min(), IsInt()|
| string    | Mstring | Length(), UseNumbers()|
| date      | Mdate   | Max(), Min()|
| object    | Mobject  | |
| array     | Marray  | Length() |

## Examples

### Generating a number

```typescript
import { Mnum } from 'monke-mock';

const x = Mnum().generate();
```

You can also specify Min and Max values:
```typescript
import { Mnum } from 'monke-mock';

const x = Mnum().Min(21).Max(37).generate();
```

### Generating a negative number

```typescript
import { Mnum } from 'monke-mock';

const x = Mnum().Min(-100).Max(0).generate();
```

### Generating an array of strings

```typescript
import { Marray, Mstring } from 'monke-mock';

const x = Marray(Mstring()).generate();
```

### Generating an object with one key always equal to 1

```typescript
import { Mobject, Mstring } from 'monke-mock';

const x = Mobject({fixedKey: 1, someRandomString: Mstring()}).generate();
```

### Creating a custom generator

```typescript
import { Mcustom, Marray, IMockGenerator } from 'monke-mock';


// First define a class that implements the IMockGenerator
class ACustomGenerator implements IMockGenerator<number> {
    
    // the generate() function should implement the algorithm that returns the random data 
    generate(): number {
        return Date.now() % 2 ? 1 : -1;
    }
}

// Then use the `Mcustom` function to wrap the class
const x = Marray(Mcustom(ACustomGenerator));
```