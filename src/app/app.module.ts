import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

// Firebase

import { environment } from '../environments/environment';

import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// Administrator Components
import { DashboardComponent } from './Components/Administator/dashboard/dashboard.component';
import { DashboardViewComponent } from './Components/Administator/dashboard-view/dashboard-view.component';
import { ActivityComponent } from './Components/Administator/activity/activity.component';
import { CreateUserComponent } from './Components/Administator/create-user/create-user.component';

// Employee Components
import { AddNewComponent } from './Components/Administator/EmployeeDetails/add-new/add-new.component';
import { ListComponent } from './Components/Administator/EmployeeDetails/list/list.component';
import { HomePageComponent } from './Components/Employee/home-page/home-page.component';
import { HomePageViewComponent } from './Components/Employee/home-page-view/home-page-view.component';

// Home Page
import { IndexComponent } from './Components/Home/index/index.component';

// Sub Categories within home page
import { CategoriesComponent } from './Components/Home/categories/categories.component';
import { DellComponent } from './Components/Home/dell/dell.component';
import { HPComponent } from './Components/Home/hp/hp.component';
import { LenovoComponent } from './Components/Home/lenovo/lenovo.component';

// Different available categories
import { BeginnerComponent } from './Components/Home/CategoryOptions/beginner/beginner.component';
import { OfficeComponent } from './Components/Home/CategoryOptions/office/office.component';
import { EducationComponent } from './Components/Home/CategoryOptions/education/education.component';
import { ContentCreatorComponent } from './Components/Home/CategoryOptions/content-creator/content-creator.component';
import { ProgrammingComponent } from './Components/Home/CategoryOptions/programming/programming.component';
import { GammingComponent } from './Components/Home/CategoryOptions/gamming/gamming.component';
import { AppleComponent } from './Components/Home/apple/apple.component';

// Angular Material Components
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

// import { MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { PopUpComponent } from './Components/Home/pop-up/pop-up.component';
import { CompareComponent } from './Components/Home/compare/compare.component';

// Services
import { FormControlService } from './services/form-control.service';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivitysComponent } from './Components/Administator/activitys/activitys.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    // Administrator Panel
    DashboardComponent,
    DashboardViewComponent,
    ActivityComponent,
    CreateUserComponent,
    AddNewComponent,
    ListComponent,
    HomePageComponent,
    HomePageViewComponent,
    IndexComponent,
    CategoriesComponent,
    DellComponent,
    HPComponent,
    LenovoComponent,
    BeginnerComponent,
    OfficeComponent,
    EducationComponent,
    ContentCreatorComponent,
    ProgrammingComponent,
    GammingComponent,
    AppleComponent,
    PopUpComponent,
    CompareComponent,
    ActivitysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    // MatRadioButton,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatStepperModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    // AngularFireDatabase, // For the Real time database

    // Forms
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [FormControlService],
  bootstrap: [AppComponent],
  entryComponents: [CompareComponent]
})
export class AppModule { }
