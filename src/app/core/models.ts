export enum SkillLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
}

export interface Employee {
  id: string;
  name: string;
  lastName: string;
  skills: Skill[];
}
