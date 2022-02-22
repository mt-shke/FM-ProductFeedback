import {
	IFeedback,
	IFeedbackState,
	ICommentReply,
	ICreatedFeedback,
	IFeedbackComponent,
} from "./feedbackInterface";
import { IComment, ICommentDetailed, ICreatedComment } from "./commentInterface";
import { IPageProps } from "./pageInterface";
import IRoute from "./route";
import { ReactNode } from "react";
import { IUser, IUserState, IuserCredentials } from "./userInterface";

interface IComponent {
	children?: ReactNode;
	className?: string;
	onClick?: (any: any) => void;
}

export type {
	IComponent,
	IPageProps,
	IRoute,
	IFeedback,
	IFeedbackState,
	IComment,
	ICommentDetailed,
	ICreatedComment,
	IUser,
	IUserState,
	IuserCredentials,
	ICommentReply,
	ICreatedFeedback,
	IFeedbackComponent,
};
