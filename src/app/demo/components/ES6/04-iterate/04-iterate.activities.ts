export const lesson = {
  title: "Looping with javascript",
  description: [
    `On this sections you will understand how to loop with Javascript`,
    'Use the class on: ".src/app/demo/components/ES6/04-iterate/04-iterate.component";'
  ],
  showContent: false,
  showResult: false
};

export const activity1 = {
  title: "Mapping data #1",
  description: ["Transform the array in the desired one"],
  solution: `const obj1 = { a: 1, b: 2, c: 3, d: 4 };
* Old javascript: 

const officersIds = [];

var arr = [0, 1, 2, 3];
for (var i = 0, len = officers.length; i < len; i++) {
  officersIds.push(officers[i].id);
}

* ES5: forEach() may be preferable when you’re not trying to change the data in your array, 
but instead want to just do something with it.

officers.forEach(function(officer) {
  officersIds.push(officer.id);
});

* ES6: And map() might be preferable when changing or altering data. 
Not only is it faster but it returns a new Array.

const officersIds = officers.map(officer => officer.id);`,
  steps: [
    {
      step: `Step 1: Having the officers collection, create a new array with the id of the officers`,
      code: `const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" }
];`
    },
    {
      step: `Step 2: Hit the button, did you see the same result?`,
      code: `Answer = [20, 24, 56, 88];`
    }
  ]
};

export const activity2 = {
  title: "Reducing data #2",
  description: ["Iterate to find the solution"],
  solution: `* Old javascript:
var totalYears = 0;
for (var i = 0, len = pilots.length; i < len; i++) {
  totalYears += pilots[i].years;
}
  
* ES5:
var totalYears = 0; 
pilots.forEach(function(pilot) {
  totalYears += pilot.years;
});

* ES6:
const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

* Poetry: Functional programming
const sumOf = property => {
  return (acc, obj) => acc + obj[property];
};
const totalYears = pilots.reduce(sumOf("years"), 0);`,
  steps: [
    {
      step: `Step 1: Find the avarage age of the pilots`,
      code: `const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  }
];`
    },
    {
      step: `Step 2: Hit the button, did you see the same result?`,
      code: `Answer = 20.5`
    }
  ]
};

export const activity3 = {
  title: "Javascript loops #3",
  description: ["Create the devastator!!!!!"],
  solution: `* Old javascript: 
var devastator = {
  name: "Devastator",
  team: "Decepticon",
  form: {}
};

for (var i = 0, len = constructicons.length; i < len; i++) {
  var transformer = constructicons[i];
  devastator.form[transformer.bodyPart] = transformer.name;
}

* ES6:
const devastator = constructicons.reduce(
  (combiner, transformer) => {
    combiner.form[transformer.bodyPart] = transformer.name;
    return combiner;
  },
  {
    name: "Devastator",
    team: "Decepticon",
    form: {}
  }
);

* Poetry: Functional programming
const assemble = (combiner, transformer) => {
  combiner.form[transformer.bodyPart] = transformer.name;

  return combiner;
};

const devastator = constructicons.reduce(assemble, {
  name: "Devastator",
  team: "Decepticon",
  form: {}
});`,
  steps: [
    {
      step: `Step 1: Given the following collection, please create the devastator!`,
      code: `const constructicons = [
  {
    name: 'Scrapper',
    form: 'Freightliner Truck',
    team: 'Decepticon',
    bodyPart: 'rightLeg'
  },
  {
    name: 'Hook',
    form: 'Mobile Crane',
    team: 'Decepticon',
    bodyPart: 'upperTorso'
  },
  {
    name: 'Bonecrusher',
    form: 'Bulldozer',
    team: 'Decepticon',
    bodyPart: 'leftArm'
  },
  {
    name: 'Scavenger',
    form: 'Excavator',
    team: 'Decepticon',
    bodyPart: 'rightArm'
  },
  {
    name: 'Mixmaster',
    form: 'Concrete Mixer',
    team: 'Decepticon',
    bodyPart: 'leftLeg'
  },
  {
    name: 'Long Haul',
    form: 'Dump Truck',
    team: 'Decepticon',
    bodyPart: 'lowerTorso'
  }
];`
    },
    {
      step: `Step 2: Hit the button, did you see the same result?`,
      code: `Answer = {
  "name": "Devastator",
  "team": "Decepticon",
  "form": {
    "rightLeg": "Scrapper",
    "upperTorso": "Hook",
    "leftArm": "Bonecrusher",
    "rightArm": "Scavenger",
    "leftLeg": "Mixmaster",
    "lowerTorso": "Long Haul"
  }
}`
    }
  ]
};

