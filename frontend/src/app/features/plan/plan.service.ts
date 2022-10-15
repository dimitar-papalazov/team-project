import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { SearchService } from '../search/search.service';
import { Plan } from './models/plan.model';

@Injectable({
  providedIn: 'root'
})

export class PlanService {

  editMode = new BehaviorSubject<boolean>(false);
  plansChanges = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  getPlans(keyword? : string): Observable<any> {
    //This keyword is optional, to call this method from search service and filter through results.
    return this.http.get<any>('http://localhost:3000/plans').pipe(map(data => {
        if(keyword){
            return data.filter((plan: Plan) => 
                plan.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
            )
        }
        return data;
    }));
  }

  getPlan(planId: string) {
    return this.http.get('http://localhost:3000/plans/'+planId).pipe(map(data => {
        return data;
    }));
  }

  postPlan(name: string, user_id: number): any{
    return this.http.post<any>('http://localhost:3000/plans',{name, user_id}).pipe(map(data => {
        return data;
    }));
  }

  putPlan(plan: Plan): any{
    return this.http.put<any>('http://localhost:3000/plans/'+plan.id,plan).pipe(map(data => {
        return data;
    }));
  }

  deletePlan(planId: number): any{
    return this.http.delete<any>('http://localhost:3000/plans/'+planId).pipe(map(data => {
        return data;
    }));
  }

  removeWorkoutFromPlan(planId: number, workoutId: number): any{

  }
  
}