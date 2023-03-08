import { Component, OnInit } from '@angular/core';
import { machineInterface } from 'src/app/Interfaces/machineFirestore';
import { FirestoreService } from 'src/app/services/firestore.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ActivityComponent } from '../activity/activity.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { DashboardViewComponent } from '../dashboard-view/dashboard-view.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // logo
  lichtDN = '../../../assets/light2.png'
  // Profile Picture
  profilePicture = '../../../assets/index.jpg'

  // variables
  Dashboard = "Dashboard"
  Activity = "Activity"
  CreateUsers = "CreateUsers"

  // Variable stores default component used for primary view.
  componentSwitcher: any = DashboardViewComponent;

  // Rifht expantion Panel
  panelOpenState = false;
  currentUser: any;

   machine: machineInterface[] = [];

  constructor( private firebase: FirestoreService,
                private token: TokenStorageService) { }

  onCLick(component: any){
  	switch(component){
  		case 'Dashboard' : this.componentSwitcher = DashboardViewComponent;
  			break;
		  case 'Activity' : this.componentSwitcher = ActivityComponent;
			  break;
		  case 'CreateUsers' : this.componentSwitcher = CreateUserComponent;
			  break;
		  default : this.componentSwitcher = DashboardViewComponent;
			  break;
  	}
  }

  ngOnInit(): void {
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