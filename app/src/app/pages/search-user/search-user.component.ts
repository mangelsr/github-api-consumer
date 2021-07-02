import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UserSearchService } from 'src/app/services/user-search.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  username = '';
  
  constructor(private userSearchService: UserSearchService) { }

  ngOnInit(): void { }

  searchUsername() {
    this.userSearchService.searchUser(this.username);
  }

  get user(): User|undefined {
    return this.userSearchService.user;
  }

  get loading(): boolean {
    return this.userSearchService.loading;
  }

  get error(): string {
    return this.userSearchService.error;
  }

}
