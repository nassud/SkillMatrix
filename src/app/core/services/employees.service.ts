import { Injectable } from "@angular/core";
import { Employee, SkillLevel } from "../models";
import * as uuid from "uuid";

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  employees: Employee[] = [
    {
      id: uuid.v4(),
      name: "Nicolás",
      lastName: "Dussán",
      skills: [],
    },
    {
      id: uuid.v4(),
      name: "Sebastián",
      lastName: "Gómez",
      skills: [],
    },
  ];

  constructor() {}

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(id: string): Employee | undefined {
    return this.employees.find((employee) => {
      return employee.id === id;
    });
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }

  updateEmployee(employee: Employee) {
    const index = this.employees.findIndex((emp) => emp.id === employee.id);
    this.employees[index] = employee;
  }

  addEmployee(employee: Employee) {
    this.employees = [
      ...this.employees,
      {
        ...employee,
        id: uuid.v4(),
      },
    ];
  }
}
