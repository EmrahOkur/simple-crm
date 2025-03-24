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
import { Firestore, FirestoreModule, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { inject, OnInit } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatTooltipModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCardModule,CommonModule,FirestoreModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})



export class UserComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  allUsers$!: Observable<any[]>;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    const usersCollection = collection(this.firestore, 'users');
    this.allUsers$ = collectionData(usersCollection); 
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  user = new User();
}