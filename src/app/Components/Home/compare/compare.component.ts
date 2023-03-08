import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { machineInterface } from 'src/app/Interfaces/machineFirestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  machine: machineInterface[] = [];
  // Profile Picture
  profilePicture = '../../../assets/xps13.jpg';

  whatapplogo = '../../../assets/10.png';

  constructor( private dialogRef: MatDialogRef<CompareComponent>,
                private firebaseService: FirestoreService,
        @Inject(MAT_DIALOG_DATA) public data:machineInterface) {
         }

  ngOnInit(): void {
    this.getMachineData();
    //console.log('dhhdhdhdhdhdhdhdh', this.data.shopName );
  }
  getMachineData() {
   this.firebaseService.getAmazone()
    .subscribe(data => {
      this.machine = data.map(e => {

        console.log(this.machine);
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          } as machineInterface;
        });
    });
  }


}
