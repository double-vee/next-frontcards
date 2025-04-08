export const FUNC_DECLARATION = `\
sayHi(); // 'Hi!'
function sayHi() {
  console.log("Hi!");
}\
`;

export const FUNC_EXPRESSION = `\
let sayHi = function() {
  console.log("Hi!");
}
sayHi(); // 'Hi!'\
`;

export const ARROW_OBJ_METHOD = `\
let cat = {
  name: 'Bix',
  sayName() {
    () => console.log(this.name);
  },
  sayNameProperly() {
    console.log(this.name);
  }
}
cat.sayName(); // undefined
cat.sayNameProperly(); // Bix\
`;

export const ARROW_EVENT_HANDLER = `\
btn.addEventListener('click', () => {
  console.log(this); // undefined
})\
`;

export const FOR_IN = `\
let protagonist = {
  name: "Denver",
  genus: "Corythosaurus"
}

for (let key in protagonist) {
  console.log(\`\${key}: \${protagonist[key]}\`);
}\
`;

export const FOR_OF = `\
let series = ["Denver, the Last Dinosaur", "DuckTales"];

for (let title of series) {
  console.log(title);
}\
`;
