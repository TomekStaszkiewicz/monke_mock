# Monke mock

A fast mock data generator with a great typescript supportand no 3rd party dependencies.

## Introduction

I could not find any cool package for quickly creating a mock schema of objects and arrays for my unit tests or just to populate site with random data. That is why I decided to create my own version of it. 

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