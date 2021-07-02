import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../models/repository.model';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  BASE_URL = 'https://api.github.com';
  loading = false;
  error = '';
  user: User | undefined;

  constructor(private http: HttpClient) { }

  async searchUser(username: String) {
    try {
      this.loading = true;
      this.user = undefined;
      this.error = '';
      this.user = await this.http.get<User>(`${this.BASE_URL}/users/${username}`).toPromise();
      const repos = await this.http.get<Repository[]>(`${this.user.repos_url}`).toPromise();
    } catch (err) {
      this.error = err.error.message;
    } finally {
      this.loading = false;
    }
  }
}
