import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { MultiSelectModule } from "primeng/multiselect";
import { ChipModule } from "primeng/chip";
import { SelectButtonModule } from "primeng/selectbutton";

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    CardModule,
    MultiSelectModule,
    ChipModule,
    SelectButtonModule,
  ],
})
export class SharedModule {}
