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
  title: "Boolean, Number and String",
  description: ["Typing the basic"],
  solution: `let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";`,
  steps: [
    {
      step: `Step 1: Add typing to the following variables defined inside expectedOne method`,
      code: `let myName, 
    myAge, 
    hasHobbies;
      
myName = 'Cristian Marquez';
myAge = 29;
hasHobbies = true;

this.results1 = {
  name: myName,
  age: myAge,
  hasHobbies: hasHobbies
}`
    },
    {
      step: `Step 2: Hit the button to see the results`,
      code: `You should see the object`
    }
  ]
};

export const activity2 = {
  title: "Arrays and Tuples",
  description: ["Type arrays and tuples"],
  solution: `let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error`,
  steps: [
    {
      step: `Step 1: Add typing to the following variables defined inside expectedTwo method`,
      code: `let arrayNumbers, 
    arrayStrings, 
    oneNumberOneString;
        
  arrayNumbers = [2, 0, 1, 8];
  arrayStrings = ['Cristian', 'Marquez'];
  oneNumberOneString = ['Happy', 2018];
  
  this.results2 = {
    arrayNumbers: arrayNumbers,
    arrayStrings: arrayStrings,
    oneNumberOneString: oneNumberOneString
  }`
    },
    {
      step: `Step 2: Hit the button to see the results`,
      code: `You should see the object`
    }
  ]
};

export const activity3 = {
  title: "Enums",
  description: ["Creates enums and understand any"],
  solution: `enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;`,
  steps: [
    {
      step: `Step 1: Replace the colors object with a Enum`,
      code: `const Colors = {
  Red: 100,
  Green: 101,
  Blue: 102,
  100: "Red",
  101: "Green",
  102: "Blue"
};

this.results3 = {
  red: Colors.Red === 100,
  green: Colors.Green === 101,
  blue: Colors.Blue === 102,
  nameOf100Color: Colors[100] === "Red",
  nameOf101Color: Colors[101] === "Green",
  nameOf102Color: Colors[102] === "Blue"
};`
    },
    {
      step: `Step 2: Hit the button to see the results`,
      code: `Make sure all the properties are true`
    }
  ]
};
export const activity4 = {
  title: "Any, Void, Null and Undefined",
  description: ["Understanding any and void"],
  solution: `let notSure: any;
let list: any[];
let u: undefined;
let n: null;

void is a little like the opposite of any: the absence of having any type at all. 
You may commonly see this as the return type of functions that do not return a value.

Declaring variables of type void is not useful because you can 
only assign undefined or null to them.
`,
  steps: [
    {
      step: `Step 1: Add typing to the following variables defined inside expectedFour method`,
      code: `let notSure = 4;
let u = undefined;
let n = null;

notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let unusable: void;

this.results4 = {
  notSure: notSure,
  u: u,
  n: n 
};`
    },
    {
      step: `Step 2: Hit the button to see the results`,
      code: `You should see the object`
    },
    {
      step: `Step 3: Why the variable 'unusable' is unusuable`,
      code: `Check the help bottom to see the answer`
    }
  ]
};

export const activity5 = {
  title: "Objects",
  description: ["Typing objects"],
  solution: `interface BooleanObjectMap {
  [propertie: string]: boolean;
}

public results1: { name: string; age: number; hasHobbies: boolean };
public results2: {
  arrayNumbers: number[];
  arrayStrings: Array<string>;
  oneNumberOneString: [string, number];
};
public results3: BooleanObjectMap;
public results4: {
  notSure: any;
  u: undefined;
  n: null;
};
public results6: string;
public results8: boolean;`,
  steps: [
    {
      step: `Step 1: Add type to all the results variable in the TypeComponent class`,
      code: `For the enum part you will need create a new interface`
    }
  ]
};

export const activity6 = {
  title: "Functions",
  description: ["Typing functions"],
  solution: `// { arr: [ 1, 2 ], obj: { i: 1 } }
const does allow variable mutation (only objects/arrays are mutable in JS)`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedSix method`,
      code: `function multiply(v1, v2) {
  return v1 * v2;
}

let myMultiply;

myMultiply = multiply;
this.results6 = \`Happy \$\{myMultiply(2, 1009)\}\`;`
    },
    {
      step: `Step 2: Add typing to the function`,
      code: ``
    },
    {
      step: `Step 3: Hit the button to see the message`,
      code: `Do you see Happy 2018?`
    }
  ]
};

export const activity7 = {
  title: "Final exercise",
  description: ["Everything in place"],
  solution: `interface BankAccount {
  money: number;
  deposit: (val: number) => void;
}

interface MySelfAccount {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[];
}`,
  steps: [
    {
      step: `Step 1: Add the following code inside the expectedSeven method`,
      code: `let bankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself = {
  name: "Cristian Marquez",
  bankAccount: bankAccount,
  hobbies: ["Gaming", "Skateboard"]
};`
    },
    {
      step: `Step 2: Create an interface to type the complex object`,
      code: ``
    }
  ]
};
