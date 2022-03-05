import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/core/models";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
})
export class EmployeesComponent implements OnInit {
  employees!: Employee[];

  constructor() {}

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        name: "Nicolás",
        lastName: "Dussán",
        skills: [],
      },
    ];
  }
}
