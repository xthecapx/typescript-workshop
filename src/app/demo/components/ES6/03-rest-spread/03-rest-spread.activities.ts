export const lesson = {
  title: "Destructing/Rest operator",
  description: [`On this section you will learn the new dot operator "..."`],
  showContent: false,
  showResult: false
};

export const activity1 = {
  title: "Destructing objects #1",
  description: ["Destructuring objects"],
  solution: `const obj1 = { a: 1, b: 2, c: 3, d: 4 };
ES5: 
var a = obj1.a;
var b = obj1.b;
var c = obj1.c;
var d = obj1.d;

ES6:
const { a, b, c, d } = obj1;`,
  steps: [
    {
      step: `Step 1: Create variables with each property of the following object`,
      code: `var obj1 = { a: 1, b: 2, c: 3, d: 4 };`
    },
    {
      step: `Step 2: Hit the button, did you see the same result?`,
      code: `Answer = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4
}`
    }
  ]
};

export const activity2 = {
  title: "Creating objects #2",
  description: ["Create an object where the key and value match"],
  solution: `ES5:
var obj1 = { a: a, b: b, c: c, d: d };

ES6:
const obj1 = { a, b, c, d };`,
  steps: [
    {
      step: `Step 1: We want to create a new object where obj.a = 1; obj.b = 2; ...`,
      code: `var a = 1, b = 2, c = 3, d = 4;`
    },
    {
      step: `Step 2: Hit the button, did you see the same result?`,
      code: `Answer = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4
}`
    }
  ]
};

export const activity3 = {
  title: "Javascript arrays #3",
  description: ["Create new variables for each element on an array"],
  solution: `ES5:
var a = iterable[0];
var b = iterable[1];

ES6:
const [a, b] = iterable;`,
  steps: [
    {
      step: `Step 1: Create a new variable for each element of the following array`,
      code: `var iterable = ["a", "b"];`
    },
    {
      step: `Step 2: Hit the button, did you see the same result?`,
      code: `Answer = { a: "a", b: "b" };`
    }
  ]
};

export const activity4 = {
  title: "Javascript arrays #4",
  description: ["Find the greatest value in an array"],
  solution: `ES5:
var maxOfArray = Math.max.apply(Math, array);

ES6:
const maxOfArray = Math.max(...array);`,
  steps: [
    {
      step: `Step 1: Find the greatest value of the following array`,
      code: `const array = [1, 20, 3, 5, -2];`
    },
    {
      step: `Step 2: Hit the button to see the greet`,
      code: `Answer = 20`
    }
  ]
};

export const activity5 = {
  title: "Javascript arrays #5",
  description: ["Apped data to an array"],
  solution: `ES5:
newArray.push.apply(newArray, numbersE);

ES6:
newArray.push(...numbersE);`,
  steps: [
    {
      step: `Step 1: Append appendMe array in to the newArray`,
      code: `let appendMe = [1, 2, 3];
let newArray = [55, 20];`
    },
    {
      step: `Step 2: Hit the button to see the greet`,
      code: `Answer = [55, 20, 1, 2, 3]`
    }
  ]
};

export const activity6 = {
  title: "Javascript functions #6",
  description: ["Create alias when destructuring arrays"],
  solution: `ES5:
const obj = getAddres();
const c = obj.city;
const s = obj.state;
const z = obj.zip;
  
ES6:
let { city: c, state: s, zip: z } = getAddress();`,
  steps: [
    {
      step: `Step 1: Create variables named c, s, z for each property of the object returned by the getAddress method`,
      code: `const getAddress = () => {
  return {
    city: "city",
    state: "state",
    zip: "zip"
  };
};`
    },
    {
      step: `Step 2: Hit the button to run the code`,
      code: `Answer = {
  "c": "city",
  "s": "state",
  "z": "zip"
}`
    }
  ]
};

export const activity7 = {
  title: "Destructiring in practice #7",
  description: [
    "Create a method and pass args, args2 as parameters. return the name an age in a single array. the default value for age parameter is 20"
  ],
  solution: `ES5;
function myName (obj) {
  var age = obj.age ? obj.age : 20;

  return obj.name + age;
}

ES6:
const myName = ({ name, age = 20 }) => {
  return name + age;
};`,
  steps: [
    {
      step: `Step 1: Create a function an pass the following objs as arguments`,
      code: `const args = { name: "Cristian", age: 29 };
const args2 = { name: "Aura" };`
    },
    {
      step: `Step 2: Hit the button and verify the answer`,
      code: `Answer: {
  "args": "Cristian29",
  "args2": "Aura20"
} `
    }
  ]
};

export const activity8 = {
  title: "Destructiring in practice #8",
  description: [
    "Create a function to return the number of arguments but not the first"
  ],
  solution: `ES5;
function listAnimals() {
  var animals = Array.prototype.slice.call(arguments, 1);

  animals.forEach(function(animal) {
    console.log(animal);
  });

  return arguments[0] + animals.length;
}

ES6:
const listAnimals = (a, ...rest) => {
  rest.forEach(animal => console.log(animal));
  return a + rest.length;
};`,
  steps: [
    {
      step: `Step 1: Add the following code inside the excersieEigth method`,
      code: `this.results8 = listAnimals(
  "The total of animals is: ",
  "🐯",
  "🐰",
  "🐘",
  "🐴",
  "🐥"
);`
    },
    {
      step: `Step 2: Created the required method before it's call`,
      code: `Create a function to return the number of arguments but not the first`
    },
    {
      step: "Click the button and verify the answer",
      code: `"The total of animals is: 5"`
    }
  ]
};
