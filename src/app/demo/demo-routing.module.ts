import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutSidebarComponent } from "../ui/containers/layout-sidebar/layout-sidebar.component";
import { Demo0Component } from "./components/demo0/demo0.component";
import { VariablesComponent } from "./components/ES6/01-variables/01-variables.component";
import { TypesComponent } from "./components/Typescript/01-Types/01-types.component";
import { ArrowFunctionComponent } from "./components/ES6/02-arroy-functions/02-arrow-functions.component";
import { RestSpreadComponent } from "./components/ES6/03-rest-spread/03-rest-spread.component";
import { IterateComponent } from "./components/ES6/04-iterate/04-iterate.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutSidebarComponent,
    data: {
      links: [
        { label: "Introduction", url: "introduction" },
        { label: "ES6 Variables", url: "es6-variables" },
        { label: "Javascript types", url: "javascript-types" },
        { label: "Fat arrows", url: "es6-fat-arrow" },
        { label: "Spread/Rest", url: "es6-spread-rest" },
        { label: "Looping with Javascript", url: "es6-looping" }
        /*{ label: 'Creating Observables', url: 'creating-observables' },
      { label: 'Subjects', url: 'subjects' },
      { label: 'Extra Exercises', url: 'extra-exercises' },*/
      ]
    },
    children: [
      { path: "", pathMatch: "full", redirectTo: "introduction" },
      { path: "introduction", component: Demo0Component },
      { path: "es6-variables", component: VariablesComponent },
      { path: "javascript-types", component: TypesComponent },
      { path: "es6-fat-arrow", component: ArrowFunctionComponent },
      { path: "es6-spread-rest", component: RestSpreadComponent },
      { path: "es6-looping", component: IterateComponent }
      /*{ path: 'text-input', component: Demo5Component },
    { path: 'creating-observables', component: Demo6Component },
    { path: 'subjects', component: Demo7Component },
    { path: 'extra-exercises', component: Demo8Component }, */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
