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
"Hello".split(""); //['H', 'e', 'l', 'l', 'o']
"Hello".split("", 3); //['H', 'e', 'l']
"Hello world".split(" "); //['Hello', 'world']\
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
"Hello".concat(" world") //'Hello world'\
`;
