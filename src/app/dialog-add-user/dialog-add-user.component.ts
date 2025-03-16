import {ChangeDetectionStrategy, Component } from '@angular/core';
import {MatDialog, MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class'; 
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,MatButtonModule,MatDialogModule,FormsModule,MatProgressBarModule,CommonModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
 
})

export class DialogAddUserComponent {
user=new User();
birthDate: Date=new Date() ; 
loading=false;

private firestore: Firestore = inject(Firestore);
constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>) {}

saveUser() {
  this.loading=true;

  this.user.birthDate=this.birthDate.getTime();
  console.log('current user is',this.user);

  const usersCollection = collection(this.firestore, 'users');

  
  addDoc(usersCollection, { ...this.user })
    .then((result) => {
      this.loading=false;
      this.closeDialog();
      console.log('User added successfully:', result);
    })
    .catch((error) => {
      console.error('Error adding user:', error);
      this.loading = false;
        this.closeDialog();
    });
}
closeDialog(): void {
  this.dialogRef.close(); 
}

}