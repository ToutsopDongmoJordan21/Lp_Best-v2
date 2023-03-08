import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './../../../services/firestore.service';
import { FormControlService } from 'src/app/services/form-control.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { machineInterface } from 'src/app/Interfaces/machineFirestore';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  profilePicture = '../../assets/index.jpg';

  currentUser: any;

  machineForm!: FormGroup;

  fb: any;
  fc: any;

  downloadURL!: Observable<string>;
  downloadURLX!: Observable<string>;
  
  url?: string;

  get shopNameControl() {
     return this.machineForm.get('shopName') as FormControl;
   }
  get shopLinkControl() {
     return this.machineForm.get('shopLink') as FormControl;
   }
  get machinePriceControl() {
     return this.machineForm.get('machinePrice') as FormControl;
   }
  get promoPriceControl() {
     return this.machineForm.get('promoPrice') as FormControl;
   }
  get cpuModelControl() {
     return this.machineForm.get('cpuModel') as FormControl;
   }
  get cpuSpeedControl() {
     return this.machineForm.get('cpuSpeed') as FormControl;
   }
  get hdSizeControl() {
     return this.machineForm.get('hdSize') as FormControl;
   }
  get RAMSizeControl() {
     return this.machineForm.get('RAMSize') as FormControl;
   }
  get graphicProcessorControl() {
     return this.machineForm.get('graphicProcessor') as FormControl;
   }
  get refreshRateControl() {
     return this.machineForm.get('refreshRate') as FormControl;
   }
  get screenSizeControl() {
     return this.machineForm.get('screenSize') as FormControl;
   }
  get displayTechnologyControl() {
     return this.machineForm.get('displayTechnology') as FormControl;
   }
  get productBrandControl() {
     return this.machineForm.get('productBrand') as FormControl;
   }
  get modelSeriesControl() {
     return this.machineForm.get('modelSeries') as FormControl;
   }
  get usbPortsControl() {
     return this.machineForm.get('usbPorts') as FormControl;
   }
  get wifiConnectivityControl() {
     return this.machineForm.get('wifiConnectivity') as FormControl;
   }

  
  // Password
  hide = true;
  constructor(private firebaseService: FirestoreService,
              private formBuilder: FormBuilder,
              private storage: AngularFireStorage,
              private token: TokenStorageService,
              private service: FormControlService) { }

  ngOnInit() {
     this.initForm();
    this.currentUser = this.token.getUser();
  }

  initForm() {
    this.machineForm = this.formBuilder.group({
      shopName: ['', [Validators.required, Validators.minLength(3)]],
      shopLink: ['', [Validators.required, Validators.minLength(3)]],
      machinePrice: ['', [Validators.required, Validators.minLength(1)]],
      promoPrice: ['', [Validators.required, Validators.minLength(1)]],
      cpuModel: ['', [Validators.required, Validators.minLength(3)]],
      cpuSpeed: ['', [Validators.required, Validators.minLength(3)]],
      hdSize: ['', [Validators.required, Validators.minLength(1)]],
      RAMSize: ['', [Validators.required, Validators.minLength(2)]],
      graphicProcessor: ['', [Validators.required, Validators.minLength(3)]],
      refreshRate: ['', [Validators.required, Validators.minLength(2)]],
      screenSize: ['', [Validators.required, Validators.minLength(5)]],
      displayTechnology: ['', [Validators.required, Validators.minLength(2)]],
      productBrand: ['', [Validators.required, Validators.minLength(1)]],
      modelSeries: ['', [Validators.required, Validators.minLength(3)]],
      usbPorts: ['', [Validators.required, Validators.minLength(1)]],
      wifiConnectivity: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  // For the clear Button. Once clicked it clears the elements
  onClear () {
    this.machineForm.reset();

    this.service.initializeFormGroup();
  }

  onFileSelected(event: any) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `article_image/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`article_image/${n}`, file);
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURLX = fileRef.getDownloadURL();
          this.downloadURLX.subscribe(url => {
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


  onFileSelectedx(event: any) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `logo_image/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`logo_image/${n}`, file);
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURLX = fileRef.getDownloadURL();
          this.downloadURLX.subscribe(url => {
            if (url) {
              this.fc = url;
            }
            console.log(this.fc);
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
    const shopName = this.machineForm.get('shopName')!.value;
    const shopLink = this.machineForm.get('shopLink')!.value;
    const machinePrice = this.machineForm.get('machinePrice')!.value;
    const promoPrice = this.machineForm.get('promoPrice')!.value;
    const cpuModel = this.machineForm.get('cpuModel')!.value;
    const cpuSpeed = this.machineForm.get('cpuSpeed')!.value;
    const hdSize = this.machineForm.get('hdSize')!.value;
    const RAMSize = this.machineForm.get('RAMSize')!.value;
    const graphicProcessor = this.machineForm.get('graphicProcessor')!.value;
    const refreshRate = this.machineForm.get('refreshRate')!.value;
    const screenSize = this.machineForm.get('screenSize')!.value;
    const displayTechnology = this.machineForm.get('displayTechnology')!.value;
    const productBrand = this.machineForm.get('productBrand')!.value;
    const modelSeries = this.machineForm.get('modelSeries')!.value;
    const usbPorts = this.machineForm.get('usbPorts')!.value;
    const wifiConnectivity = this.machineForm.get('wifiConnectivity')!.value;
     const addedDate = new Date();
     const profession = this.currentUser.profession;
     const createBy = this.currentUser.username;
     const number = this.currentUser.number;


    console.log(this.fb);
    console.log(this.fc);

    if(this.fb && this.fb !== '') {
      const pictureUrl = this.fb;
      console.log('l\'url est' + pictureUrl);

    if(this.fc && this.fc !== '') {
      const logoUrl = this.fc;
      console.log('l\'url est' + logoUrl);

      this.firebaseService.createMachine(shopName,shopLink,machinePrice,promoPrice,cpuModel,cpuSpeed,
                        hdSize,RAMSize, graphicProcessor, refreshRate, screenSize, displayTechnology,productBrand,
                        modelSeries,usbPorts, wifiConnectivity,pictureUrl,logoUrl,addedDate, profession, createBy, number);
      alert('La machine a été crée avec success!!');
      } else {
      alert ('Erreur de fichier uploadé!! réessayer plus tard ou probléme de connexion!!')
    }
    
    this.machineForm.reset();
  }

  } 
}