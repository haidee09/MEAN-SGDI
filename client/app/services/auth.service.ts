import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models-data/usuarios/user';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  token: string;
  typeuser:boolean;
  private base_url = 'http://localhost:3500';
  private userSource = new Subject<User>();
  user$ = this.userSource.asObservable();

  constructor(public http: Http) { }

  setUser(user: User) {
    this.userSource.next(user);
  }

  registerUser(user: User): Observable<boolean> {
    let body = JSON.stringify(user);
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.base_url}/register`, body, options)
    .map((res) => this.setToken(res));
  }

  loginUser(user): Observable<Object> {
    let body = JSON.stringify(user);
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.base_url}/login`, body, options)
    .map((res) => this.setToken(res));
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  whoisLogged():string{
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(user!=null){
      return user['name'];
    }
  }

  verify(): Observable<Object> {
    let currUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = ( currUser && 'token' in currUser) ? currUser.token : this.token;
    let headers = new Headers({ 'x-access-token': token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.base_url}/check-state`, options)
    .map( res => this.parseRes(res) );
  }

  setToken(res){
    let body = JSON.parse(res['_body']);
    if( body['success'] == true ){
      this.token = body['token'];
      this.typeuser = body['admin'];
      localStorage.setItem('currentUser', JSON.stringify({
        name: body['user']['name'],
        token: this.token,
        admin: this.typeuser
      }));
    }
    console.log(this.token);
    return body;
  }

  parseRes(res){
    let body = JSON.parse(res['_body']);
    return body;
  }

}
