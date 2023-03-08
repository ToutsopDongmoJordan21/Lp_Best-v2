import { Component, OnInit } from '@angular/core';
import { AppleComponent } from '../apple/apple.component';
import { CategoriesComponent } from '../categories/categories.component';
import { DellComponent } from '../dell/dell.component';
import { HPComponent } from '../hp/hp.component';
import { LenovoComponent } from '../lenovo/lenovo.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  // logo
  lichtDN = '../../../assets/light2.png'

  // 
  categoriesLogo = '../../../assets/categories.png'
  AppleLogo = '../../../assets/apple2.png'
  dellLogo = '../../../assets/dell.png'
  hpLogo = '../../../assets/hp.png'
  lenovoLogo = '../../../assets/lenovo.png'



  // variables
  categories = "categories"
  dell = "Activity"
  hp = "hp"
  lenovo = "lenovo"

  // Variable stores default component used for primary view.
  componentSwitcher: any = CategoriesComponent;

  constructor() { }

  onCLick(component: any){
  	switch(component){
  		case 'categories' : this.componentSwitcher = CategoriesComponent;
  			break;
      case 'apple' : this.componentSwitcher = AppleComponent;
        break;
		  case 'dell' : this.componentSwitcher = DellComponent;
			  break;
		  case 'hp' : this.componentSwitcher = HPComponent;
			  break;
      case 'lenovo' : this.componentSwitcher = LenovoComponent;
			  break;
		  default : this.componentSwitcher = CategoriesComponent;
			  break;
  	}
  }

  ngOnInit(): void {
  }

}
