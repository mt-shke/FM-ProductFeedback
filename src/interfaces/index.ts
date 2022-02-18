import { IFeedback, IFeedbackState } from "./feedbackInterface";
import { IComment, ICommentDetailed } from "./commentInterface";
import IPage from "./page";
import IRoute from "./route";
import { ReactNode } from "react";
import { IUser } from "./userInterface";

interface IComponent {
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
}

export type { IComponent, IPage, IRoute, IFeedback, IFeedbackState, IComment, ICommentDetailed, IUser };
