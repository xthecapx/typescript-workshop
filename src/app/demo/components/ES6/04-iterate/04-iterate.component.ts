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
    // Given the following collection
    // create a new array with the id of the officers
    const officers = [
      { id: 20, name: "Captain Piett" },
      { id: 24, name: "General Veers" },
      { id: 56, name: "Admiral Ozzel" },
      { id: 88, name: "Commander Jerjerrod" }
    ];

    const officersIds = [];

    this.results1 = officersIds;
  }

  // Exercise two
  public exerciseTwo() {
    // Given the following collection
    // Find the avarage age of the pilots
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

    // Find the avarage age of the pilos
    const totalYears = 10;
    this.results2 = totalYears / pilots.length;
  }

  // Exercise three
  public exerciseThree() {
    // Given the following collection
    // Create the devastator!!!!!
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

    const devastator = {};
    this.results3 = devastator;
  }

  // Exercise four
  public exerciseFour() {
    // Given the following collection
    // Find the object with the property "name" equal to "Long Haul"
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

    const findingObject = {};
    this.results4 = findingObject;
  }

  // Exercise five
  public exerciseFive() {
    // Remove all the 1 inside the array
    const userIds = [1, 5, 7, 3, 6, 1];
    const withoutOne = [];
    this.results5 = withoutOne;
  }

  // Exercise six
  public exerciseSix() {
    // Update the title of the first post in the following collection
    const posts = [{ id: 1, title: "Title 1" }, { id: 2, title: "Title 2" }];
    const updatedPosts = [];
    this.results6 = updatedPosts;
  }

  // Exercise eight
  public exerciseSeven() {
    // Delete the pass of the following object
    const userObject = {
      name: "Shivek Khurana",
      age: 23,
      password: "SantaCl@use"
    };
    const userWithoutPassword = {};
    this.results7 = userWithoutPassword;
  }
}
