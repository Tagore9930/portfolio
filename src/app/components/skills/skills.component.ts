import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../developer.scss']
})
export class SkillsComponent {

  public readonly proficiencies: { stars: number, name: string }[] = [
    {
      stars: 5,
      name: "Expert"
    },
    {
      stars: 4,
      name: "Advanced"
    },
    {
      stars: 3,
      name: "Intermediate"
    },
    {
      stars: 2,
      name: "Beginner"
    },
  ]

  constructor(public dataService: DataService) { }

  public getSkillExp(rating: number) {
    return this.proficiencies.find(p => p.stars === rating)?.name;
  }
}
