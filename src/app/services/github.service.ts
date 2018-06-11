import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username:string = 'ksukoz'

  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get('https://api.github.com/users/' + this.username)
  }
}
