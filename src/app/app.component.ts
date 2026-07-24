import { LoaderService } from './services/loader.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { SnackbarService } from './services/snackbar.service';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './developer.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appHeader') private appHeaderComp!: HeaderComponent;
  @ViewChildren('section', { read: ElementRef })
  private sections!: QueryList<ElementRef>;

  constructor(
    public loaderService: LoaderService,
  ) { }

  public ngOnInit(): void {
  }

  private sectionObserver!: IntersectionObserver;

  public ngAfterViewInit() {
    this.sectionObserver = new IntersectionObserver(this.revealSection.bind(this), {
      root: null,
      threshold: 0.25,
    });

    this.sections?.forEach((section) => {
      this.sectionObserver.observe(section.nativeElement);
      // section.nativeElement.classList.add('section--hidden');
    });
  }

  private revealSection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // entry.target.classList.remove('section--hidden');
      this.updateNavLink(entry.target.id);
    });
  }

  private updateNavLink(id: string) {
    if (!id || !this.appHeaderComp?.navLinks) return;
    this.appHeaderComp.navLinks.forEach((link) => {
      const el = link.nativeElement as HTMLElement;
      if (el.classList.contains(id)) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
}
