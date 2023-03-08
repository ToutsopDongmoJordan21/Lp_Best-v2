import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    articleImg: new FormControl('', Validators.required),
    shopLogo: new FormControl('', Validators.required),
    shopName: new FormControl('', Validators.required),
    shopLink: new FormControl('', Validators.required),
    machinePrice: new FormControl('', Validators.required),
    promoPrice: new FormControl(''),
    cpuModel: new FormControl('', Validators.required),
    cpuSpeed: new FormControl('', Validators.required),
    hdSize: new FormControl('', Validators.required),
    RAMSize: new FormControl('', Validators.required),
    graphicProcessor: new FormControl('', Validators.required),
    refreshRate: new FormControl('', Validators.required),
    screenSize: new FormControl('', Validators.required),
    displayTechnology: new FormControl(''),
    productBrand: new FormControl('', Validators.required),
    modelSeries: new FormControl('', Validators.required),
    usbPorts: new FormControl(''),
    wifiConnectivity: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      articleImg: '',
      shopLogo: '',
      shopName: '',
      shopLink: '',
      machinePrice: '',
      promoPrice: '',
      cpuModel: '',
      cpuSpeed: '',
      hdSize: '',
      RAMSize: '',
      graphicProcessor: '',
      refreshRate: '',
      screenSize: '',
      displayTechnology: '',
      productBrand: '',
      modelSeries: '',
      usbPorts: '',
      wifiConnectivity: ''
    })
  }
}
