import { Component, OnInit } from '@angular/core';
import { BeginnerComponent } from '../CategoryOptions/beginner/beginner.component';
import { ContentCreatorComponent } from '../CategoryOptions/content-creator/content-creator.component';
import { EducationComponent } from '../CategoryOptions/education/education.component';
import { GammingComponent } from '../CategoryOptions/gamming/gamming.component';
import { OfficeComponent } from '../CategoryOptions/office/office.component';
import { ProgrammingComponent } from '../CategoryOptions/programming/programming.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  // variables
  beginner = "beginner"
  office = "office"
  education = "education"
  content = "content"
  programming = "programming"
  gamming = "gamming"

  // Variable stores default component used for primary view.
  componentSwitcher: any = BeginnerComponent;

  constructor() { }

  onCLick(component: any){
  	switch(component){
  		case 'beginner' : this.componentSwitcher = BeginnerComponent;
  			break;
		  case 'office' : this.componentSwitcher = OfficeComponent;
			  break;
		  case 'education' : this.componentSwitcher = EducationComponent;
			  break;
      case 'content' : this.componentSwitcher = ContentCreatorComponent;
			  break;
      case 'programming' : this.componentSwitcher = ProgrammingComponent;
			  break;
      case 'gamming' : this.componentSwitcher = GammingComponent;
			  break;
		  default : this.componentSwitcher = BeginnerComponent;
			  break;
  	}
  }

  ngOnInit(): void {
  }

}
