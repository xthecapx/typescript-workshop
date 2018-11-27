export const lesson = {
  title: "Arrows Functions",
  description: [
    `On this sections you will learn about the new way to define function with the fat arrow operator "=>".`,
    'Use the class on: ".src/app/demo/components/ES6/02-arroy-functions/02-arrow-functions.component";'
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
  title: "Javascript ES6 functions #2",
  description: ["Create ES6 functions (Parameters)"],
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
  description: ["Create ES6 functions (Returning objects)"],
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
  description: ["Create ES6 functions (Default values)"],
  solution: `const greetingsParamsObject = (greet = "Greetings", name = "traveler") => ({
  sayHi: \`\${greet} \${name}\`
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
  description: ["Create functions using ES6 (Context)", "Keep the browser console open"],
  solution: `* Using bind: 
var pets = {
  names: ['Baron', 'Chief', '18'],
  owner: 'Cristian',
  description: function() {
    return this.names.map(function(pet) {
      return \`\${this.owner} knows an awesome dog named \${pet}.\`
    }.bind(this));
  }
};

* Using context
var pets = {
  names: ['Baron', 'Chief', '18'],
  owner: 'Cristian',
  description: function() {
    return this.names.map(function(pet) {
      return \`\${this.owner} knows an awesome dog named \${pet}.\`
    }, pets);
  }
};

* Using closure
var pets = {
  names: ['Baron', 'Chief', '18'],
  owner: 'Cristian',
  description: function() {
    var sefl = this;

    return this.names.map(function(pet) {
      return \`\${sefl.owner} knows an awesome dog named \${pet}.\`
    });
  }
};
  
*ES6: 
const pets = {
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
  description: ["Create functions using ES6 (Using class)"],
  solution: `* Using clousure
function Prefixer(prefix) {
  this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function(arr) {
  var that = this; // (A)
  return arr.map(function(x) {
    return that.prefix + x;
  });
};

* Using context
function Prefixer(prefix) {
  this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function(arr) {
  return arr.map(function(x) {
    return this.prefix + x;
  }, this); // (A)
};

* Using bind
function Prefixer(prefix) {
  this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function(arr) {
  return arr.map(
    function(x) {
      return this.prefix + x;
    }.bind(this)
  ); // (A)
};

* Using arrow function
function Prefixer(prefix) {
  this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function(arr) {
  return arr.map(x => {
    return this.prefix + x;
  });
};


* Using class (Poetry) !!!!  
class Prefixer {
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
