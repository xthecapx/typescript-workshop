import { Component } from "@angular/core";
import * as activities from "./03-rest-spread.activities";

@Component({
  selector: "app-rest-spread",
  templateUrl: "./03-rest-spread.component.html"
})
export class RestSpreadComponent {
  // Store the info about the activities
  public readonly lesson = activities.lesson;
  public readonly activity1 = activities.activity1;
  public readonly activity2 = activities.activity2;
  public readonly activity3 = activities.activity3;
  public readonly activity4 = activities.activity4;
  public readonly activity5 = activities.activity5;
  public readonly activity6 = activities.activity6;
  public readonly activity7 = activities.activity7;
  public readonly activity8 = activities.activity8;
  public readonly activity9 = activities.activity9;

  // Store the result of the activities
  public results1: any;
  public results2: any;
  public results3: any;
  public results4: any;
  public results5: any;
  public results6: any;
  public results7: any;
  public results8: any;
  public results9: any;

  // Exercise one
  public exerciseOne() {
    var obj1 = { a: 1, b: 2, c: 3, d: 4 };
    // Create variables with each property of the following object
    var a = "";
    var b = "";
    var c = "";
    var d = "";

    this.results1 = {
      a: a,
      b: b,
      c: c,
      d: d
    };
  }

  // Exercise two
  public exerciseTwo() {
    // Rewrite the following line using ES6
    // Create a new object where obj.a = 1; obj.b = 2; ...
    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;
    var obj1 = {};

    this.results2 = obj1;
  }

  // Exercise three
  public exerciseThree() {
    // Create a new variable for each element of the following array
    var iterable = ["a", "b"];
    var a = "a";
    var b = "b";

    this.results3 = { a, b };
  }

  // Exercise four
  public exerciseFour() {
    // Find the greatest value of the following array
    var array = [1, 20, 3, 5, -2];

    // this.results4 = maxOfArray;
  }

  // Exercise five
  public exerciseFive() {
    // Append "appendMe" array in to the "newArray" array
    let appendMe = [1, 2, 3];
    let newArray = [55, 20];

    this.results5 = newArray;
  }

  // Exercise six
  public exerciseSix() {
    // Create variables named c, s, z for each property of the object returned by the getAddress method
    const getAddress = () => {
      return {
        city: "city",
        state: "state",
        zip: "zip"
      };
    };
    var c = "city";
    var s = "state";
    var z = "zip";

    this.results6 = { c, s, z };
  }

  // Exercise seven
  public exerciseSeven() {
    const args = { name: "Cristian", age: 29 };
    const args2 = { name: "Aura" };
    // Create a method and pass args, args2 as parameters.
    // return the name an age in a single array.
    // the default value for age must be 20

    function myName(p) {}

    this.results7 = {
      args: myName(args),
      args2: myName(args2)
    };
  }

  // Exercise eigth
  public exerciseEigth() {
    // given the following parameters when calling a function
    // "The total of animals is: ", "🐯", "🐰", "🐘", "🐴", "🐥"
    // Create a funciton to return the following value
    // "The total of animals is: 5"
    // Where the total is all the length of all parameters without the first
    function listAnimals() {}

    // this.results8 = listAnimals("The total of animals is: ", "🐯", "🐰", "🐘", "🐴", "🐥");
  }

  // Exercise nine
  public exerciseNine() {
    // Create a new user property where the name is equal
    // to the dynamicKey value
    const user = { name: "Shivek Khurana" };
    const dynamicKey = "wearsSpectacles";
    const updatedUserDinamyc = {};

    this.results9 = updatedUserDinamyc;
  }
}
