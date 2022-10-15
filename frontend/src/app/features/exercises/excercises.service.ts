import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Exercise } from './models/excercise';

@Injectable({
  providedIn: 'root'
})

export class ExcerciseService {

  constructor(private http: HttpClient) {}

  getExercises(keyword? : string): Observable<any> {
    //This keyword is optional, to call this method from search service and filter through results.
    return this.http.get<any>('http://localhost:4200/exercises').pipe(map(data => {
        if(keyword){
            return data.filter((exercises: Exercise) => 
                exercises.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
            )
        }
        return data;
    }));
  }

  getExercise(exerciseId: string) {
    return this.http.get('http://localhost:4200/exercises/'+exerciseId).pipe(map(data => {
        return data;
    }));
  }

  postExercise(name: string, sets: number, goal_reps: number, goal_time: number, goal_weight: number, goal_distance: number, url: string, user_id: number, workout_id: number): any{
    return this.http.post<any>('http://localhost:4200/exercises',{name,sets,goal_reps,goal_time,goal_weight,goal_distance,url,user_id,workout_id}).pipe(map(data => {
        return data;
    }));
  }

  putExercise(exercise: Exercise): any{
    return this.http.put<any>('http://localhost:4200/exercises',exercise).pipe(map(data => {
        return data;
    }));
  }

  deleteexercises(exerciseId: number): any{
    return this.http.delete<any>('http://localhost:4200/exercises/'+exerciseId).pipe(map(data => {
        return data;
    }));
  }
  
  addExerciseToWorkout(exerciseId: number, workoutId: number){

  }
}