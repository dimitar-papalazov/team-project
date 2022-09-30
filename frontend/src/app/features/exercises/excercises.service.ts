import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Excercise } from './models/excercise';

@Injectable({
  providedIn: 'root'
})

export class ExcerciseService {

  constructor(private http: HttpClient) {}

  getExcercises(keyword? : string): Observable<any> {
    //This keyword is optional, to call this method from search service and filter through results.
    return this.http.get<any>('http://localhost:4200/Excercises').pipe(map(data => {
        if(keyword){
            return data.filter((excercise: Excercise) => 
                excercise.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
            )
        }
        return data;
    }));
  }

  getExcercise(excerciseId: string) {
    return this.http.get('http://localhost:4200/Excercise/excerciseId='+excerciseId).pipe(map(data => {
        return data;
    }));
  }

  postExcercise(excercise: Excercise): any{
    return this.http.post<any>('http://localhost:4200/Excercise',excercise).pipe(map(data => {
        return data;
    }));
  }

  putExcercise(excercise: Excercise): any{
    return this.http.put<any>('http://localhost:4200/Excercise',excercise).pipe(map(data => {
        return data;
    }));
  }

  deleteExcercise(excerciseId: number): any{
    return this.http.delete<any>('http://localhost:4200/Excercise/excerciseId='+excerciseId).pipe(map(data => {
        return data;
    }));
  }
  
}