export const lesson = {
  title: "ES6 Variables",
  description: [`Let's start by the beginning.`],
  showContent: false,
  showResult: false
};

export const activity1 = {
  title: "STEP 1: Variable declarations",
  description: ["Using var."],
  solution: `// 'outside'.
var x outside the function was overwritten by x inside the function 
because we specify that x was to be scoped only to foo`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedOne method`,
      code: `var x = "outside";

function foo() {
  var x = "inside";
}

foo();
this.results1 = x;`
    },
    {
      step: `Step 2: Hit the button to see the answer`,
      code: `What should be the output?`
    }
  ]
};

export const activity2 = {
  title: "STEP 2: Variable declarations",
  description: ["Using var."],
  solution: `// 'inside'.
variable x outside the function was overwritten by variable x inside the function 
because we didn’t specify that x was to be scoped only to foo`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedTwo method`,
      code: `var x = "outside";

function foo() {
  x = "inside";
}

foo();
this.results2 = x;`
    },
    {
      step: `Step 2: Hit the button to see the answer`,
      code: `What should be the output?`
    }
  ]
};

export const activity3 = {
  title: "STEP 3: var scope",
  description: ["Understanding the scope of var"],
  solution: `// 1.
var’s are not block-scoped: scope is not limited to the block it was defined in.`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedThree method`,
      code: `var i = 0
if (true) {
  var i = 1;
}
this.results3 = i;`
    },
    {
      step: `Step 2: Hit the button to see the answer`,
      code: `What should be the output?`
    }
  ]
};

export const activity4 = {
  title: "STEP 4: let",
  description: ["Understanding let variables"],
  solution: `// 'outside'.
let variables are block-scoped!`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedFour method`,
      code: `let i = 'outside'
if (true) {
  let i = 'inside';
}
this.results4 = i;`
    },
    {
      step: `Step 2: Hit the button to see the answer`,
      code: `What should be the output?`
    }
  ]
};

export const activity5 = {
  title: "STEP 5: const",
  description: ["Understanding const variables"],
  solution: `A1: // TypeError: Assignment to constant variable.
A2: // SyntaxError: Missing initializer in const declaration
const restricts over-writing variables.
const variables are block-scoped!`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedFive method`,
      code: `const i = 0;
i = 1;
const j;`
    },
    {
      step: `Step 2: Hit the button to see the answer`,
      code: `Do we have any error?`
    },
    {
      step: `Step 3: Comment out the errors or fix the problems to continue`,
      code: `const i = 0;
//i = 1;
//const j;`
    }
  ]
};

export const activity6 = {
  title: "STEP 6: const",
  description: ["Understanding const mutation"],
  solution: `// { arr: [ 1, 2 ], obj: { i: 1 } }
const does allow variable mutation (only objects/arrays are mutable in JS)`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedSix method`,
      code: `const a = [1];
const b = a;
console.log('Exercise 6: a === b ', a === b); // true

b.push(2);
console.log('Exercise 6: a === b ', a === b); // true

const obj = {};
obj['i'] = 1;
console.log('Exercise 6: obj ', obj);
this.results6 = { arr: a, obj: obj };`
    },
    {
      step: `Step 2: Hit the button to see the answer`,
      code: `Do we have any error?`
    }
  ]
};

export const activity7 = {
  title: "STEP 7: const/let hoisting",
  description: ["Understanding const/let hoisting"],
  solution: `// A: undefined
// A: Uncaught ReferenceError: b is not defined
// B: Uncaught ReferenceError: c is not defined
const does allow variable mutation (only objects/arrays are mutable in JS)`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedSeven method`,
      code: `console.log('Exercise 7, a: ', a);
var a = 2;
console.log('Exercise 7, b: ', b); 
console.log('Exercise 7, c: ', c);
let c = 2;`
    },
    {
      step: `Step 2: Hit the button to see the answer`,
      code: `Do we have any error?`
    },
    {
      step: `Step 3: Comment out the errors or fix the problems to continue`,
      code: `console.log('Exercise 7, a: ', a);
var a = 2;
console.log('Exercise 7, b: ', b); 
console.log('Exercise 7, c: ', c);
let c = 2;`
    }
  ]
};

export const activity8 = {
  title: "STEP 8: hoisting bugs",
  description: ["Understanding why is ok to write code in order"],
  solution: `The issue is that five isn’t assigned till after it’s referenced. 
It was declared so when it is referenced in the return statement, 
its value is undefined.

!(4 - undefined) === !(NaN) === true

with const, // ReferenceError: five is not defined`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedEight method`,
      code: `function isEqualTo5(n) {
  return !(n - five);
  var five = 5;
}
this.results8 = isEqualTo5(4);`
    },
    {
      step: `Step 2: Hit the button to see the answer`,
      code: `What should be the output? What's the error?`
    },
    {
      step: `Step 3: Change var to const`,
      code: `function isEqualTo5(n) {
  return !(n - five);
  const five = 5;
}
this.results8 = isEqualTo5(4);`
    }
  ]
};
