import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Skill, SkillLevel } from "src/app/core/models";
import { SkillsService } from "src/app/core/services/skills.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  skillsService: SkillsService;

  selectedSkill: Skill | undefined;
  skills!: Skill[];
  selectedSkills!: Skill[];

  levelsList!: string[];

  form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    level: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  constructor(skillsService: SkillsService) {
    this.skillsService = skillsService;
  }

  ngOnInit(): void {
    this.levelsList = Object.values(SkillLevel);
  }

  submit() {
    if (this.selectedSkill) {
      this.skillsService.updateSkill({
        ...this.form.value,
        id: this.selectedSkill.id,
      });
      this.selectedSkill = undefined;
    } else {
      this.skillsService.addSkill(this.form.value);
    }
    this.form.reset();
  }

  handleUpdate(id: string) {
    this.selectedSkill = this.skillsService.skills.find((emp) => emp.id === id);
    if (this.selectedSkill) {
      this.form.controls["name"].setValue(this.selectedSkill.name);
      this.form.controls["level"].setValue(this.selectedSkill.level);
    }
  }

  handleDelete(id: string) {
    this.skillsService.deleteSkill(id);
  }

  handleCancel() {
    this.selectedSkill = undefined;
    this.form.reset();
  }
}
