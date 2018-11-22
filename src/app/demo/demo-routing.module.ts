import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutSidebarComponent } from "../ui/containers/layout-sidebar/layout-sidebar.component";
import { Demo0Component } from "./components/demo0/demo0.component";
import { VariablesComponent } from "./components/ES6/01-variables/01-variables.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutSidebarComponent,
    data: {
      links: [
        { label: "Introduction", url: "introduction" },
        { label: "ES6 Variables", url: "es6-variables" }
        /*{ label: 'Draw on a canvas', url: 'draw-canvas' },
      { label: 'Network Request', url: 'network-request' },
      { label: 'Text Input', url: 'text-input' },
      { label: 'Creating Observables', url: 'creating-observables' },
      { label: 'Subjects', url: 'subjects' },
      { label: 'Extra Exercises', url: 'extra-exercises' },*/
      ]
    },
    children: [
      { path: "", pathMatch: "full", redirectTo: "introduction" },
      { path: "introduction", component: Demo0Component },
      { path: "es6-variables", component: VariablesComponent }
      /*{ path: 'draw-canvas', component: Demo3Component },
    { path: 'network-request', component: Demo4Component },
    { path: 'text-input', component: Demo5Component },
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
