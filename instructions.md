Write a function called `addArrayValue` which takes three parameters:

- `obj` - an object
- `key` - a string
- `val` - an array

The function should set a new key-value pair on the object, storing the provided array `val` at the given key.

**For example:**

```
var myObj = {};
```

```
var myArray = [1, 3];
```

```
addArrayValue(myObj, 'myValue', myArray);
```

```
console.log(myObj['myValue']); // should print [1, 3]
```

