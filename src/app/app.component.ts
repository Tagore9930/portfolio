import { LoaderService } from './services/loader.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('snackbarId') private snackbarEle!: ElementRef<HTMLDivElement>;
  title = 'portfolio';

  constructor(
    private snackbarService: SnackbarService,
    public loaderService: LoaderService,
  ) {}

  public ngAfterViewInit() {
    if (!this.snackbarEle?.nativeElement) return;
    this.snackbarService.setSnackbarEle = this.snackbarEle?.nativeElement;
  }
}
