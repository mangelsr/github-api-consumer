import { Component, OnInit } from '@angular/core';
import { UserSearchService } from 'src/app/services/user-search.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  username = '';
  
  constructor(private userSearchService: UserSearchService) { }

  ngOnInit(): void {
  }

  searchUsername() {
    this.userSearchService.searchUser(this.username);
  }

}
