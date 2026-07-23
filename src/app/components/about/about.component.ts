import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../developer.scss']
})
export class AboutComponent {

  public window: any = window;

  constructor(public dataService: DataService) { }
}
