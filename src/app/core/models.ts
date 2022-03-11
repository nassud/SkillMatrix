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
  id: string;
  name: string;
  lastName: string;
  skills: Skill[];
}
