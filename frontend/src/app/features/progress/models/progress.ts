import { User } from "src/app/core/models/user";

export class Progress {
    public id: number;
	public d: Date;
    public val: number;
    public t: ProgressType;
    public member: User;
}

export enum ProgressType{
    REPS,
    TIME,
    WEIGHT,
    INTENSITY,
    DISTANCE
}
