import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html',
    providers: [GithubService]
})
export class GithubComponent {
    user: any;
    repos: any;
    username: string;

    constructor(private _githubService: GithubService) {
        console.log('Github Component Init...');
    }

    search() {
        this._githubService.updateUsername(this.username);

        // This is how we call the getData function from the service
        this._githubService.getUser().subscribe(user => {
            //console.log(users);
            this.user = user;
            // We set the user property to the response
        });


        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }

    ngOnInit() { }
}