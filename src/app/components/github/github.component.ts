import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';
import 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:any;
  repos:any;

  constructor(private githubService: GithubService) { 
    this.githubService.getUser().subscribe(user => this.user = user);
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos
      console.log(this.repos)
    });
  }

  ngOnInit() {
  }

}
