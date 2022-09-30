import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SearchService } from '../search/search.service';
import { Plan } from './models/plan.model';

@Injectable({
  providedIn: 'root'
})

export class PlanService {

  constructor(private http: HttpClient) {}

  getPlans(keyword? : string): Observable<any> {
    //This keyword is optional, to call this method from search service and filter through results.
    return this.http.get<any>('http://localhost:4200/Plan').pipe(map(data => {
        if(keyword){
            return data.filter((plan: Plan) => 
                plan.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
            )
        }
        return data;
    }));
  }

  getPlan(planId: string) {
    return this.http.get('http://localhost:4200/Plan/planId='+planId).pipe(map(data => {
        return data;
    }));
  }

  postWorkout(plan: Plan): any{
    return this.http.post<any>('http://localhost:4200/Plan',plan).pipe(map(data => {
        return data;
    }));
  }

  putWorkout(plan: Plan): any{
    return this.http.put<any>('http://localhost:4200/Plan',plan).pipe(map(data => {
        return data;
    }));
  }

  deleteWorkout(planId: number): any{
    return this.http.delete<any>('http://localhost:4200/Plan/planId='+planId).pipe(map(data => {
        return data;
    }));
  }
  
}