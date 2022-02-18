import { IUser } from ".";

export interface IComment {
	_id: string;
	user: IUser;
	content: string;
	productRequest: string;
	comment: string[] | IComment[];
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ICommentDetailed {
	_id: string;
	user: IUser;
	content: string;
	productRequest: string;
	comments: ICommentDetailed[];
}
