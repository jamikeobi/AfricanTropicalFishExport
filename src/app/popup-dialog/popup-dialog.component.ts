import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css']
})
export class PopupDialogComponent {

  constructor(public dialogRef: MatDialogRef<PopupDialogComponent>) { }

  closeDialog(): void{
    this.dialogRef.close();
  }
}
