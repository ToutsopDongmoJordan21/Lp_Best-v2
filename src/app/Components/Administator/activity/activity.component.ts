import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { machineInterface } from 'src/app/Interfaces/machineFirestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  // Profile Picture
  profilePicture = '../../../assets/index.jpg';
  
   machine: machineInterface[] = [];

  constructor( private router: Router,
              private firebase: FirestoreService) { }

  ngOnInit(): void {
    this.getMachineData();
  }

  getMachineData() {
    this.firebase.getData()
      .subscribe(data => {
        this.machine = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          } as machineInterface;
        });
      });
  }

  direct() {
    this.router.navigate(['/index']);
  }

}
