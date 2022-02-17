import { Link } from "react-router-dom";
import { IComponent } from "../../../interfaces";

const AddFeedbackButton: React.FC<IComponent> = ({ children, className }) => {
	return (
		<Link to="/create-feedback" className={className}>
			{children}
		</Link>
	);
};
export default AddFeedbackButton;
