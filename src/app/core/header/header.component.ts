import {
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../developer.scss'],
})
export class HeaderComponent {
  @ViewChildren('navLink') public navLinks!: QueryList<ElementRef>;

  public readonly sections: string[] = ['hero', 'about', 'journey', 'projects', 'contact'];

  constructor() { }

  public updateHeaderActive(sectionId: string, event: Event): void {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
