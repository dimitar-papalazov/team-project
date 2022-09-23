import { Injectable } from "@angular/core";
import { Partner } from "./partner";

export class User{
    Id: number;
    FullName: string;
    FirstName: string;
    LastName: string;
    UserName: string;
    Email: string;
    UserPartners: Partner[];
    authToken?: string;
    idToken?: string;
    photoUrl?: string;
    provider?: string;
    isSocialuser: boolean;
}

export class ActivateUserModel {
    UserId : number;
    Token : string;
    Email : string;
    FullName : string;
    Password : string;
    PasswordConfirm : string;
}

export class UserPartnerModel {
    Id: number;
    UserId: number;
    PartnetId: number;
    PartnerModel: Partner;
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

export class UserInfoModel{
    FullName: string;
}
