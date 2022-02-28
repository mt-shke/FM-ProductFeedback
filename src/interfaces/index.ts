import {
	IFeedback,
	IFeedbackState,
	ICommentReply,
	ICreatedFeedback,
	IFeedbackComponent,
	CategoriesType,
	StatusType,
} from "./feedbackInterface";
import { IComment, ICommentDetailed, ICreatedComment } from "./commentInterface";
import { IPageProps } from "./pageInterface";
import IRoute from "./route";
import { ReactNode } from "react";
import { IUser, IUserState, IuserCredentials, INewUser } from "./userInterface";
import { IPromisePath, IPromiseSuccess } from "./promiseInterface";

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
	CategoriesType,
	INewUser,
	StatusType,
};
