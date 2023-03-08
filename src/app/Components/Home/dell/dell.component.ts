import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { machineInterface } from 'src/app/Interfaces/machineFirestore';
import { FirestoreService } from 'src/app/services/firestore.service';
import { CompareComponent } from '../compare/compare.component';

@Component({
  selector: 'app-dell',
  templateUrl: './dell.component.html',
  styleUrls: ['./dell.component.scss']
})
export class DellComponent implements OnInit {

  machine: machineInterface[] = [];

  // Profile Picture
  profilePicture = '../../../assets/xps13.jpg'
  constructor( private dialog: MatDialog,
              private firebaseService: FirestoreService ) { }

  ngOnInit(): void {
     this.getMachineData();
  }

  getMachineData() {
    this.firebaseService.getDell()
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

  onBuy(){
    const dialogConfig = new MatDialogConfig();
      // dialogConfig.disableClose = true;
      // dialogConfig.autoFocus = true; // First Focusable element insode the window gets the Focus
    this.dialog.open(CompareComponent, dialogConfig);
  }
}
