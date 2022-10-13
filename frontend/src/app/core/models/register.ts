export class RegisterResponseData {
	EmailSent: boolean;
    Message: string;
}

export class registerData{
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    height?: number;
    weight?: number;
    age?: number;
}