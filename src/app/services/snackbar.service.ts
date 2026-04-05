import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarEle!: HTMLDivElement;
  private snackbarTimeout!: ReturnType<typeof setTimeout>;

  public set setSnackbarEle(ele: HTMLDivElement) {
    if (!ele) {
      console.error('Snackbar ele ref is not fetched correctly');
      return;
    }
    this.snackbarEle = ele;

    if (this.snackbarEle) {
      const closeBtn = this.snackbarEle.querySelector('.snackbar--close');

      if (!closeBtn) return;
      closeBtn.addEventListener('click', this.removeSnackbar.bind(this));
    }
  }

  constructor() {}

  public showSnackbar(type: 'success' | 'warning' | 'error', message: string) {
    this.removeSnackbar();
    console.log('showSnackbar is called');

    const snackbarInfoTextEle =
      this.snackbarEle.querySelector('.snackbar-info');
    snackbarInfoTextEle && (snackbarInfoTextEle.textContent = message);
    this.snackbarEle.classList.add(type);

    this.snackbarTimeout = setTimeout(() => {
      this.removeSnackbar();
    }, 4000);
  }

  public removeSnackbar() {
    this.snackbarEle?.classList?.remove('success', 'warning', 'error');
    const snackbarInfoTextEle =
      this.snackbarEle?.querySelector('.snackbar-info');
    snackbarInfoTextEle && (snackbarInfoTextEle.textContent = '');
    clearTimeout(this.snackbarTimeout);
  }
}
