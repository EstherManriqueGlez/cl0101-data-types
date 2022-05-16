const color = require("cli-color");

const types = [
  {
    name: "Boolean",
    description:
      "Boolean represents a logical entity and can have two values: true and false.",
  },
  {
    name: "Null",
    description: "Null type has exactly one value: null.",
  },
  {
    name: "Undefined",
    description:
      "Undefined a variable that has not been assigned a value has the value undefined.",
  },
  {
    name: "Number",
    description:
      "Number stores double-precision 64-bit binary format IEEE 754 value, examples: 3.5, Infinity, 2, 3.41e5",
  },
  {
    name: "BigInt",
    description:
      "The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.",
  },
  {
    name: "NaN",
    description:
      "NaN ('Not a Number') is typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.",
  },
  {
    name: "Sring",
    description:
      "String stores a set of 'elements' of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.",
  },
  {
    name: "Symbol",
    description:
      "Symbol is a unique and immutable primitive value and may be used as the key of an Object property.",
  },
  {
    name: "Objects",
    description:
      "Objects can be seen as a collection of properties, there are two types: Objects and Arrays.",
  },
];

const printDataTypes = () => {
  console.log(color.green("Data Types in JavaScript:"));
  types.map((type) => {
    console.log(
      color.blue("\n\u2022" + type.name) +
        "  " +
        color.bgBlue.underline(type.description)
    );
  });
};

printDataTypes();