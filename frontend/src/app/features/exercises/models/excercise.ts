import { progress } from "src/app/core/models/progress";

export class Exercise {
    public id: number;
	public name: string;
    public sets: number;
    public goal: number;
    public url: string;
    public user: number;
    public workouts: number[];
    public progresses: any[];
}
