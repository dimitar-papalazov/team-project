import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Workout } from './models/workout';
import { SearchService } from '../search/search.service';

@Injectable({
  providedIn: 'root'
})

export class WorkoutsService {

  editMode = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getWorkouts(keyword? : string): Observable<any> {
    //This keyword is optional, to call this method from search service and filter through results.
    return this.http.get<any>('http://localhost:3000/workouts').pipe(map(data => {
        if(keyword){
            return data.filter((workout: Workout) => 
                workout.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
            )
        }
        return data;
    }));
  }

  getWorkout(workoutId: string, userId: number) {
    return this.http.get('http://localhost:3000/workouts/'+workoutId).pipe(map(data => {
        return data;
    }));
  }

  postWorkout(name: string, userId: number, planId: number): any{
    return this.http.post<any>('http://localhost:3000/workouts',{name,userId,planId}).pipe(map(data => {
        return data;
    }));
  }

  putWorkout(workout: Workout): any{
    return this.http.put<any>('http://localhost:3000/workouts',workout).pipe(map(data => {
        return data;
    }));
  }

  deleteWorkout(workoutId: number): any{
    return this.http.delete<any>('http://localhost:3000/workouts/'+workoutId).pipe(map(data => {
        return data;
    }));
  }
  
}