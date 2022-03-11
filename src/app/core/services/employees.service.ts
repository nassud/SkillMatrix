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
      skills: [
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
      ],
    },
    {
      id: uuid.v4(),
      name: "Sebastián",
      lastName: "Gómez",
      skills: [
        {
          id: 2,
          name: "PHP",
          level: SkillLevel.INTERMEDIATE,
        },
      ],
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

  updateEmployee(employee: Employee) {}

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
