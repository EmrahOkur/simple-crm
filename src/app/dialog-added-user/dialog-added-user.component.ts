
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Component({
  selector: 'app-dialog-added-user',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,MatButtonModule,FormsModule,MatProgressBarModule,CommonModule,MatInputModule,MatDatepickerModule],
  templateUrl: './dialog-added-user.component.html',
  styleUrl: './dialog-added-user.component.scss'
})
export class DialogAddedUserComponent implements OnInit {
  user: User = new User();
  loading=false;
  birthDate: Date=new Date() ; 
  userId:string='';

   private firestore: Firestore = inject(Firestore);
  constructor(
    public dialogRef: MatDialogRef<DialogAddedUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data?.user) {
      this.user = this.data.user;
  
      if (this.user.birthDate) {
        this.birthDate = new Date(this.user.birthDate); 
      } else {
        this.birthDate = new Date(); 
      }
    }
  }
  
  async saveUser() {
    this.loading = true;
    if (!this.userId) {
      console.error('Keine Benutzer-ID vorhanden');
      this.loading = false; 
      return;
    }
  
    try {
      const userDocRef = doc(this.firestore, 'users', this.userId);
      await updateDoc(userDocRef, { ...this.user });
  
      this.loading = false;
      this.dialogRef.close();
      console.log('Benutzer erfolgreich aktualisiert.');
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Benutzers:', error);
      this.loading = false;
    }
  }
}