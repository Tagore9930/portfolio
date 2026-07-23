import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  public showSnackbar(type: 'success' | 'warning' | 'error', message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [`snackbar-${type}`],
    });
  }

  public removeSnackbar(): void {
    this.snackBar.dismiss();
  }
}

