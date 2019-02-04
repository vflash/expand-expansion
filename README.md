# expand-expansion

```js
import expand from 'expand-expansion';

var objA = expand(null, {value: 777});

console.log(objA.value); // {value: 777}

var objB = expand(objA, {a: 1, b: 2}, {c: 3});

console.log(objB); // {value: 777, a: 1, b: 2, c: 3}
console.log(objA === objB); // true

```