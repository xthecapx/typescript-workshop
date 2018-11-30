export const lesson = {
  title: "Poetry: Funcional programming",
  description: [
    `Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data — Wikipedia`,
    'User the class on: "./src/app/demo/components/ES6/04-functional-programming/04-functional-programming.component.ts";'
  ],
  showContent: false,
  showResult: false
};

export const activity1 = {
  title: "Pure function #1",
  description: [
    "How do we know if a function is pure or not?",
    "1) It returns the same result if given the same arguments (it is also referred as deterministic)"
  ],
  solution: `const PI_VALUE = 3.14;

function calculateArea(radius, pi) {
  return radius * radius * pi;
}

// Passing the PI value to the function will prevent two differents answer.
calculateArea(10, PI_VALUE);`,
  steps: [
    {
      step: `Step 1: Transform the calculateArea function into a pure function`,
      code: `const PI = 3.14;

function calculateArea(radius) {
  return radius * radius * PI;
}`
    },
    {
      step: `Step 2: Run the code with calculateArea(10)`,
      code: "Remember this value"
    },
    {
      step: `Step 3: Change PI_VALUE to 42 and run the code with calculateArea(10)`,
      code: " Why is this an impure function?"
    }
  ]
};

export const activity2 = {
  title: "Pure function #2",
  description: ["How do we know if a function is pure or not?", "2) It does not cause any observable side effects"],
  solution: `let counter = 1;

// Prevent the mutation of counter inside the function 
function increaseCounter(value) {
  return value + 1;
}

increaseCounter(counter);`,
  steps: [
    {
      step: `Step 1: Hit the button and verify counter variable mutate`,
      code: `{
  "fn": 2,
  "counter": 2
}`
    },
    {
      step: `Step 2: Change the implematation of increaseCounter to prevent the counter mutation`,
      code: `Answer = {
  "fn": 2,
  "counter": 1
}`
    }
  ]
};

export const activity3 = {
  title: "Immutability #3",
  description: [
    "Unchanging over time or unable to be changed.",
    "We can use reduce to implement this function. We will cover this in the Higher Order Functions topic."
  ],
  solution: `let list = [1, 2, 3, 4, 5];
let accumulator = 0;

function sum(list, accumulator) {
  // return after list has no values
  if (list.length == 0) {
    return accumulator;
  }

  // calling itself and passing the new value
  return sum(list.slice(1), accumulator + list[0]);
}

this.results3 = { fn: sum(values, sumOfValues), values, sumOfValues };`,
  steps: [
    {
      step: `Step 1: Hit the button and verify that sumOfValues mutate`,
      code: `{
  "sumOfValues": 15,
  "values": [1, 2, 3, 4, 5]
}`
    },
    {
      step: `Step 2: User recursion to prevent the sumOfValues mutation`,
      code: `{
  "fn": 15,
  "values": [1, 2, 3, 4, 5],
  "sumOfValues": 0
}`
    }
  ]
};

export const activity4 = {
  title: "Function composition or function chaining #4",
  description: ["Transform the string input into a url slug"],
  solution: `* The algorithm:

1) toLowerCase: converts the string to all lower case
2) trim: removes whitespace from both ends of a string
3) split and join: replaces all instances of match with replacement in a given string
  
* Solution:
let string = " I will be a url slug   ";

function slugify(string) {
  return string
    .toLowerCase()
    .trim()
    .split(" ")
    .join("-");
}

this.results4 = slugify(string);`,
  steps: [
    {
      step: `Step 1: Given " I will be a url slug   ", transform the string input into a url slug`,
      code: `"i-will-be-a-url-slug"`
    },
    {
      step: "Step 2: The algorithm you need to implement is the following",
      code: `1) toLowerCase: converts the string to all lower case
2) trim: removes whitespace from both ends of a string
3) split and join: replaces all instances of match with replacement in a given string`
    }
  ]
};

export const activity5 = {
  title: "Referential transparency #5",
  description: ["pure functions + immutable data = referential transparency"],
  solution: `function sum(a, b) {
  return a + b;
}

// this expression will always result in 16. 
// We can replace the entire expression with a numerical constant and memoize it.
this.results5 = sum(3, 13);`,
  steps: [
    {
      step: `Step 1: Run the code`,
      code: `Remember the value`
    },
    {
      step: `Step 2: Replace sum(5, 8) with 13`,
      code: `The sum(5, 8) equals 13. This function will always result in 13.

sum(3, 13);
// this expression will always result in 16. 
// We can replace the entire expression with a numerical constant and memoize it.`
    }
  ]
};

