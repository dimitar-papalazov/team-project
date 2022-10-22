import { Injectable } from "@angular/core";
import { Exercise } from "src/app/features/exercises/models/excercise";
import { Plan } from "src/app/features/plan/models/plan.model";
import { Workout } from "src/app/features/workouts/models/workout";
import { progress } from "./progress";

export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    height: number;
    weight: number;
    age: number;
    exercises: Exercise[];
    workouts: Workout[];
    progresses: progress[];
}

export class ForgotPasswordModel{
    UserId : number;
    Token : string;
    Email : string;
    Password : string;
    PasswordConfirm : string;
}

export class ChangePasswordModel{
    CurrentPassword: string;
    NewPassword: string;
    ConfirmPassword: string;
}
