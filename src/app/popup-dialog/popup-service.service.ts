import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from './popup-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PopupServiceService {

  constructor(private dialog: MatDialog) { }

  openPopUpMessage(): void{
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
}
