import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, addDoc, doc, docData } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { User } from '../../models/user.class';



@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule,],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
userId='';
user:User=new User();
  constructor(private route: ActivatedRoute,){}

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
}
