import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppSharedModule } from "../app-shared.module";
import { DemoRoutingModule } from "./demo-routing.module";
import { Demo0Component } from "./components/demo0/demo0.component";
import { VariablesComponent } from "./components/ES6/01-variables/01-variables.component";
import { TypesComponent } from "./components/Typescript/01-Types/01-types.component";
import { ArrowFunctionComponent } from "./components/ES6/02-arroy-functions/02-arrow-functions.component";
import { RestSpreadComponent } from "./components/ES6/03-rest-spread/03-rest-spread.component";
import { IterateComponent } from "./components/ES6/05-iterate/05-iterate.component";
import { FunctionalProgrammingComponent } from "./components/ES6/04-functional-programming/04-functional-programming.component";

@NgModule({
  imports: [AppSharedModule, DemoRoutingModule],
  declarations: [
    Demo0Component,
    VariablesComponent,
    TypesComponent,
    ArrowFunctionComponent,
    RestSpreadComponent,
    IterateComponent,
    FunctionalProgrammingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DemoModule {}
