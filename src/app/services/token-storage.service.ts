import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_IMAGE = 'user-image';
const USER_KEY = 'auth-user';
const CLIENT_KEY = 'auth-client';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  // Save date of the user into the token when he is connected

  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // Save date of the client into the token when he is connected

  public saveClient(client: any) {
    window.sessionStorage.removeItem(CLIENT_KEY);
    window.sessionStorage.setItem(CLIENT_KEY, JSON.stringify(client));
  }

  // Get data of the user when it is connected

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY)!);
  }

  // Get data of the client when it is connected

  public getClient() {
    return JSON.parse(sessionStorage.getItem(CLIENT_KEY)!);
  }
}
