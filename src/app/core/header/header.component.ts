import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChildren('navLink') private navLinks!: QueryList<ElementRef>;

  constructor() {
  }

  public updateHeaderActive(event: FocusEvent): void {
    const parentNode = (event.target instanceof HTMLElement && event.target.parentNode instanceof HTMLElement) ? event.target.parentNode as HTMLElement : null;
    this.navLinks.forEach((navLink: ElementRef) => {
      console.log("evtttttttttttt", parentNode, navLink);

      if (navLink.nativeElement.innerText === parentNode?.innerText) {
        navLink.nativeElement.classList.add('active');
      } else {
        navLink.nativeElement.classList.remove('active');
      }

    });

  }
}
