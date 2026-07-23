import { DataService } from './../../services/data.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JourneyType } from 'src/app/Types/app-types';
@Component({
  selector: 'my-journeys',
  templateUrl: './my-journeys.component.html',
  styleUrls: ['./my-journeys.component.scss', '../../developer.scss']
})
export class MyJourneyComponent implements OnInit {
  public isExperience: boolean = true;

  public journeys: JourneyType[] = [];

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.changeJourneyType();
  }

  public changeJourneyType(): void {
    console.log("isExperience", this.isExperience);

    this.journeys = (this.isExperience) ? this.dataService?.experiences : this.dataService?.educations;
    this.cdr.detectChanges()
  }
}
