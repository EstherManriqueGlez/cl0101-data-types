const printDataTypes = () => {

  return console.log(`Data types in JavaScript:\n\u2022 Boolean represents a logical entity and can have two values: true and false.\n\u2022 Null type has exactly one value: null.\n\u2022 Undefined a variable that has not been assigned a value has the value undefined.\n\u2022 Number stores double-precision 64-bit binary format IEEE 754 value, examples: 3.5, Infinity, 2, 3.41e5\n\u2022 The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.\n\u2022 NaN ("Not a Number") is typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.\n\u2022 String stores a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.\n\u2022 Symbol is a unique and immutable primitive value and may be used as the key of an Object property.\n\u2022 Objects can be seen as a collection of properties, there are two types: Objects and Arrays.`);
}

printDataTypes();