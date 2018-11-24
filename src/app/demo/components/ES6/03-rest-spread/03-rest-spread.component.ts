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
    /* var obj1 = { a: 1, b: 2, c: 3, d: 4 };
    var a = obj1.a;
    var b = obj1.b;
    var c = obj1.c;
    var d = obj1.d; */

    const obj1 = { a: 1, b: 2, c: 3, d: 4 };
    const { a, b, c, d } = obj1;

    this.results1 = {
      a: a,
      b: b,
      c: c,
      d: d
    };
  }

  // Exercise two
  public exerciseTwo() {
    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;
    /* var obj1 = { a: a, b: b, c: c, d: d }; */

    const obj1 = { a, b, c, d };

    this.results2 = obj1;
  }

  // Exercise three
  public exerciseThree() {
    var iterable = ["a", "b"];
    /*     var a = iterable[0];
    var b = iterable[1]; */

    const [a, b] = iterable;

    this.results3 = { a, b };
  }

  // Exercise four
  public exerciseFour() {
    const array = [1, 20, 3, 5, -2];
    // var maxOfArray = Math.max.apply(Math, array);

    const maxOfArray = Math.max(...array);
    this.results4 = maxOfArray;
  }

  // Exercise five
  public exerciseFive() {
    let appendMe = [1, 2, 3];
    let newArray = [55, 20];
    // newArray.push.apply(newArray, numbersE);
    newArray.push(...appendMe);

    this.results5 = newArray;
  }

  // Exercise six
  public exerciseSix() {
    // Create Alias
    const getAddress = () => {
      return {
        city: "city",
        state: "state",
        zip: "zip"
      };
    };
    /*     const obj = getAddres();
    const c = obj.city;
    const s = obj.state;
    const z = obj.zip; */
    let { city: c, state: s, zip: z } = getAddress();

    this.results6 = { c, s, z };
  }

  // Exercise seven
  public exerciseSeven() {
    const args = { name: "Cristian", age: 29 };
    const args2 = { name: "Aura" };
    // Create a method and pass args, args2 as parameters. return the name an age in a single array. the default value for age parameter is 20
    /* function myName(obj) {
      var age = obj.age ? obj.age : 20;

      return obj.name + age;
    } */
    const myName = ({ name, age = 20 }) => {
      return name + age;
    };

    this.results7 = {
      args: myName(args),
      args2: myName(args2)
    };
  }

  // Exercise eigth
  public exerciseEigth() {
    // Create a function to return the number of animals but not the first
    const animals = ["The total of animals is: ", "🐯", "🐰", "🐘", "🐴", "🐥"];
    /* function listAnimals() {
      var animals = Array.prototype.slice.call(arguments, 1);

      animals.forEach(function(animal) {
        console.log(animal);
      });

      return arguments[0] + animals.length;
    } */

    const listAnimals = (a, ...rest) => {
      rest.forEach(animal => console.log(animal));
      return a + rest.length;
    };

    this.results8 = listAnimals("The total of animals is: ", "🐯", "🐰", "🐘", "🐴", "🐥");
  }

  // Exercise nine
  public exerciseNine() {
    const user = { name: "Shivek Khurana" };
    const dynamicKey = "wearsSpectacles";

    // var updatedUserDinamyc = {
    //   name: user.name
    // };
    // updatedUserDinamyc[dynamicKey] = true;

    const updatedUserDinamyc = { ...user, [dynamicKey]: true };

    this.results9 = updatedUserDinamyc;
  }
}
