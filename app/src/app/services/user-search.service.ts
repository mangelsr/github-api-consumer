import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor() { }

  searchUser(username: String) {
    console.log(username);
  }
}
