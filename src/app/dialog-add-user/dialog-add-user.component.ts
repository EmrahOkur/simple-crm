import {ChangeDetectionStrategy, Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class'; 
import { FormsModule } from '@angular/forms';


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



saveUser() {

  this.user.birthDate=this.birthDate.getTime();
  console.log('current user is',this.user);
  }
}