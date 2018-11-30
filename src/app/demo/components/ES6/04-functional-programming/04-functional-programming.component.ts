import { Component } from "@angular/core";
import * as activities from "./04-functional-programming.activities";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-rest-spread",
  templateUrl: "./04-functional-programming.component.html"
})
export class FunctionalProgrammingComponent {
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
  public readonly activity10 = activities.activity10;
  public readonly activity11 = activities.activity11;
  public readonly activity12 = activities.activity12;
  public readonly activity13 = activities.activity13;

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
  public results10: any;
  public results11: any;
  public results12: any;
  public results13: any;

  // Exercise one
  public exerciseOne() {
    // Why is this an impure function?
    // * It returns the same result if given the same arguments
    const PI_VALUE = 3.14;

    function calculateArea(radius) {
      return radius * radius * PI_VALUE;
    }

    this.results1 = calculateArea(10);
  }

  // Exercise two
  public exerciseTwo() {
    // Why is this an impure function?
    // * It does not cause any observable side effects
    let counter = 1;

    function increaseCounter(value) {
      counter = value + 1;

      return counter;
    }

    this.results2 = { fn: increaseCounter(counter), counter };
  }

  // Exercise three
  public exerciseThree() {
    // Immutability
    var values = [1, 2, 3, 4, 5];
    var sumOfValues = 0;

    for (var i = 0; i < values.length; i++) {
      sumOfValues += values[i];
    }

    this.results3 = { sumOfValues, values };
  }

  // Exercise four
  public exerciseFour() {
    // Transform the following string to "i-will-be-a-url-slug"
    let string = " I will be a url slug   ";

    function slugify(string) {
      return string;
    }

    this.results4 = slugify(string);
  }

  // Exercise five
  public exerciseFive() {
    // Append "appendMe" array in to the "newArray" array
    function sum(a, b) {
      return a + b;
    }

    this.results5 = sum(3, sum(5, 8));
  }

  // Exercise six
  public exerciseSix() {
    function doubleSum(a, b) {
      return (a + b) * 2;
    }

    function doubleSubtraction(a, b) {
      return (a - b) * 2;
    }

    this.results6 = {
      sum: doubleSum(3, 1),
      subs: doubleSubtraction(3, 1)
    };
  }

  // Exercise seven
  public exerciseSeven() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var evenNumbers = [];

    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i]);
      }
    }

    this.results7 = evenNumbers;
  }

  // Exercise eigth
  public exerciseEigth() {
    var filterArray = function(x, coll) {
      var resultArray = [];

      for (var i = 0; i < coll.length; i++) {
        if (coll[i] < x) {
          resultArray.push(coll[i]);
        }
      }

      return resultArray;
    };

    this.results8 = filterArray(3, [10, 9, 8, 2, 7, 5, 1, 3, 0]); // (3) [2, 1, 0]
  }

  // Exercise nine
  public exerciseNine() {
    let people = [{ name: "TK", age: 26 }, { name: "Kaio", age: 10 }, { name: "Kazumi", age: 30 }];

    this.results9 = people;
  }

  public exerciseTen() {
    var people = [{ name: "TK", age: 26 }, { name: "Kaio", age: 10 }, { name: "Kazumi", age: 30 }];

    var peopleSentences = [];

    for (var i = 0; i < people.length; i++) {
      var sentence = people[i].name + " is " + people[i].age + " years old";
      peopleSentences.push(sentence);
    }

    this.results10 = peopleSentences;
  }

  public exerciseEleven() {
    var values = [1, 2, 3, -4, 5];

    for (var i = 0; i < values.length; i++) {
      values[i] = Math.abs(values[i]);
    }

    this.results11 = values; // [1, 2, 3, 4, 5]
  }

  public exerciseTwelve() {
    var orders = [
      { productTitle: "Product 1", amount: 10 },
      { productTitle: "Product 2", amount: 30 },
      { productTitle: "Product 3", amount: 20 },
      { productTitle: "Product 4", amount: 60 }
    ];

    var totalAmount = 0;

    for (var i = 0; i < orders.length; i++) {
      totalAmount += orders[i].amount;
    }

    this.results12 = totalAmount; // 120
  }

  public exerciseThirteen() {
    let shoppingCart = [
      { productTitle: "Functional Programming", type: "books", amount: 10 },
      { productTitle: "Kindle", type: "eletronics", amount: 30 },
      { productTitle: "Shoes", type: "fashion", amount: 20 },
      { productTitle: "Clean Code", type: "books", amount: 60 }
    ];

    this.results13 = shoppingCart;
  }
}
