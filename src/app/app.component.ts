import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './core/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDialog: boolean = true;
  // constructor(public dialog: MatDialog) {
  // this.openDialog()
  // }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     data: { title: '' },
  //     position: { top: '5px', bottom: '5px', left: '5px', right: '5px' }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}