export const activity6 = {
  title: "Functions as first-class entities #6",
  description: [
    "Functions as first-class entities can:",
    "1) refer to it from constants and variables",
    "2) pass it as a parameter to other functions",
    "3) return it as result from other functions"
  ],
  solution: `function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function doubleOperator(f, a, b) {
  return f(a, b) * 2;
}

this.results6 = { sum: doubleOperator(sum, 3, 1), subs: doubleOperator(subtraction, 3, 1)};`,
  steps: [
    {
      step: `Step 1: You have the following function`,
      code: `function doubleSum(a, b) {
  return (a + b) * 2;
}`
    },
    {
      step: `Step 2: There is another similar function `,
      code: `function doubleSubtraction(a, b) {
  return (a - b) * 2;
}`
    },
    {
      step: `Step 3: Write to new functions`,
      code: `function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}`
    },
    {
      step: `Step 4: Now create a double operator function and update the logged value`,
      code: `function doubleOperator(f, a, b) {
  return f(a, b) * 2;
}

this.results6 = { sum: doubleOperator(sum, 3, 1), subs: doubleOperator(subtraction, 3, 1)};`
    }
  ]
};

export const activity7 = {
  title: "Higher-order functions (filter) #7",
  description: ["Given a collection, we want to filter by an attribute"],
  solution: `* Imperative approach:
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}

this.results7 = evenNumbers;

* Poetry:
function even(number) {
  return number % 2 == 0;
}

let listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
this.results7 = listOfNumbers.filter(even);`,
  steps: [
    {
      step: `Step 1: Transform the imperative approach into poetry`,
      code: `for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}`
    },
    {
      step: `Step 2: Create a pure function to find the even numbers`,
      code: `function even(number) {
  return number % 2 == 0;
}`
    },
    {
      step: `Step 3: Filter the numbers passing the function`,
      code: `numbers.filter(even);`
    }
  ]
};

export const activity8 = {
  title: "Higher-order functions (filter) #8",
  description: [
    "Filter the given array of integers [10, 9, 8, 2, 7, 5, 1, 3, 0] and output only those values that are less than a specified value X"
  ],
  solution: `function smaller(number) {
  return number < this;
}

function filterArray(x, listOfNumbers) {
  return listOfNumbers.filter(smaller, x);
}

let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];

this.results8 = filterArray(3, numbers); // [2, 1, 0]`,
  steps: [
    {
      step: `Step 1: Transform the imperative approach into poetry`,
      code: `var filterArray = function(x, coll) {
  var resultArray = [];

  for (var i = 0; i < coll.length; i++) {
    if (coll[i] < x) {
      resultArray.push(coll[i]);
    }
  }

  return resultArray;
};`
    },
    {
      step: `Step 2: Create a smaller function`,
      code: `function smaller(number) {
  return number < this;
}`
    },
    {
      step: "Step 3: Create a filterArray function",
      code: `function filterArray(x, listOfNumbers) {
  return listOfNumbers.filter(smaller, x);
}`
    },
    {
      step: "Step 4: Filter the array using the functions",
      code: `this.results8 = filterArray(3, numbers);`
    }
  ]
};

export const activity9 = {
  title: "Higher-order functions (filter) #9",
  description: ["Filter the people who are more than 21 years old"],
  solution: `function olderThan21(person) {
  return person.age > 21;
}

function overAge(people) {
  return people.filter(olderThan21);
}

this.results9 = overAge(people); // [{ name: 'TK', age: 26 }, { name: 'Kazumi', age: 30 }]`,
  steps: [
    {
      step: `Step 1: Given the following collection of people, find the people with more than 21 years old`,
      code: `let people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 }
];`
    },
    {
      step: `Step 2: Write the function olderThan21`,
      code: `function olderThan21(person) {
  return person.age > 21;
}`
    },
    {
      step: `Step 3: Write the function overAge`,
      code: `function overAge(people) {
  return people.filter(olderThan21);
}`
    },
    {
      step: "Step 4: Filter people using the functions",
      code: `this.results9 = overAge(people);`
    }
  ]
};

