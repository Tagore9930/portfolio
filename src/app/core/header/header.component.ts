import { Component, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';

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
    // const parentNode = (event.target instanceof HTMLElement && event.target.parentNode instanceof HTMLElement) ? event.target.parentNode as HTMLElement : null;
    // this.navLinks.forEach((navLink: ElementRef) => {
    //   console.log("evtttttttttttt", parentNode, navLink);

    //   if (navLink.nativeElement.innerText === parentNode?.innerText) {
    //     navLink.nativeElement.classList.add('active');
    //   } else {
    //     navLink.nativeElement.classList.remove('active');
    //   }

    // });

  }

  sections = ['hero', 'about', 'journey', 'projects', 'contact'];
  tempSetTimeout: any = null;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentSection = '';
    for (const id of this.sections) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 10) {
          currentSection = id;
          break;
        }
      }
    }
    clearTimeout(this.tempSetTimeout);
    this.tempSetTimeout = setTimeout(() => {
      this.navLinks.forEach((navLink: ElementRef) => {
        navLink.nativeElement.classList.remove('active');
        if (navLink.nativeElement?.children[0].getAttribute('href') === `#${currentSection}`) {
          navLink.nativeElement.classList.add('active');
        }
      });

    }, 20);
  }
}
