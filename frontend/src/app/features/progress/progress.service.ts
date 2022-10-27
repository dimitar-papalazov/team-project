import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Workout } from '../workouts/models/workout';
import { Progress } from './models/progress';

@Injectable({
  providedIn: 'root'
})

export class ProgressService {

  progressChanges = new EventEmitter<any>();

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  getProgresses(): Observable<any> {
    const userId = this.localStorageService.getItem('currentUser').id
    return this.http.get<any>('http://localhost:3000/progresses/user/'+userId).pipe(map(data => {
        return data;
    }));
  }

  postProgress(progress: Progress): any{
    let tempuser = this.localStorageService.getItem('currentUser');
    progress.member = tempuser;
    return this.http.post<any>('http://localhost:3000/progresses/', progress).pipe(map(data => {
        return data;
    }));
  }

  putProgress(progress: Progress): any{
    const progressId = progress.id;
    return this.http.put<any>('http://localhost:3000/progresses/' + progress.id, {progress, progressId}).pipe(map(data => {
        return data;
    }));
  }

  deleteProgress(progressId: number): any{
    return this.http.delete<any>('http://localhost:3000/progresses/'+progressId).pipe(map(data => {
        return data;
    }));
  }
  
}