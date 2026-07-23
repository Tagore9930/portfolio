import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../../developer.scss']
})
export class ProjectsComponent {

  constructor(public dataService: DataService) { }

  openLink(url: string) {
    window.open(url, '_blank');
  }

}
