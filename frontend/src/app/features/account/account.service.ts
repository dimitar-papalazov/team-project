import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  userChanges = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  getMember(memberId: number){
    return this.http.get('http://localhost:3000/users/'+memberId).pipe(map(data => {
        return data;
    }));
  }

  putMember(user: User): any{
    console.log(user)
    return this.http.put<any>('http://localhost:3000/users/',user).pipe(map(data => {
        return data;
    }));
  }
  
}