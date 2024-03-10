export const FUNC_DECLARATION = `\
sayHi(); //Hi!
function sayHi() {
  console.log('Hi!');
}\
`;

export const FUNC_EXPRESSION = `\
let sayHi = function() {
  console.log('Hi!');
}
sayHi(); //Hi!\
`;

export const SUBSTRING = `\
"Hello".substring(1); //ello
"Hello".substring(0, 2); //He
"Hello".substring(2, 0); //He
"Hello".substring(-10, 10); //Hello\
`;

export const AT = `\
let animals = ["🦛", "🐋", "🦕"];
animals.at(-1); //'🦕'\
`;
