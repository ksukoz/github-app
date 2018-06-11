import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:any;

  constructor(private githubService: GithubService) { 
    this.githubService.getUser()
  }

  ngOnInit() {
  }

}
