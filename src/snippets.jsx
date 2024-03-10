export const FUNC_DECLARATION = `\
sayHi(); //'Hi!'
function sayHi() {
  console.log("Hi!");
}\
`;

export const FUNC_EXPRESSION = `\
let sayHi = function() {
  console.log("Hi!");
}
sayHi(); //'Hi!'\
`;

export const STR_SUBSTRING = `\
"Hello".substring(1); //'ello'
"Hello".substring(0, 2); //'He'
"Hello".substring(2, 0); //'He'
"Hello".substring(-10, 10); //'Hello'\
`;

export const STR_SLICE = `\
"Hello".slice(-4); //'ello'
"Hello".slice(0, 2); //'He'
"Hello".slice(2, 0); //''
"Hello".slice(-10, 10); //'Hello'\
`;

export const STR_SPLIT = `\
"Hello".split(); //['Hello']
"Hello".split("", 3); //['H', 'e', 'l']
"Hello".split(" "); //['Hello']
"Hello, world".split(", "); //['Hello', 'world']\
`;

export const STR_INCLUDES = `\
"Hello".includes("H"); //true
"Hello".includes("H", 2); //false\
`;

export const STR_REPEAT = `\
"hi".repeat(4); //'hihihihi'\
`;

export const STR_SEARCH = `\
"hello world".search(/[A-Z]/); //-1\
`;

export const STR_AT = `\
"Hello".at(1); //'e'
"Hello".at(-1); //'o'\
`;

export const STR_CONCAT = `\
"Hello".concat(", ", "world") //'Hello, world'\
`;

export const ARR_CONCAT = `\
let animals = ["🐋"];
let copy = animals.concat();
let array = copy.concat(["🦑"], true);
console.log(array); //['🐋', '🦑', true]\
`;

export const ARR_SLICE = `\
let array = ["🦑", "🐋", "🦕"];
let copy = array.slice();
copy.slice(1); //['🐋', '🦕']
copy.slice(0, 2); //['🦑', '🐋']\
`;

export const ARR_INCLUDES = `\
["🐋", "🦕"].includes("🦕", -1); //true
[, "🦕"].includes(undefined); //true\
`;

export const ARR_AT = `\
let array = ["🦛", "🐋", "🦕"];
array.at(-1); //'🦕'\
`;

export const ARR_FIND = `\
let array = [8, "🦕", 6];
array.find((el) => el > 4); //8\
`;

export const ARR_FILTER = `\
let array = [8, "🦕", 6];
array.filter((el) => el > 4); //[8, 6]\
`;

export const ARR_MAP = `\
let animals = ["🦛", "🐋"];
let array = animals.map((el) => {
  return el + "🦑";
});
console.log(array); //['🦛🦑', '🐋🦑']\
`;

export const ARR_JOIN = `\
let array = ["🦛", "🐋", "🦕"];
array.join(); //'🦛,🐋,🦕'
array.join(""); //'🦛🐋🦕'
array.join("🦑"); //'🦛🦑🐋🦑🦕'\
`;

export const ARR_REDUCE = `\
let array = [1, 2, 3];
array.reduce((acc, el) => {
  return acc + el;
}, 0); //6\
`;

export const ARR_REVERSE = `\
let array = ["🦛", "🐋", "🦕"];
array.reverse(); //['🦕', '🐋', '🦛']\
`;

export const ARR_SPLICE = `\
let array = ["🦑", "🐋", "🦕"];
array.splice(1);
> ['🐋', '🦕']
console.log(array);
> ['🦑']

let array = ["🦑", "🐋", "🦕"];
array.splice(1, 1);
> ['🐋']
console.log(array);
> ['🦑', '🦕']

let array = ["🦑", "🐋", "🦕"];
array.splice(-2, Infinity, "🐢");
> ['🐋', '🦕']
console.log(array);
> ['🦑', '🐢']\
`;

export const ARR_FILL = `\
let array = ["🦑", "🐋", "🦕"];
array.fill("🐢");
> ['🐢', '🐢', '🐢']
console.log(array);
> ['🐢', '🐢', '🐢']

let array = ["🦑", "🐋", "🦕"];
array.fill("🐢", 1);
> ['🦑', '🐢', '🐢']
console.log(array);
> ['🦑', '🐢', '🐢']

let array = ["🦑", "🐋", "🦕"];
array.fill("🐢", 1, 2);
> ['🦑', '🐢', '🦕']
console.log(array);
> ['🦑', '🐢', '🦕']\
`;
