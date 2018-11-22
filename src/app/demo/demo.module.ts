import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { AppSharedModule } from "../app-shared.module";
import { DemoRoutingModule } from "./demo-routing.module";
import { Demo0Component } from "./components/demo0/demo0.component";
import { VariablesComponent } from "./components/ES6/01-variables/01-variables.component";
import { TypesComponent } from "./components/Typescript/01-Types/01-types.component";

@NgModule({
  imports: [AppSharedModule, DemoRoutingModule],
  declarations: [Demo0Component, VariablesComponent, TypesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DemoModule {}
