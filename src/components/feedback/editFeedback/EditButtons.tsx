import { Link } from "react-router-dom";
import { IFeedback } from "../../../interfaces";
import Button from "../../UI/buttons/Button";

interface IEditButtonsProps {
	feedback?: IFeedback | null | undefined;
	edit?: boolean;
	onSubmitHandler: (e: React.FormEvent, eventType: string) => void;
}

const EditButtons: React.FC<IEditButtonsProps> = ({ edit, feedback, onSubmitHandler }) => {
	if (edit && feedback)
		return (
			<div>
				<Button
					onClick={(e) => onSubmitHandler(e, "edit")}
					className="h-full w-full gridc p-2 my-4 bg-purple text-white rounded-lg"
				>
					Save Changes
				</Button>
				<Link to="/" className="gridc p-2 rounded-lg bg-s-grey text-white">
					Cancel
				</Link>
				<Button
					onClick={(e) => onSubmitHandler(e, "delete")}
					className="h-full w-full gridc p-2 my-4 bg-red text-white rounded-lg"
				>
					Delete
				</Button>
			</div>
		);

	return (
		<div>
			<button
				onClick={(e) => onSubmitHandler(e, "create")}
				className="h-full w-full gridc p-2 my-4 bg-purple text-white rounded-lg"
			>
				Add Feedback
			</button>
			<Link to="/" className="gridc p-2 rounded-lg bg-s-grey text-white">
				Cancel
			</Link>
		</div>
	);
};

export default EditButtons;
