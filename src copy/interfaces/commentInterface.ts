import { IUser } from ".";

export interface IComment {
	_id: string;
	user: IUser;
	content: string;
	productRequest: string;
	comment?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ICreatedComment {
	content: string;
	productRequest: string;
	comment: string;
}

export interface ICommentDetailed {
	_id: string;
	user: IUser;
	content: string;
	productRequest: string;
	comments: ICommentDetailed[];
}
