import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {
    private username = 'tblaymire94';
    private client_id = '3fb8ed85ad8953e84b86';
    private client_secret = '508eeb9ee0549f3b234cd3c0724ae7bab0a508aa';

    constructor (private _http:Http) {
        console.log('Github Service Initialised');
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username+'/repos')
            .map(res => res.json());
    }

    updateUsername(username:string) {
        this.username = username;
    }
}

/* 
    We want to return an observable that is a part of 
    RXJS 
    We create username property, client_id and client_secret

    To create an observable we create a function 
    then call this._http.get('api_url') we add the usernme we created
    in the top. We then use .map and set the response to be res.json();

    We then go into the component and subscribe to the observver.

*/ 