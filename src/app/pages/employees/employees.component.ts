import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Employee, Skill, SkillLevel } from "src/app/core/models";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
})
export class EmployeesComponent implements OnInit {
  employees!: Employee[];

  newEmployee!: Employee;
  skills!: Skill[];
  selectedSkills!: Skill[];

  form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    skills: new FormControl("", Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    this.skills = [
      {
        id: 1,
        name: "Java",
        level: SkillLevel.ADVANCED,
      },
      {
        id: 2,
        name: "PHP",
        level: SkillLevel.INTERMEDIATE,
      },
    ];

    this.employees = [
      {
        id: 1,
        name: "Nicolás",
        lastName: "Dussán",
        skills: [],
      },
    ];
  }

  submit() {
    console.log(this.form.value);
  }
}
