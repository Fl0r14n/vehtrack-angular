import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {User} from './types/models'

@Injectable()
export class UserService {

  private endpoint = '/api/v1/user';

  constructor(protected http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.endpoint + '/').map(res => res.json());
  }
}
