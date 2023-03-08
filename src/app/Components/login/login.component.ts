import { Component, Directive, Injectable, OnInit } from '@angular/core';

// Import for Error Management
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  illustration = '../../../assets/1x.png'
  lichtDN = '../../../assets/light2.png'

  loginForm!: FormGroup;

  // form validator for Email
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);

  ngOnInit() {
     this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
             email: ['', [Validators.required, Validators.email]],
             password: ['', [Validators.required, Validators.minLength(4)]],

    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // Password
  hide = true;

  constructor(private firebaseService: FirestoreService,
              private formBuilder: FormBuilder) { }

  login() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    this.firebaseService.login(email, password);
    this.loginForm.reset();
  }


}
