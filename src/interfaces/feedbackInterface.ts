import { IComment } from ".";

export interface IFeedback {
	_id: string;
	title: string;
	category: string;
	description: string;
	user: string;
	comments: IComment[];
	numberOfUpvotes: number;
	upvoters: string[];
}

export interface IFeedbackState {
	loading: boolean;
	error: string | null;
	data: IFeedback[] | null;
	targetFeedback: IFeedback | null;
	commentReply: ICommentReply | null;
}

export interface IFeedbackComponent {
	feedback?: IFeedback;
}

export interface ICreatedFeedback {
	title: string;
	category: string;
	description: string;
	feedbackId?: string;
}

export interface ICommentReply {
	commentId: string;
	replyToUsername: string;
}
