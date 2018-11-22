import { Component } from "@angular/core";
import * as activities from "./02-arrow-functions.activities";

@Component({
  selector: "app-types",
  templateUrl: "./01-types.component.html"
})
export class PlaceholderComponent {
  // Store the info about the activities
  public readonly lesson = activities.lesson;
  public readonly activity1 = activities.activity1;
  public readonly activity2 = activities.activity2;
  public readonly activity3 = activities.activity3;
  public readonly activity4 = activities.activity4;
  public readonly activity5 = activities.activity5;
  public readonly activity6 = activities.activity6;

  // Store the result of the activities
  public results1: any;
  public results2: any;
  public results3: any;
  public results4: any;
  public results5: any;
  public results6: any;

  // Exercise one
  public exerciseOne() {}

  // Exercise two
  public exerciseTwo() {}

  // Exercise three
  public exerciseThree() {}

  // Exercise four
  public exerciseFour() {}

  // Exercise five
  public exerciseFive() {}

  // Exercise six
  public exerciseSix() {}

  // Exercise seven
  public exerciseSeven() {}
}
