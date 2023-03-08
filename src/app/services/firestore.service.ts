import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from '../Interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  usersRef!: AngularFirestoreCollection<User>

  constructor(private ngZone: NgZone, 
            private afAuth: AngularFireAuth, 
            private firestore: AngularFirestore , 
            private router: Router,
            private storage: AngularFireStorage,
            private tokenStorage: TokenStorageService) { }

 
  public currentUser: any;
  public userStatus!: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  // SignUp function

  signUp (username: string, role: string, location: string,  
          firstName: string, number: string, profession: string,
          email: string, password: string, country: string,date: Date, imageUrl: string) {

    this.afAuth.createUserWithEmailAndPassword(email, password)
       .then((userResponse) => {
        // add the user to the "users" database
        let user = {
          id: userResponse.user!.uid,
          email: userResponse.user!.email,
          username,
          role,
          password,
          location,
          firstName,
          number,
          profession,
          country,
          date,
          imageUrl,
        }

        // add the user to the database
        this.firestore.collection("users").add(user)
        .then(user => {
          user.get().then(x => {
            //return the user data
            console.log(x.data());
            this.currentUser = x.data();
            this.setUserStatus(this.currentUser);
            this.router.navigate(["/dashboard"]);
          })
        }).catch (err => {
          alert('Erreur lors de la création d\'un utilisateur!! réessyer plus tard...');
          console.log(err);
        })

      }) .catch((err)=> {
        console.log("An error occured: ", err);
      }) 
  }

  login(email: string, password: string) {
      
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user)=>{
        this.firestore.collection("users").ref.where("email", "==", user.user!.email)
          .onSnapshot(snap =>{
            console.log(user);
            snap.forEach(userRef => {
              console.log("userRef", userRef.data());
              this.currentUser = userRef.data();
              this.tokenStorage.saveUser(userRef.data());
              //setUserStatus  


              //j'ai changé je dois venir vérifier plus tard
              this.setUserStatus(this.currentUser)
              console.log("gehehejejejejejej", this.currentUser.role);
              if(this.currentUser.role.name == "Executive") {
                console.log("Admin connected");
                this.router.navigate(['dashboard']);
                alert( this.currentUser.firstName  + ' Admin is connected');
              }else{
                console.log("User connected");
                this.router.navigate(['employee']);
                alert(this.currentUser.firstName   +  ' is connected');
              }
            })
        })
      }).catch(err => {
        alert('Erreur lors de la connexion, Veillez entrez les bonnes informations ou recommencez plus tard!!');
        console.log("An error occur", err);
      })
  }

  logOut(){
    this.afAuth.signOut()
    .then(()=>{
      console.log("user signed Out successfully");
      //set current user to null to be logged out
      this.currentUser = null;
      //set the listenener to be null, for the UI to react
      this.setUserStatus(null);
      this.ngZone.run(() => this.router.navigate(["/login"]));

    }).catch((err) => {
      console.log(err);
    })
  }

  getAmazone() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('shopName', '==', 'Amazone')
      .where('shopName', '==', 'amazone')
      .where('shopName', '==', 'AMAZONE'))
      .snapshotChanges();
  }

  createMachine(shopName: string, shopLink: string, machinePrice: string, promoPrice: string,
                cpuModel: string, cpuSpeed: string, hdSize: string, RAMSize: string,
                graphicProcessor: string, refreshRate: string, screenSize: string, displayTechnology: string,
                productBrand: string, modelSeries: string, usbPorts: string, wifiConnectivity: string,
                pictureUrl: string, logoUrl: string, addedDate: Date, profession: string, createBy: string,
                number: string
              ) {
      let machine = {
        shopName, shopLink,machinePrice,promoPrice,cpuModel,cpuSpeed,hdSize,RAMSize,graphicProcessor,
        refreshRate, screenSize,displayTechnology,productBrand,modelSeries,usbPorts,
        wifiConnectivity,pictureUrl,logoUrl, addedDate, profession, createBy, number
      }
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('machineInterface')
        .add(machine)
        .then(response => {
          console.log(response)
          console.log(machine);
        }, error => reject(error));
    });
  }

  getApple() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('productBrand', '==', 'Apple')
      .where('productBrand', '==', 'APPLE')
      .where('productBrand', '==', 'apple'))
      .snapshotChanges();
  }

  getHP() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('productBrand', '==', 'HP')
      .where('productBrand', '==', 'hp'))
      .snapshotChanges();
  }

  getDell() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('productBrand', '==', 'Dell')
      .where('productBrand', '==', 'DELL'))
      .snapshotChanges();
  }

  getLenovo() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('productBrand', '==', 'Lenovo')
      .where('productBrand', '==', 'LENOVO'))
      .snapshotChanges();
  }

  getBeginnerSeries() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('cpuModel', '==', 'Intel I3'))
      .snapshotChanges();
  }

  getEducationSettings() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('modelSeries', '==', 'Dell xps')
      .where('RAMSize', '>=', '04GB'))
      .snapshotChanges();
  }

  getOfficeSeries() {
    return this.firestore.collection('machineInterface')
      .snapshotChanges();
  }

  getContentCreator() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('refreshRate', '<=', '90HZ'))
      .snapshotChanges();
  }

  getProgramming() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('RAMSize', '==', '08HZ'))
      .snapshotChanges();
  }

  getGamingSeries() {
    return this.firestore.collection('machineInterface', 
    ref => ref
      .where('refreshRate', '<=', '90HZ')
      .where('RAMSize', '==', '08GB'))
      .snapshotChanges();
  }

  getComputerInfos(id: string) {
    const itemDoc = this.firestore.doc<any>('machineInterface/' +id);
    return itemDoc.valueChanges();
  }

  getData() {
    return this.firestore 
      .collection("machineInterface")
      .snapshotChanges();
  }

  getUsers() {
    return this.firestore 
      .collection("users")
      .snapshotChanges();
  }


}
