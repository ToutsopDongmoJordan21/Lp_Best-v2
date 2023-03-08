import { Component, OnInit } from '@angular/core';
import { machineInterface } from 'src/app/Interfaces/machineFirestore';
import { FirestoreService } from 'src/app/services/firestore.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ActivitysComponent } from '../../Administator/activitys/activitys.component';
import { HomePageViewComponent } from '../home-page-view/home-page-view.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // logo
  lichtDN = '../../../assets/light2.png'
  // Profile Picture
  profilePicture = '../../../assets/index.jpg'

  // variables
  Dashboard = "Dashboard"
  Activity = "Activity"
  CreateUsers = "CreateUsers"

  // Variable stores default component used for primary view.
  componentSwitcher: any = HomePageViewComponent;

  // Rifht expantion Panel
  panelOpenState = false;
   currentUser: any;

    machine: machineInterface[] = [];

  constructor(private firebase: FirestoreService,
                private token: TokenStorageService) { }

  onCLick(component: any){
  	switch(component){
  		case 'Dashboard' : this.componentSwitcher = HomePageViewComponent;
  			break;
		  case 'Activity' : this.componentSwitcher = ActivitysComponent;
			  break;
		  default : this.componentSwitcher = HomePageViewComponent;
			  break;
  	}
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
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

  logout() {
    this.firebase.logOut();
  }

}
