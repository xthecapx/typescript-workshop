import { Component } from "@angular/core";
import * as activities from "./02-arrow-functions.activities";

@Component({
  selector: "app-types",
  templateUrl: "./02-arrow-functions.component.html"
})
export class ArrowFunctionComponent {
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
  public exerciseOne() {
    /* function sayHi() {
      return 'Greeting' ;
    } */
    const sayHi = () => "Greeting";

    this.results1 = sayHi();
  }

  // Exercise two
  public exerciseTwo() {
    /* function greetings(name) {
      return "hello " + name;
    } */

    const greetings = name => `hello ${name}`;

    this.results2 = greetings("Cristian");
  }

  // Exercise three
  public exerciseThree() {
    /* function greetingsObject(name) {
      return { sayHi: "hello " + name };
    } */
    const greetingsObject = name => ({ sayHi: `hello ${name}` });

    this.results3 = greetingsObject("Cristian Marquez");
  }

  // Exercise four
  public exerciseFour() {
    /* function greetingsParamsObject(greet, name) {
      var NAME = name ? name : "traveler";
      var GREET = greet ? greet : "Greetings";

      return { sayHi: GREET + NAME };
    } */

    const greetingsParamsObject = (greet = "Greetings", name = "traveler") => ({
      sayHi: `${greet} ${name}`
    });

    this.results4 = greetingsParamsObject("Greetings", "traveler");
  }

  // Exercise five
  public exerciseFive() {
    /* var pets = {
      names: ['Baron', 'Chief', '18'],
      owner: 'Cristian',
      description: function() {
        return this.names.map(function(pet){
          return `${this.owner} knows an awesome dog named ${pet}.`
        });
      }
    };

    var pets = {
      names: ['Baron', 'Chief', '18'],
      owner: 'Cristian',
      description: function() {
        return this.names.map(function(pet) {
          return `${this.owner} knows an awesome dog named ${pet}.`
        }.bind(this));
      }
    };

    var pets = {
      names: ['Baron', 'Chief', '18'],
      owner: 'Cristian',
      description: function() {
        return this.names.map(function(pet) {
          return `${this.owner} knows an awesome dog named ${pet}.`
        }, pets);
      }
    };

    var pets = {
      names: ['Baron', 'Chief', '18'],
      owner: 'Cristian',
      description: function() {
        var sefl = this;

        return this.names.map(function(pet) {
          return `${sefl.owner} knows an awesome dog named ${pet}.`
        });
      }
    }; */

    const pets = {
      names: ["Baron", "Chief", "18"],
      owner: "Cristian",
      description: function() {
        return this.names.map(pet => {
          return `${this.owner} knows an awesome dog named ${pet}.`;
        });
      }
    };

    this.results5 = pets.description();
  }

  // Exercise six
  public exerciseSix() {
    /* function Prefixer(prefix) {
      this.prefix = prefix;
    }
    Prefixer.prototype.prefixArray = function(arr) {
      // (A)
      "use strict";
      return arr.map(function(x) {
        // (B)
        // Doesn’t work:
        return this.prefix + x; // (C)
      });
    };

    function Prefixer(prefix) {
      this.prefix = prefix;
    }
    Prefixer.prototype.prefixArray = function(arr) {
      var that = this; // (A)
      return arr.map(function(x) {
        return that.prefix + x;
      });
    };

    function Prefixer(prefix) {
      this.prefix = prefix;
    }
    Prefixer.prototype.prefixArray = function(arr) {
      return arr.map(function(x) {
        return this.prefix + x;
      }, this); // (A)
    };

    function Prefixer(prefix) {
      this.prefix = prefix;
    }
    Prefixer.prototype.prefixArray = function(arr) {
      return arr.map(
        function(x) {
          return this.prefix + x;
        }.bind(this)
      ); // (A)
    };

    function Prefixer(prefix) {
      this.prefix = prefix;
    }
    Prefixer.prototype.prefixArray = function(arr) {
      return arr.map(x => {
        return this.prefix + x;
      });
    };*/

    class Prefixer {
      constructor(private prefix) {}

      prefixArray(arr) {
        return arr.map(x => this.prefix + x);
      }
    }

    var pre = new Prefixer("Hi ");
    this.results6 = pre.prefixArray(["Cristian", "Marquez"]);
  }
}
