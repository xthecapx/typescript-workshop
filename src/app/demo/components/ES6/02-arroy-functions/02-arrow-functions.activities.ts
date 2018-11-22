export const lesson = {
  title: "Javascript Typing",
  description: [
    `we need to be able to work with some of the simplest units of data: numbers, 
strings, structures, boolean values, and the like.`
  ],
  showContent: false,
  showResult: false
};

export const activity1 = {
  title: "Javascript functions #1",
  description: ["Create functions using ES6"],
  solution: `const sayHi = () => "Greeting";`,
  steps: [
    {
      step: `Step 1: Rewrite the following function with ES6`,
      code: `function sayHi() {
  return 'Greeting' ;
}`
    },
    {
      step: `Step 2: Hit the button to see the greet`,
      code: `Do you see the greet?`
    }
  ]
};

export const activity2 = {
  title: "Javascript functions #2",
  description: ["Create functions using ES6"],
  solution: `const greetings = name => \`hello \${name}\`;`,
  steps: [
    {
      step: `Step 1: Rewrite the following function with ES6`,
      code: `function greetings(name) {
  return "hello " + name;
}`
    },
    {
      step: `Step 2: Hit the button to see the greet`,
      code: `Do you see the greet?`
    }
  ]
};

export const activity3 = {
  title: "Javascript functions #3",
  description: ["Create functions using ES6"],
  solution: `const greetingsObject = name => ({ sayHi: \`hello \${name}\` });`,
  steps: [
    {
      step: `Step 1: Rewrite the following function with ES6`,
      code: `function greetingsObject(name) {
  return { sayHi: "hello " + name };
}`
    },
    {
      step: `Step 2: Hit the button to see the greet`,
      code: `Do you see the greet object?`
    }
  ]
};

export const activity4 = {
  title: "Javascript functions #4",
  description: ["Create functions using ES6"],
  solution: `const greetingsParamsObject = (greet, name) => ({
  sayHi: \`\${greet} ${name}\`
});`,
  steps: [
    {
      step: `Step 1: Rewrite the following function with ES6`,
      code: `function greetingsParamsObject(greet, name) {
  var NAME = name ? name : 'traveler';
  var GREET = greet ? greet : 'Greetings';

  return { sayHi: GREET + NAME };
}`
    },
    {
      step: `Step 2: Hit the button to see the greet`,
      code: `Do you see the greet object?`
    }
  ]
};

export const activity5 = {
  title: "Javascript functions #5",
  description: ["Create functions using ES6"],
  solution: `const pets = {
  names: ["Baron", "Chief", "18"],
  owner: "Cristian",
  description: function() {
    return this.names.map(pet => {
      return \`\${this.owner} knows an awesome dog named \${pet}.\`;
    });
  }
};`,
  steps: [
    {
      step: `Step 1: Solve the problem with this function`,
      code: `var pets = {
  names: ['Baron', 'Chief', '18'],
  owner: 'Cristian',
  description: function() {
    return this.names.map(function(pet){
      return \`\${this.owner} knows an awesome dog named \${pet}.\`
    });
  }
};`
    },
    {
      step: `Step 2: Hit the button to see the description`,
      code: `Do you see the description?`
    }
  ]
};

export const activity6 = {
  title: "Javascript functions the final challenge",
  description: ["Create functions using ES6"],
  solution: `class Prefixer {
  constructor(private prefix) {}

  prefixArray(arr) {
    return arr.map(x => this.prefix + x);
  }
}`,
  steps: [
    {
      step: `Step 1: Solve the problem with this function`,
      code: `function Prefixer(prefix) {
  this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function(arr) {
  // (A)
  "use strict";
  return arr.map(function(x) {
    // (B)
    // Doesn’t work:
    return this.prefix + x; // (C)
  });
};`
    },
    {
      step: `Step 2: Hit the button to see the prefixArray`,
      code: `Do you see the prefixArray?`
    }
  ]
};
