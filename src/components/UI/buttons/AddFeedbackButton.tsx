import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { IComponent, IUser } from "../../../interfaces";

interface IAddFeedbackButtonProps {
	children?: ReactNode;
	className?: string;
	onClick?: (e: React.MouseEvent) => void;
}

const AddFeedbackButton: React.FC<IAddFeedbackButtonProps> = ({ children, className, onClick }) => {
	return (
		<Link onClick={onClick} to="/create-feedback" className={className}>
			{children}
		</Link>
	);
};
export default AddFeedbackButton;
