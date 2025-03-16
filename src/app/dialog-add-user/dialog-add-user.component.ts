import {ChangeDetectionStrategy, Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class'; 
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,MatButtonModule,MatDialogModule,FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
 
})

export class DialogAddUserComponent {
user=new User();
birthDate: Date=new Date() ; 

private firestore: Firestore = inject(Firestore);


saveUser() {

  this.user.birthDate=this.birthDate.getTime();
  console.log('current user is',this.user);

  const usersCollection = collection(this.firestore, 'users');

  
  addDoc(usersCollection, { ...this.user })
    .then((result) => {
      console.log('User added successfully:', result);
    })
    .catch((error) => {
      console.error('Error adding user:', error);
    });
}
}