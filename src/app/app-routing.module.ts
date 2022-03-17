import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeesComponent } from "./pages/employees/employees.component";
import { SkillsComponent } from "./pages/skills/skills.component";

import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "employees",
    component: EmployeesComponent,
    canActivate: [AuthGuard],
  },
  { path: "skills", component: SkillsComponent, canActivate: [AuthGuard] },
  {
    path: "user-profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfileModule),
  },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
