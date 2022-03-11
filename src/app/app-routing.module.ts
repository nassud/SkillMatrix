import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivateComponent } from "./components/private/private.component";
import { PublicComponent } from "./components/public/public.component";
import { EmployeesComponent } from "./pages/employees/employees.component";
import { SkillsComponent } from "./pages/skills/skills.component";
// import { AuthGuard } from "@auth0/auth0-angular";

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "employees", component: EmployeesComponent },
  { path: "skills", component: SkillsComponent },
  { path: "public", component: PublicComponent },
  { path: "private", component: PrivateComponent, canActivate: [AuthGuard] },
  { path: "**", pathMatch: "full", redirectTo: "public" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
