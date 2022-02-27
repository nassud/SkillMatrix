enum SkillLevel {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
}

interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}

interface Employee {
  id: number;
  name: string;
  lastName: string;
  skills: Skill[];
}
