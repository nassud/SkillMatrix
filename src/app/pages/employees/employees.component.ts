import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Employee, Skill, SkillLevel } from "src/app/core/models";
import { EmployeesService } from "src/app/core/services/employees.service";
import { SkillsService } from "src/app/core/services/skills.service";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
})
export class EmployeesComponent implements OnInit {
  employeesService: EmployeesService;
  skillsService: SkillsService;

  selectedEmployee: Employee | undefined;
  selectedSkills!: Skill[];

  form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    skills: new FormControl("", Validators.required),
  });

  constructor(
    employeesService: EmployeesService,
    skillsService: SkillsService
  ) {
    this.employeesService = employeesService;
    this.skillsService = skillsService;
  }

  ngOnInit(): void {}

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
