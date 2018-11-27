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
  public results5: string;
  public results6: {};
  public results7: string;
  public results8: boolean;

  // Exercise one
  public exerciseOne() {
    // Write your code here
  }

  // Exercise two
  public exerciseTwo() {
    // Write your code here
  }

  // Exercise three
  public exerciseThree() {
    // Write your code here
  }

  // Exercise four
  public exerciseFour() {
    // Write your code here
  }

  // Exercise five
  public exerciseFive() {
    // Write your code here
  }

  // Exercise six
  public exerciseSix() {
    // Write your code here
  }

  // Exercise seven
  public exerciseSeven() {
    // Write your code here
  }

  // Exercise eight
  public exerciseEight() {
    // Write your code here
  }
}
