import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Exercise } from './models/excercise';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Workout } from '../workouts/models/workout';

@Injectable({
  providedIn: 'root'
})

export class ExcerciseService {

  exerciseChanges = new EventEmitter<any>();

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  getExercises(keyword? : string): Observable<any> {
    //This keyword is optional, to call this method from search service and filter through results.
    return this.http.get<any>('http://localhost:3000/exercises').pipe(map(data => {
        if(keyword){
            return data.filter((exercises: Exercise) => 
                exercises.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
            )
        }
        return data;
    }));
  }

  getExercise(exerciseId: string) {
    return this.http.get('http://localhost:3000/exercises/'+exerciseId).pipe(map(data => {
        return data;
    }));
  }

  postExercise(exercise: Exercise): any{
    console.log(exercise)
    let tempuser = this.localStorageService.getItem('currentUser');
    return this.http.post<any>('http://localhost:3000/exercises?name='+ exercise.name + "&sets=" + exercise.sets + "&goal=" + exercise.goal_reps + "&url=" + exercise.url + "&userId=" + tempuser.id,{}).pipe(map(data => {
        return data;
    }));
  }

  putExercise(exercise: Exercise): any{
    return this.http.put<any>('http://localhost:3000/exercises',exercise).pipe(map(data => {
        return data;
    }));
  }

  deleteExercise(exerciseId: number): any{
    return this.http.delete<any>('http://localhost:4200/exercises/'+exerciseId).pipe(map(data => {
        return data;
    }));
  }
  
  addExerciseToWorkout(exerciseId: number, workoutId: number): any{

  }

  removeExerciseFromWorkout(exerciseId: number, workoutId: number): any{

  }
}