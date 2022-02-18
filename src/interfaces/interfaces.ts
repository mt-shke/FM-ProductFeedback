import { ReactNode } from "react";

export interface IComponent {
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
}

export interface IFeedback {
	_id?: string;
	title?: string;
	category?: string;
	description?: string;
	user?: string;
	comments?: string[];
	numberOfUpvotes?: number;
	upvoters?: string[];
}

export interface IComment {
	_id?: string;
	user?: string;
	content?: string;
	productRequest?: string;
	comment?: string;
}
