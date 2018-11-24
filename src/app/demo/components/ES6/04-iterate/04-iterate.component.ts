import { Component } from "@angular/core";
import * as activities from "./04-iterate.activities";

@Component({
  selector: "app-js-interate",
  templateUrl: "./04-iterate.component.html"
})
export class IterateComponent {
  // Store the info about the activities
  public readonly lesson = activities.lesson;
  public readonly activity1 = activities.activity1;
  public readonly activity2 = activities.activity2;
  public readonly activity3 = activities.activity3;
  public readonly activity4 = activities.activity4;
  public readonly activity5 = activities.activity5;
  public readonly activity6 = activities.activity6;
  public readonly activity7 = activities.activity7;

  // Store the result of the activities
  public results1: any;
  public results2: any;
  public results3: any;
  public results4: any;
  public results5: any;
  public results6: any;
  public results7: any;

  // Exercise one
  public exerciseOne() {
    const officers = [
      { id: 20, name: "Captain Piett" },
      { id: 24, name: "General Veers" },
      { id: 56, name: "Admiral Ozzel" },
      { id: 88, name: "Commander Jerjerrod" }
    ];

    // What we need
    const result = [20, 24, 56, 88];

    /* const officersIds = [];

    var arr = [0, 1, 2, 3];
    for (var i = 0, len = officers.length; i < len; i++) {
      officersIds.push(officers[i].id);
    } */

    // forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it
    /* officers.forEach(function(officer) {
      officersIds.push(officer.id);
    }); */

    //And map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array.

    const officersIds = officers.map(officer => officer.id);

    this.results1 = officersIds;
  }

  // Exercise two
  public exerciseTwo() {
    const pilots = [
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
    ];

    // Get the avarage age of the pilos

    /* var totalYears = 0;
    for (var i = 0, len = pilots.length; i < len; i++) {
      totalYears += pilots[i].years;
    }
    
    var totalYears = 0; 
    pilots.forEach(function(pilot) {
      totalYears += pilot.years;
    }); */

    // const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

    const sumOf = property => {
      return (acc, obj) => acc + obj[property];
    };
    const totalYears = pilots.reduce(sumOf("years"), 0);

    this.results2 = totalYears / pilots.length;
  }

  // Exercise three
  public exerciseThree() {
    const constructicons = [
      {
        name: "Scrapper",
        form: "Freightliner Truck",
        team: "Decepticon",
        bodyPart: "rightLeg"
      },
      {
        name: "Hook",
        form: "Mobile Crane",
        team: "Decepticon",
        bodyPart: "upperTorso"
      },
      {
        name: "Bonecrusher",
        form: "Bulldozer",
        team: "Decepticon",
        bodyPart: "leftArm"
      },
      {
        name: "Scavenger",
        form: "Excavator",
        team: "Decepticon",
        bodyPart: "rightArm"
      },
      {
        name: "Mixmaster",
        form: "Concrete Mixer",
        team: "Decepticon",
        bodyPart: "leftLeg"
      },
      {
        name: "Long Haul",
        form: "Dump Truck",
        team: "Decepticon",
        bodyPart: "lowerTorso"
      }
    ];

    /* var devastator = {
      name: "Devastator",
      team: "Decepticon",
      form: {}
    };

    for (var i = 0, len = constructicons.length; i < len; i++) {
      var transformer = constructicons[i];
      devastator.form[transformer.bodyPart] = transformer.name;
    } */

    /* const devastator = constructicons.reduce(
      (combiner, transformer) => {
        combiner.form[transformer.bodyPart] = transformer.name;
        return combiner;
      },
      {
        name: "Devastator",
        team: "Decepticon",
        form: {}
      }
    ); */

    const assemble = (combiner, transformer) => {
      combiner.form[transformer.bodyPart] = transformer.name;

      return combiner;
    };

    const devastator = constructicons.reduce(assemble, {
      name: "Devastator",
      team: "Decepticon",
      form: {}
    });

    this.results3 = devastator;
  }

