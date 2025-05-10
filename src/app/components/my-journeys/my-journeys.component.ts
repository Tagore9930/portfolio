import { Component } from '@angular/core';

@Component({
  selector: 'my-journeys',
  templateUrl: './my-journeys.component.html',
  styleUrls: ['./my-journeys.component.scss']
})
export class MyJourneyComponent {
  public isExperience: boolean = true;
  public journeys: any = new Array(10);
}
