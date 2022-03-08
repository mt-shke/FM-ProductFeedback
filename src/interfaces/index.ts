import { ReactNode } from "react";

export interface IComponent {
	children?: ReactNode;
	className?: string;
	onClick?: (any: any) => void;
}

export * from "./commentInterface";
export * from "./feedbackInterface";
export * from "./pageInterface";
export * from "./promiseInterface";
export * from "./route";
export * from "./userInterface";
