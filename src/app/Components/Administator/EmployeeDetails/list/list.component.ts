import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  profilePicture = '../../../assets/index.jpg';

  user: User[] = [];

  constructor(private firebase: FirestoreService) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this.firebase.getUsers()
      .subscribe(data => {
        this.user = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          } as User;
        });
      });
  }

}
