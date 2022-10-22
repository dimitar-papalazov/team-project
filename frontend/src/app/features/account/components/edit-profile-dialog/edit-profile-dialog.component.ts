import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AccountService } from '../../account.service';
import { EditProfileDialogService } from './service/edit-profile-dialog.service';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss'],
})
export class EditProfileDialogComponent implements OnInit {

  name: string = '';
  email: string = '';
  photoUrl: string = '';
  age: number = 0;
  height: number = 0;
  weight: number = 0;
  
  constructor(
    private readonly matDialogRef: MatDialogRef<EditProfileDialogComponent>,
    private readonly editProfileDialogService: EditProfileDialogService,
    private accountService: AccountService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.matDialogRef.close();
  }

  save(){
    let tempuser = this.localStorageService.getItem('currentUser');
    const user = new User();
    user.id = tempuser.id;
    user.email = this.email;
    user.name = this.name;
    user.age = +this.age;
    user.weight = +this.weight;
    user.height = +this.height;
    user.password = '';
    user.exercises = [];
    user.progresses = [];
    user.workouts = [];

    this.accountService.putMember(user).subscribe(data => {
      this.accountService.userChanges.emit();
      this.matDialogRef.close();
    })
  }
}
