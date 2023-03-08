import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { machineInterface } from 'src/app/Interfaces/machineFirestore';
import { FirestoreService } from 'src/app/services/firestore.service';
import { CompareComponent } from '../../compare/compare.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  machine: machineInterface[] = [];
  mach!:[];

  // Profile Picture
  profilePicture = '../../../assets/MacBook-Pro-2021.webp'
  constructor( private dialog: MatDialog,
              private firebaseService: FirestoreService ) { }

  ngOnInit(): void {
    this.getMachineData();
  }

  getMachineData() {
    this.firebaseService.getEducationSettings()
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

  onBuy(id:string){
    // Create a dialog config object
    const dialogConfig = new MatDialogConfig();

    this.firebaseService.getComputerInfos(id).subscribe((response) => {
      this.mach = response;
      dialogConfig.data = this.mach;
      console.log("AFTER CLOSED123456", this.mach);
    
   this.dialog.open(CompareComponent, dialogConfig);

    });

  }

}
