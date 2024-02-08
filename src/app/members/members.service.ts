import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http:HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>('assets/members.json');
  }
}
