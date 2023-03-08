import { Component, OnInit } from '@angular/core';
import { AddNewComponent } from '../EmployeeDetails/add-new/add-new.component';
import { ListComponent } from '../EmployeeDetails/list/list.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  // variables
  AddNew = "AddNew";
  List = "List";

  // Variable stores default component used for primary view.
  componentSwitcher: any = AddNewComponent;

  constructor() { }

  onCLick(component: any){
  	switch(component){
  		case 'AddNew' : this.componentSwitcher = AddNewComponent;
  			break;
		  case 'List' : this.componentSwitcher = ListComponent;
			  break;
		  default : this.componentSwitcher = AddNewComponent;
			  break;
  	}
  }

  ngOnInit(): void {
  }

}
