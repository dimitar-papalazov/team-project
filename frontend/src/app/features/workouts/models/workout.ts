import { User } from "src/app/core/models/user";
import { Exercise } from "../../exercises/models/excercise";

export class Workout {
    public id: number;
	public name: string;
    public member: User;
    public exercises: Exercise[]
}
