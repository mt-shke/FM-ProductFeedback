import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { IFeedback } from "../../interfaces";
import FeedbackCard from "../UI/cards/FeedbackCard";

interface IFeedbackListProps {
	list: IFeedback[];
}

const FeedbackList: React.FC<IFeedbackListProps> = ({ list }) => {
	const { setTargetFeedback } = useActions();

	return (
		<section className="grid grid-flow-row gap-6 items-start p-6 bg-gray">
			{list.map((feedback: any) => (
				<Link onClick={() => setTargetFeedback(feedback)} to={`/feedback/${feedback._id}`} key={feedback._id}>
					<FeedbackCard feedback={feedback} />
				</Link>
			))}
		</section>
	);
};
export default FeedbackList;
