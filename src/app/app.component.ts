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
  @ViewChild('snackbarId') private snackbarEle!: ElementRef<HTMLDivElement>;
  @ViewChildren('section', { read: ElementRef })
  private sections!: QueryList<ElementRef>;

  constructor(
    private snackbarService: SnackbarService,
    public loaderService: LoaderService,
  ) { }

  public ngOnInit(): void {
  }

  private sectionObserver!: IntersectionObserver;

  public ngAfterViewInit() {
    if (!this.snackbarEle?.nativeElement) return;
    this.snackbarService.setSnackbarEle = this.snackbarEle?.nativeElement;

    this.sectionObserver = new IntersectionObserver(this.revealSection?.bind(this), {
      root: null,
      threshold: .25,
    });

    this.sections.forEach((section) => {
      this.sectionObserver.observe(section.nativeElement);
      section.nativeElement.classList.add('section--hidden');
    });
  }

  private revealSection(entries: any, observer: any) {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.remove('section--hidden');
      this.updateNavLink(entry?.target?.id);
    });
  }

  private updateNavLink(id: string) {
    const links = this.appHeaderComp?.navLinks;
    links.forEach(link => link?.nativeElement?.classList?.remove('active'));

    const activeLink = links?.find(link => link?.nativeElement?.className === id);
    activeLink?.nativeElement?.classList?.add('active')
  }
}
