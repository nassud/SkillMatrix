import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./core/shared/shared.module";
import { EmployeesComponent } from "./pages/employees/employees.component";
import { SkillsComponent } from "./pages/skills/skills.component";
// Import the module from the SDK
import { AuthModule } from "@auth0/auth0-angular";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    SkillsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // Import el módulo de Auth0
    AuthModule.forRoot({
      domain: "skillmatrix.us.auth0.com",
      clientId: "15VUieutwpkfxgrp8KNHtyxB3U2GeK7O",
      cacheLocation: "localstorage",
      useRefreshTokens: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
