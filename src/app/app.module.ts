import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./core/shared/shared.module";
import { EmployeesComponent } from "./pages/employees/employees.component";
import { SkillsComponent } from "./pages/skills/skills.component";

@NgModule({
  declarations: [AppComponent, EmployeesComponent, SkillsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
