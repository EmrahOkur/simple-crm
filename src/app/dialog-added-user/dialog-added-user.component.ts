
import { Component ,Inject,OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDialog, MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class'; 
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-added-user',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,MatButtonModule,FormsModule,MatProgressBarModule,CommonModule,MatInputModule,],
  templateUrl: './dialog-added-user.component.html',
  styleUrl: './dialog-added-user.component.scss'
})
export class DialogAddedUserComponent implements OnInit {
  user: User = new User();
  loading=false;
  
  constructor(public dialogRef: MatDialogRef<DialogAddedUserComponent>) {}

ngOnInit(): void {
  
}

saveUser(){

}
}
