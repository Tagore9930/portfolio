import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../developer.scss']
})
export class AboutComponent {
  constructor(public dataService: DataService) { }

  public openResume(): void {
    if (this.dataService.resumeLink) {
      window.open(this.dataService.resumeLink, '_blank');
    }
  }

  public scrollToContact(): void {
    const element = document.getElementById('contact');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }
}
