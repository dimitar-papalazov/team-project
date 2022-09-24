import { Injectable } from "@angular/core";

export class User{
    Id: number;
    FullName: string;
    FirstName: string;
    LastName: string;
    UserName: string;
    Email: string;
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
