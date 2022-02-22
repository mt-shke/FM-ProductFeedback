import { IFeedback, IUser } from "../../../interfaces";
import EditFeedbackButton from "../../UI/buttons/EditFeedbackButton";
import GoBackButton from "../../UI/buttons/GoBackButton";

interface IHeaderButtonsProps {
	feedback: IFeedback | null;
	user: IUser | null;
}

const HeaderButtons: React.FC<IHeaderButtonsProps> = ({ feedback, user }) => {
	const isAuthor = user?.userId === feedback?.user;

	return (
		<header className="w-full flex justify-between">
			<GoBackButton />
			{isAuthor && feedback && <EditFeedbackButton feedbackId={feedback?._id} />}
		</header>
	);
};

export default HeaderButtons;
