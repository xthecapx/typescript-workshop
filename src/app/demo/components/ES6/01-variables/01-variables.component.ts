import { Component } from "@angular/core";
import * as activities from "./01-variables.activities";

@Component({
  selector: "app-variables",
  templateUrl: "./01-variables.component.html",
  styleUrls: ["./01-variables.scss"]
})
export class VariablesComponent {
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

  // Store the result of the activities
  public results1: string;
  public results2: string;
  public results3: number;
  public results4: string;
  public results6: {};
  public results8: boolean;
  
  // Exercise one
  public exerciseOne() {
    // Write here
    var x = "outside";

    function foo() {
      var x = "inside";
    }
    foo();
    this.results1 = x;
  }

  // Exercise two
  public exerciseTwo() {
    // Write here
    var x = "outside";

    function foo() {
      x = "inside";
    }
    foo();
    this.results2 = x; 
  }

  // Exercise three
  public exerciseThree() {
    var i = 0;

    if (true) {
      var i = 1;
    }
    
    this.results3 = i;
  }

  // Exercise four
  public exerciseFour() {
    let i = 'outside';

    if (true) {
      let i = 'inside';
    }
    
    this.results4 = i;
  }

  // Exercise five
  public exerciseFive() {
    const i = 0;
    // i = 1;
    // const j;
  }

  // Exercise six
  public exerciseSix() {
    const a = [1];
    const b = a;
    console.log('Exercise 6: a === b ', a === b); // true
    
    b.push(2);
    console.log('Exercise 6: a === b ', a === b); // true
    
    const obj = {};
    obj['i'] = 1;
    console.log('Exercise 6: obj ', obj);
    this.results6 = { arr: a, obj: obj };
  }

  // Exercise seven
  public exerciseSeven() {
    console.log('Exercise 7, a: ', a);
    var a = 2;
    // console.log('Exercise 7, b: ', b); 
    // console.log('Exercise 7, c: ', c);
    let c = 2;
  }

  // Exercise eight
  public exerciseEight() {
    function isEqualTo5(n) {
      return !(n - five);
      var five = 5;
    }
    this.results8 = isEqualTo5(4);
  }
}
