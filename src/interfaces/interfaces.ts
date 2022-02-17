import { ReactNode } from "react";

export interface IComponent {
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
}

export interface IFeedback {
	title?: string;
	category?: string;
	description?: string;
	user?: string;
}
