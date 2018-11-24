import { Component } from "@angular/core";
import * as activities from "./01-types.activities";

interface BooleanObjectMap {
  [propertie: string]: boolean;
}

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
  public results1: string;
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
  public results7: any;

  // Exercise one
  public exerciseOne() {
    let myName: string, myAge: number, hasHobbies: boolean;

    myName = "Cristian Marquez";
    myAge = 29;
    hasHobbies = true;

    this.results1 = `myName: ${myName}, myAge: ${myAge}, hasHobbies: ${hasHobbies}`;
  }

  // Exercise two
  public exerciseTwo() {
    let arrayNumbers: number[], arrayStrings: Array<string>, oneNumberOneString: [string, number];

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
    enum Colors {
      Red = 100,
      Green,
      Blue
    }
    /*const Colors = {
      Red: 100,
      Green: 101,
      Blue: 102,
      100: "Red",
      101: "Green",
      102: "Blue"
    };*/

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
    let notSure: any = 4;
    let u: undefined = undefined;
    let n: null = null;

    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean

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
    function multiply(v1: number, v2: number): number {
      return v1 * v2;
    }

    let myMultiply: (a: number, b: number) => number;

    myMultiply = multiply;
    this.results6 = `Happy ${myMultiply(2, 1009)}`;
  }

  // Exercise seven
  public exerciseSeven() {
    interface BankAccount {
      money: number;
      deposit: (val: number) => void;
    }

    interface MySelfAccount {
      name: string;
      bankAccount: BankAccount;
      hobbies: string[];
    }

    let bankAccount: BankAccount = {
      money: 2000,
      deposit(value: number): void {
        this.money += value;
      }
    };

    let myself: MySelfAccount = {
      name: "Cristian Marquez",
      bankAccount: bankAccount,
      hobbies: ["Gaming", "Skateboard"]
    };

    this.results7 = myself;
  }
}