export const activity4 = {
  title: "Javascript loops #4",
  description: ["Find the object inside an array"],
  solution: `ES5:
var findingObject;
for (var i = 0, len = constructicons.length; i < len; i++) {
  var transformer = constructicons[i];

  if (transformer.name === "Long Haul") {
    findingObject = transformer;
  }
}

* ES6: 
const findingObject = constructicons.find((transformer) => {
  return 'Long Haul' === transformer.name;
});

* Poetry: Functional programming
const isEqualOnProperty = (property, findString) => {
  return filteringObject => {
    return findString === filteringObject[property];
  };
};

const isEqualOnProperty = (property, findString) => filteringObject => findString === filteringObject[property];
const findingObject = constructicons.find(isEqualOnProperty("name", "Long Haul"));

* Find return the value after found it and stop the iteration`,
  steps: [
    {
      step: `Step 1: Use the variable (const constructicons) of the last excersice to complete this.`,
      code: `constructicons`
    },
    {
      step: `Step 2: Find the object with the property "name" equal to "Long Haul"`,
      code: `Answer = [
  {
    "name": "Long Haul",
    "form": "Dump Truck",
    "team": "Decepticon",
    "bodyPart": "lowerTorso"
  }
]`
    }
  ]
};

export const activity5 = {
  title: "Javascript loops #5",
  description: ["Remove all the 1 from the array"],
  solution: `* ES5:
var numbersDifferent = [];
for (var i = 0, len = userIds.length; i < len; i++) {
  var userId = userIds[i];

  if (userId !== 1) {
    numbersDifferent.push(userId);
  }
}

* ES6:
const numbersDifferent = userIds.filter((userId) => {
  return userId !== 1;
});

* Poetry: Functional programming
const notEqual = findNumber => filteringNumber => findNumber !== filteringNumber;
const numbersDifferent = userIds.filter(notEqual(1));`,
  steps: [
    {
      step: `Step 1: Remove all the 1 from the following array`,
      code: `const userIds = [1, 5, 7, 3, 6, 1];`
    },
    {
      step: `Step 2: Hit the button to see the greet`,
      code: `Answer = [5, 7, 3, 6]`
    }
  ]
};

export const activity6 = {
  title: "Javascript loops #6",
  description: ["Update one property of a collection"],
  solution: `* ES5:
var updatedPosts = [];
for (var i = 0, len = posts.length; i < len; i++) {
  var post = posts[i];

  if (post.id === 1) {
    post.title = "Updated Title 1";
  }

  updatedPosts.push(post);
}

* ES6:
const posts = [{ id: 1, title: "Title 1" }, { id: 2, title: "Title 2" }];
const updatedPosts = posts.map(p => (p.id !== 1 ? p : { ...p, title: "Updated Title 1" }));

* Poetry: Functional programming
const updateTitleOfElementWithId = ({ idValue, newTitle }) => obj =>
  obj.id !== idValue ? obj : { ...obj, title: newTitle };
const updatedPosts = posts
                      .map(updateTitleOfElementWithId({ idValue: 1, newTitle: "Updated Title 1" }));

`,
  steps: [
    {
      step: `Step 1: Update the title of the first object in the array`,
      code: `const posts = [{ id: 1, title: "Title 1" }, { id: 2, title: "Title 2" }];`
    },
    {
      step: `Step 2: Hit the button to run the code`,
      code: `Answer = [
  {
    "id": 1,
    "title": "Updated Title 1"
  },
  {
    "id": 2,
    "title": "Title 2"
  }
]`
    },
    {
      step: "Step Extra: Rewrite the post using functional programming"
    }
  ]
};

export const activity7 = {
  title: "The final challenge",
  description: ["Delete a property of an object"],
  solution: `* Solution One;
const notEqual = findNumber => filteringNumber => findNumber !== filteringNumber;

const createCollection = object => key => {
  return {
    [key]: object[key]
  };
};
const mergeCollection = (accumulator, current) => {
  return {
    ...accumulator,
    ...current
  };
};

const userWithoutPassword = Object.keys(userObject)
  .filter(notEqual("password"))
  .map(createCollection(userObject))
  .reduce(mergeCollection, {});

* Best solution:
const removePropertyOfObject = (object, keyToDelete) => (accumulator, currentKey) => {
  return currentKey === keyToDelete ? accumulator : { ...accumulator, [currentKey]: object[currentKey] };
};
const userWithoutPassword = Object.keys(userObject).reduce(removePropertyOfObject(userObject, "password"), {});`,
  steps: [
    {
      step: `Step 1: Delete the password of the following user object`,
      code: `const userObject = {
  name: "Shivek Khurana",
  age: 23,
  password: "SantaCl@use"
};`
    },
    {
      step: `Step 2: Hit the button and verify the answer`,
      code: `Answer: {
  "name": "Shivek Khurana",
  "age": 23
}`
    }
  ]
};
