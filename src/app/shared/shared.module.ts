import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSidenavModule, MatMenuModule],
  exports: [MatSidenavModule, MatMenuModule],
})
export class SharedModule {}
