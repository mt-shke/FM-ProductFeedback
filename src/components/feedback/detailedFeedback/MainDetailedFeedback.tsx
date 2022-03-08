import { IFeedback } from "../../../interfaces";
import FeedbackCard from "../../UI/cards/FeedbackCard";

interface IMainDetailedFeedbackProps {
	feedback: IFeedback | null;
}

const MainDetailedFeedback: React.FC<IMainDetailedFeedbackProps> = ({ feedback }) => {
	return (
		<>
			{feedback ? (
				<FeedbackCard feedback={feedback} />
			) : (
				<p className="w-full gridc p-4 rounded-lg bg-white">...</p>
			)}
		</>
	);
};

export default MainDetailedFeedback;
