import { Injectable } from "@angular/core";
import { Skill, SkillLevel } from "../models";
import * as uuid from "uuid";

@Injectable({
  providedIn: "root",
})
export class SkillsService {
  skills = [
    {
      id: uuid.v4(),
      name: "React",
      level: SkillLevel.ADVANCED,
    },
    {
      id: uuid.v4(),
      name: "Angular",
      level: SkillLevel.INTERMEDIATE,
    },
    {
      id: uuid.v4(),
      name: "Vue",
      level: SkillLevel.ADVANCED,
    },
    {
      id: uuid.v4(),
      name: "Html",
      level: SkillLevel.INTERMEDIATE,
    },
    {
      id: uuid.v4(),
      name: "Css",
      level: SkillLevel.ADVANCED,
    },
    {
      id: uuid.v4(),
      name: "JavaScript",
      level: SkillLevel.INTERMEDIATE,
    },
    {
      id: uuid.v4(),
      name: "TypeScript",
      level: SkillLevel.ADVANCED,
    },
    {
      id: uuid.v4(),
      name: "Flutter",
      level: SkillLevel.INTERMEDIATE,
    },
  ];

  constructor() {}

  getSkills(): Skill[] {
    return this.skills;
  }

  getSkill(id: string): Skill | undefined {
    return this.skills.find((skill) => {
      return skill.id === id;
    });
  }

  deleteSkill(id: string) {
    this.skills = this.skills.filter((skill) => skill.id !== id);
  }

  updateSkill(skill: Skill) {
    const index = this.skills.findIndex((emp) => emp.id === skill.id);
    this.skills[index] = skill;
  }

  addSkill(skill: Skill) {
    this.skills = [
      ...this.skills,
      {
        ...skill,
        id: uuid.v4(),
        level: SkillLevel[skill.level],
      },
    ];
  }
}
