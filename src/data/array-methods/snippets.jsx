export const ARR_CONCAT = `\
let animals = ["🐋"];
let copy = animals.concat();
let array = copy.concat(["🦑"], true);
console.log(array); // ['🐋', '🦑', true]\
`;

export const ARR_SLICE = `\
let array = ["🦑", "🐋", "🦕"];
let copy = array.slice();
copy.slice(1); // ['🐋', '🦕']
copy.slice(0, 2); // ['🦑', '🐋']\
`;

export const ARR_INCLUDES = `\
["🐋", "🦕"].includes("🦕", -1); // true
[, "🦕"].includes(undefined); // true\
`;

export const ARR_AT = `\
let array = ["🦛", "🐋", "🦕"];
array.at(-1); // '🦕'\
`;

export const ARR_FIND = `\
let array = [8, "🦕", 6];
array.find((el) => el > 4); // 8\
`;

export const ARR_FINDLAST = `\
let array = [8, "🦕", 6];
array.findLast((el) => el > 4); // 6\
`;

export const ARR_FILTER = `\
let array = [8, "🦕", 6];
array.filter((el) => el > 4); // [8, 6]\
`;

export const ARR_SOME = `\
let array = [8, "🦕", 6];
array.some((el) => el > 4); // true\
`;

export const ARR_EVERY = `\
let array = [8, "🦕", 6];
array.every((el) => el > 4); // false\
`;

export const ARR_MAP = `\
let animals = ["🦛", "🐋"];
let array = animals.map((el) => {
  return el + "🦑";
});
console.log(array); // ['🦛🦑', '🐋🦑']\
`;

export const ARR_JOIN = `\
let array = ["🦛", "🐋", "🦕"];
array.join(); // '🦛,🐋,🦕'
array.join(""); // '🦛🐋🦕'
array.join("🦑"); // '🦛🦑🐋🦑🦕'\
`;

export const ARR_REDUCE = `\
let array = [1, 2, 3];
array.reduce((acc, el) => {
  return acc + el;
}, 0); // 6\
`;

export const ARR_POP = `\
let array = ["🦛", "🐋", "🦕"];
array.pop(); // '🦕'
console.log(array); // ["🦛", "🐋"]\
`;

export const ARR_PUSH = `\
let array = ["🦛", "🦕"];
array.push("🦑"); // 3
console.log(array); // ['🦛', '🦕', '🦑']\
`;

export const ARR_SHIFT = `\
let array = ["🦛", "🐋", "🦕"];
array.shift(); // '🦛'
console.log(array); // ["🐋", "🦕"]\
`;

export const ARR_UNSHIFT = `\
let array = ["🦛", "🦕"];
array.unshift("🦑"); // 3
console.log(array); // ['🦑', '🦛', '🦕']\
`;

export const ARR_SORT = `\
let array = [6, 12, 4];
array.sort(); // [12, 4, 6]
array.sort((a, b) => a - b); // [4, 6, 12]
array.sort((a, b) => b - a); // [12, 6, 4]
console.log(array); // [12, 6, 4]\
`;

export const ARR_REVERSE = `\
let array = ["🦛", "🐋", "🦕"];
array.reverse(); // ['🦕', '🐋', '🦛']
console.log(array) // ['🦕', '🐋', '🦛']\
`;

export const ARR_SPLICE = `\
let array = ["🦑", "🐋", "🦕"];
array.splice(1); // ['🐋', '🦕']
console.log(array); // ['🦑']

let array = ["🦑", "🐋", "🦕"];
array.splice(1, 1); // ['🐋']
console.log(array); // ['🦑', '🦕']

let array = ["🦑", "🐋", "🦕"];
array.splice(-2, Infinity, "🐢"); // ['🐋', '🦕']
console.log(array); // ['🦑', '🐢']\
`;

export const ARR_FILL = `\
let array = ["🦑", "🐋", "🦕"];
array.fill("🐢"); // ['🐢', '🐢', '🐢']
console.log(array); // ['🐢', '🐢', '🐢']

let array = ["🦑", "🐋", "🦕"];
array.fill("🐢", 1); // ['🦑', '🐢', '🐢']
console.log(array); // ['🦑', '🐢', '🐢']

let array = ["🦑", "🐋", "🦕"];
array.fill("🐢", 1, 2); // ['🦑', '🐢', '🦕']
console.log(array); // ['🦑', '🐢', '🦕']\
`;

export const ARR_COPYWITHIN = `\
let array = ["🦑", "🐋", "🦕"];
array.copyWithin(0, 1); // ['🐋', '🦕', '🦕']
console.log(array); // ['🐋', '🦕', '🦕']

let array = ["🦑", "🐋", "🦕"];
array.copyWithin(0, 1, 2); // ['🐋', '🐋', '🦕']
console.log(array); // ['🐋', '🐋', '🦕']\
`;
