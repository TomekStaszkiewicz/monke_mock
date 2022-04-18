# Monke mock

A fast mock data generator with a great typescript support.

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

If you need to generate a random number:

```typescript
import { MOnum } from 'monke-mock';

const x = MOnum().generate();
```

if you want to add Min and Max values:
```typescript
import { MOnum } from 'monke-mock';

const x = MOnum().Min(21).Max(37).generate();
```


Currently `monke-mock` supports following data types:
* number - `MOnum`
* string - `MOstring`
* object - `MObject`
* array - `MOarray`
* Date - `MOdate`

| Data type | Function | Available modifiers|
|-----------|----------|--------------------|
| number    | MOnum    | Max(), Min(), IsInt()|
| string    | MOstring | Length(), UseNumbers()|
| date      | MOdate   | Max(), Min()|
| object    | MObject  | |
| array     | MOarray  | Length() |
