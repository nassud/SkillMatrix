export enum SkillLevel {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
}

export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}

export interface Employee {
  id: number;
  name: string;
  lastName: string;
  skills: Skill[];
}
