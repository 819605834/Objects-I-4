// Write your code below
function addArrayValue(obj, key, val) {
    obj[key] = val;
    return true;
}

var myObj = {};

var myArray = [1, 3];

addArrayValue(myObj, 'myValue', myArray);

console.log(myObj['myValue']); // should print [1, 3]

var myObject2 = {
    color: 'red'
}
addArrayValue(myObj, 'myObject', myObject2);
console.log(myObj['myObject']);