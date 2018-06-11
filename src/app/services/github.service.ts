import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username:string = 'bradtraversy'

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('//api.github.com/users/' + this.username)
      .pipe(map(res=> res))
  }

  getRepos() {
    return this.http.get('//api.github.com/users/' + this.username + '/repos')
      .pipe(map(res=> res))
  }

  updateUsername(username) {
    this.username = username;
  }
}
