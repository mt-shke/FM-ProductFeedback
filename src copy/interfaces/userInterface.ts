export interface IUser {
	userId: string;
	_id?: string;
	email: string;
	fullname: string;
	username: string;
	image: string;
	role: "user" | "admin";
}

export interface IUserState {
	loading: boolean;
	error: string | null;
	verified: boolean;
	data: IUser | null;
}

export interface IuserCredentials {
	email: string;
	password: string;
}

export interface INewUser {
	email: string;
	password: string;
	username: string;
}
