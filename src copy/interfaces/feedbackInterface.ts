import { IComment } from ".";

export interface IFeedback {
	_id: string;
	title: string;
	description: string;
	user: string;
	category: CategoriesType;
	status: StatusType;
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
	categoryFilter: CategoriesType;
}

export interface IFeedbackComponent {
	feedback?: IFeedback;
}

export interface ICreatedFeedback {
	title: string;
	category: string;
	description: string;
	status?: StatusType;
	feedbackId?: string;
}

export interface ICommentReply {
	commentId: string;
	replyToUsername: string;
}

// TYPE
export type CategoriesType = "All" | "Feature" | "UI" | "UX" | "bug" | "Enhancement" | "Bug";
export type StatusType = "Suggestion" | "Planned" | "In-Progress" | "Live";
export type OrderFilterType = "default" | "mostUpvotes" | "leastUpvotes" | "mostComments" | "leastComments";
