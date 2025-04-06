import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, addDoc, doc, docData } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { User } from '../../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddedAddressComponent } from '../dialog-added-address/dialog-added-address.component';
import { DialogAddedUserComponent } from '../dialog-added-user/dialog-added-user.component';



@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatButtonModule,MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
userId='';
user:User=new User();
  constructor(private route: ActivatedRoute,private dialog: MatDialog){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap =>{
      this.userId=paramMap.get('id') || '';
      console.log('Got Id', this.userId);
      this.getUser();
    })
  }

  getUser() {
    const userDocRef = doc(this.firestore, 'users', this.userId); 
    docData(userDocRef).subscribe((userData: any) => {
      this.user = new User(userData);
      console.log('Retrieved User', userData)
    });
  }

  openAddressDialog(){

  }

  editUserMenu(){
    const dialog=this.dialog.open(DialogAddedUserComponent)
    dialog.componentInstance.user=this.user;

  }

  editMenu(){
    const dialog=this.dialog.open(DialogAddedAddressComponent)
    dialog.componentInstance.user=this.user;
  }
}


