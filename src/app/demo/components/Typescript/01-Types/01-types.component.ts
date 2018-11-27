import { Component } from "@angular/core";
import * as activities from "./01-types.activities";

@Component({
  selector: "app-types",
  templateUrl: "./01-types.component.html"
})
export class TypesComponent {
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
  public results6: any;
  public results7: any;

  // Exercise one
  public exerciseOne() {
    // Add typing to the following variables
    let myName, myAge, hasHobbies;

    myName = "Cristian Marquez";
    myAge = 29;
    hasHobbies = true;

    this.results1 = `myName: ${myName}, myAge: ${myAge}, hasHobbies: ${hasHobbies}`;
  }

  // Exercise two
  public exerciseTwo() {
    // Add typing to the following variables
    let arrayNumbers, arrayStrings, oneNumberOneString;

    arrayNumbers = [2, 0, 1, 8];
    arrayStrings = ["Cristian", "Marquez"];
    oneNumberOneString = ["Happy", 2018];

    this.results2 = {
      arrayNumbers: arrayNumbers,
      arrayStrings: arrayStrings,
      oneNumberOneString: oneNumberOneString
    };
  }

  // Exercise three
  public exerciseThree() {
    // Replace the Colors object with an Enum
    const Colors = {
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
    };
  }

  // Exercise four
  public exerciseFour(): void {
    // Add typing to the following variables
    let notSure = 4;
    let u = undefined;
    let n = null;

    // notSure = "maybe a string instead";
    // notSure = false; // okay, definitely a boolean

    this.results4 = {
      notSure: notSure,
      u: u,
      n: n
    };
  }

  // Exercise five
  public exerciseFive() {}

  // Exercise six
  public exerciseSix() {
    // Add typing to the following functions
    function multiply(v1, v2) {
      return v1 * v2;
    }

    let myMultiply;

    myMultiply = multiply;
    this.results6 = `Happy ${myMultiply(2, 1009)}`;
  }

  // Exercise seven
  public exerciseSeven() {
    // Add typing to bankAccount and myself
    let bankAccount = {
      money: 2000,
      deposit(value) {
        this.money += value;
      }
    };

    let myself = {
      name: "Cristian Marquez",
      bankAccount: bankAccount,
      hobbies: ["Gaming", "Skateboard"]
    };

    this.results7 = myself;
  }
}
