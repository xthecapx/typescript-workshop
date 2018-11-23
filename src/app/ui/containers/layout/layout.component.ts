import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styles: [".logo { height: 45px; width: auto; }"]
})
export class LayoutComponent implements OnInit {
  public logo =
    "https://cdn-images-1.medium.com/max/1600/1*o94xaMJAceG3aO9gAI02ZA.png";
  public title = "Javascript + Typescript Workshop";
  public items = [{ label: "Demos", url: "/demos" }];

  constructor() {}

  ngOnInit() {}
}
