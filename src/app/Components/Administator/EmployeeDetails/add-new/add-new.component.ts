import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, finalize } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  profilePicture = '../../../assets/index.jpg';

  currentUser: any;

  role : any[] = [
    { name: "Employee"},
    { name: "Executive"}
  ];

  signUpForm!: FormGroup;

  fileIsUploading = false;
  fileUploaded = false;

  selectedFile!: File;

  fb: any;

  downloadURL!: Observable<string>;
  
  url?: string;

  get usernameControl() {
    return this.signUpForm.get('username') as FormControl;
  }
  get locationControl() {
    return this.signUpForm.get('location') as FormControl;
  }
  get firstNameControl() {
    return this.signUpForm.get('firstName') as FormControl;
  }
  get numberControl() {
    return this.signUpForm.get('number') as FormControl;
  }
  get professionControl() {
    return this.signUpForm.get('profession') as FormControl;
  }
  get emailControl() {
    return this.signUpForm.get('email') as FormControl;
  }
  get passwordControl() {
    return this.signUpForm.get('password') as FormControl;
  }
  get countryControl() {
    return this.signUpForm.get('country') as FormControl;
  }
  
  // Password
  hide = true;
  constructor(private firebaseService: FirestoreService,
              private formBuilder: FormBuilder,
              public router: Router,
              private storage: AngularFireStorage,
              private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', [Validators.required, Validators.minLength]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      number: ['', [Validators.required, Validators.minLength(3)]],
      profession: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      
    });
  }

  onFileSelected(event: any) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `LP-Best/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`LP-Best/${n}`, file);
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log( url);
        }
      });
  }

  onSubmit() {
    const username = this.signUpForm.get('username')!.value;
    const role = this.signUpForm.get('role')!.value;
    const location = this.signUpForm.get('location')!.value;
    const firstName = this.signUpForm.get('firstName')!.value;
    const number = this.signUpForm.get('lastName')!.value;
    const profession = this.signUpForm.get('profession')!.value;
    const email = this.signUpForm.get('email')!.value;
    const password = this.signUpForm.get('password')!.value;
    const country = this.signUpForm.get('country')!.value;
    const date = new Date();

    console.log(this.fb);

    if(this.fb && this.fb !== '') {
      const imageUrl = this.fb;
      console.log('l\'url est' + imageUrl);

      this.firebaseService.signUp(username,role,location,firstName,number,profession,email,password,country,date,imageUrl);
      alert('L\'utilisateur à été créer avec success');
      this.signUpForm.reset();
      } else {
      alert ('Erreur de fichier uploadé!! réessayer plus tard ou probléme de connexion!!')
    } 
  }

}