  // Exercise four
  public exerciseFour() {
    const constructicons = [
      {
        name: "Scrapper",
        form: "Freightliner Truck",
        team: "Decepticon",
        bodyPart: "rightLeg"
      },
      {
        name: "Hook",
        form: "Mobile Crane",
        team: "Decepticon",
        bodyPart: "upperTorso"
      },
      {
        name: "Bonecrusher",
        form: "Bulldozer",
        team: "Decepticon",
        bodyPart: "leftArm"
      },
      {
        name: "Scavenger",
        form: "Excavator",
        team: "Decepticon",
        bodyPart: "rightArm"
      },
      {
        name: "Mixmaster",
        form: "Concrete Mixer",
        team: "Decepticon",
        bodyPart: "leftLeg"
      },
      {
        name: "Long Haul",
        form: "Dump Truck",
        team: "Decepticon",
        bodyPart: "lowerTorso"
      }
    ];

    // var findingObject;
    // for (var i = 0, len = constructicons.length; i < len; i++) {
    //   var transformer = constructicons[i];

    //   if (transformer.name === "Long Haul") {
    //     findingObject = transformer;
    //   }
    // }

    // const isEqualOnProperty = (property, findString) => {
    //   return filteringObject => {
    //     return findString === filteringObject[property];
    //   };
    // };

    const isEqualOnProperty = (property, findString) => filteringObject => findString === filteringObject[property];
    const findingObject = constructicons.find(isEqualOnProperty("name", "Long Haul"));

    this.results4 = findingObject;
  }

  // Exercise five
  public exerciseFive() {
    const userIds = [1, 5, 7, 3, 6, 1];
    // var numbersDifferent = [];
    // for (var i = 0, len = userIds.length; i < len; i++) {
    //   var userId = userIds[i];

    //   if (userId !== 1) {
    //     numbersDifferent.push(userId);
    //   }
    // }

    const notEqual = findNumber => filteringNumber => findNumber !== filteringNumber;
    const numbersDifferent = userIds.filter(notEqual(1));

    this.results5 = numbersDifferent;
  }

  // Exercise six
  public exerciseSix() {
    const posts = [{ id: 1, title: "Title 1" }, { id: 2, title: "Title 2" }];
    // var updatedPosts = [];
    // for (var i = 0, len = posts.length; i < len; i++) {
    //   var post = posts[i];

    //   if (post.id === 1) {
    //     post.title = "Updated Title 1";
    //   }

    //   updatedPosts.push(post);
    // }

    // const updatedPosts = posts.map(p => (p.id !== 1 ? p : { ...p, title: "Updated Title 1" }));

    const updateTitleOfElementWithId = ({ idValue, newTitle }) => obj =>
      obj.id !== idValue ? obj : { ...obj, title: newTitle };
    const updatedPosts = posts.map(updateTitleOfElementWithId({ idValue: 1, newTitle: "Updated Title 1" }));

    this.results6 = updatedPosts;
  }

  // Exercise eight
  public exerciseSeven() {
    const userObject = {
      name: "Shivek Khurana",
      age: 23,
      password: "SantaCl@use"
    };
    // const notEqual = findNumber => filteringNumber => findNumber !== filteringNumber;

    // const createCollection = object => key => {
    //   return {
    //     [key]: object[key]
    //   };
    // };
    // const mergeCollection = (accumulator, current) => {
    //   return {
    //     ...accumulator,
    //     ...current
    //   };
    // };

    // const userWithoutPassword = Object.keys(userObject)
    //   .filter(notEqual("password"))
    //   .map(createCollection(userObject))
    //   .reduce(mergeCollection, {});

    const removePropertyOfObject = (object, keyToDelete) => (accumulator, currentKey) => {
      return currentKey === keyToDelete ? accumulator : { ...accumulator, [currentKey]: object[currentKey] };
    };
    const userWithoutPassword = Object.keys(userObject).reduce(removePropertyOfObject(userObject, "password"), {});

    this.results7 = userWithoutPassword;
  }
}
