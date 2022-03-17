import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Employee, Skill, SkillLevel } from "src/app/core/models";
import { EmployeesService } from "src/app/core/services/employees.service";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
})
export class EmployeesComponent implements OnInit {
  employeesService: EmployeesService;

  selectedEmployee: Employee | undefined;
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

  constructor(employeesService: EmployeesService) {
    this.employeesService = employeesService;
  }

  ngOnInit(): void {
    this.skills = [
      {
        id: 1,
        name: "React",
        level: SkillLevel.ADVANCED,
      },
      {
        id: 2,
        name: "Angular",
        level: SkillLevel.INTERMEDIATE,
      },
      {
        id: 3,
        name: "Vue",
        level: SkillLevel.ADVANCED,
      },
      {
        id: 4,
        name: "Html",
        level: SkillLevel.INTERMEDIATE,
      },
      {
        id: 5,
        name: "Css",
        level: SkillLevel.ADVANCED,
      },
      {
        id: 6,
        name: "JavaScript",
        level: SkillLevel.INTERMEDIATE,
      },
      {
        id: 7,
        name: "TypeScript",
        level: SkillLevel.ADVANCED,
      },
      {
        id: 8,
        name: "Flutter",
        level: SkillLevel.INTERMEDIATE,
      },
    ];
  }

  submit() {
    if (this.selectedEmployee) {
      this.employeesService.updateEmployee({
        ...this.form.value,
        id: this.selectedEmployee.id,
      });
      this.selectedEmployee = undefined;
    } else {
      this.employeesService.addEmployee(this.form.value);
    }
    this.form.reset();
  }

  handleUpdate(id: string) {
    this.selectedEmployee = this.employeesService.employees.find(
      (emp) => emp.id === id
    );
    if (this.selectedEmployee) {
      this.form.controls["name"].setValue(this.selectedEmployee.name);
      this.form.controls["lastName"].setValue(this.selectedEmployee.lastName);
      this.form.controls["skills"].setValue(this.selectedEmployee.skills);
    }
  }

  handleDelete(id: string) {
    this.employeesService.deleteEmployee(id);
  }

  handleCancel() {
    this.selectedEmployee = undefined;
    this.form.reset();
  }
}
