import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatTooltipModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private dialog: MatDialog) {}
openDialog(){
  this.dialog.open(DialogAddUserComponent)

}
user=new User();


}
