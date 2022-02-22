import { Link } from "react-router-dom";
import Button from "./Button";

interface EditFeedbackButtonProps {
	feedbackId: string;
}

const EditFeedbackButton: React.FC<EditFeedbackButtonProps> = ({ feedbackId }) => {
	return (
		<Link to={"/edit-feedback/" + feedbackId}>
			<Button className="py-2 px-4 rounded-lg bg-blue text-s-white">Edit Feedback</Button>
		</Link>
	);
};
export default EditFeedbackButton;