export const activity10 = {
  title: "Higher-order functions (map) #10",
  description: [
    "The map method transforms a collection by applying a function to all of its elements and building a new collection from the returned values.",
    "We just want a list of strings, something like TK is 26 years old. So the final string might be :name is :age years old where :name and :age are attributes from each element in the people collection."
  ],
  solution: `function makeSentence(person) {
  return \`\${person.name} is \${person.age} years old\`;
}

function peopleSentences(people) {
  return people.map(makeSentence);
}

// ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']
this.results10 = peopleSentences(people);`,
  steps: [
    {
      step: `Step 1: Given the following collection of people, find the people with more than 21 years old`,
      code: `let people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 }
];`
    },
    {
      step: `Step 2: Write the function makeSentence`,
      code: `function makeSentence(person) {
  return \`\${person.name} is \${person.age} years old\`;
}`
    },
    {
      step: `Step 3: Write the function peopleSentences`,
      code: `function peopleSentences(people) {
  return people.map(makeSentence);
}`
    },
    {
      step: "Step 4: Filter people using the functions",
      code: `this.results10 = peopleSentences(people);`
    }
  ]
};

export const activity11 = {
  title: "Higher-order functions (map) #11",
  description: [
    "The map method transforms a collection by applying a function to all of its elements and building a new collection from the returned values.",
    "Find the absolute value of the numbers inside the following array [1, 2, 3, -4, 5]"
  ],
  solution: `let values = [1, 2, 3, -4, 5];

function updateListMap(values) {
  return values.map(Math.abs);
}

this.results11 = updateListMap(values); // [1, 2, 3, 4, 5]`,
  steps: [
    {
      step: `Step 1: Given the following array of numbers, find the absolute value of the numbers`,
      code: `let values = [1, 2, 3, -4, 5];`
    },
    {
      step: `Step 2: Write the function updateListMap`,
      code: `function updateListMap(values) {
  return values.map(Math.abs);
}`
    },
    {
      step: "Step 3: Find the absolute value using the function",
      code: `this.results11 = updateListMap(values);`
    }
  ]
};

export const activity12 = {
  title: "Higher-order functions (reduce) #12",
  description: [
    "The idea of reduce is to receive a function and a collection, and return a value created by combining the items.",
    "Get the total amount of an order"
  ],
  solution: `* Solution 1: 
let shoppingCart = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];

const sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart.reduce(sumAmount, 0);
}

getTotalAmount(shoppingCart); // 120

* Solution 2:
const getAmount = (order) => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart
    .map(getAmount)
    .reduce(sumAmount, 0);
}

getTotalAmount(shoppingCart); // 120`,
  steps: [
    {
      step: `Step 1: Given the following collection of orders, find the total amount`,
      code: `var orders = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];`
    },
    {
      step: `Step 2: Write the function sumAmount`,
      code: `const sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;`
    },
    {
      step: `Step 3: Write the function getTotalAmount`,
      code: `function getTotalAmount(shoppingCart) {
  return shoppingCart.reduce(sumAmount, 0);
}`
    },
    {
      step: "Step 4: Find the total amount using the function",
      code: `this.results12 = getTotalAmount(shoppingCart);`
    }
  ]
};

export const activity13 = {
  title: "Higher-order functions (find) #10",
  description: [
    "This function is used to find something inside a collection.",
    "We want the total amount of all books in our shopping cart."
  ],
  solution: `let shoppingCart = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
]

const byBooks = (order) => order.type == "books";
const getAmount = (order) => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount, 0);
}

this.results13 = getTotalAmount(shoppingCart); // 70`,
  steps: [
    {
      step: `Step 1: Given the following collection of a shopping card, find the total amount of all books`,
      code: `let shoppingCart = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
];`
    },
    {
      step: `Step 2: Write the function byBooks`,
      code: `const byBooks = (order) => order.type == "books";`
    },
    {
      step: `Step 3: Write the function getAmount`,
      code: `const getAmount = (order) => order.amount;`
    },
    {
      step: `Step 4: Write the function sumAmount`,
      code: `const sumAmount = (acc, amount) => acc + amount;`
    },
    {
      step: `Step 5: Write the function getTotalAmount`,
      code: `function getTotalAmount(shoppingCart) {
  return shoppingCart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount, 0);
}`
    },
    {
      step: "Step 4: Filter people using the functions",
      code: `this.results13 = getTotalAmount(shoppingCart);`
    }
  ]
};
