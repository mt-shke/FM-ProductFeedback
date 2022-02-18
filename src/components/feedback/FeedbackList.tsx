import { Link } from "react-router-dom";
import FeedbackCard, { IFeedbackCardProps } from "../UI/cards/FeedbackCard";

// interface IFeedbackListProps {
// 	list: IFeedbackCardProps[];
// }

const FeedbackList: React.FC<{ list: any }> = ({ list }) => {
	return (
		<section className="grid grid-flow-row gap-6 items-start p-6 bg-gray">
			{list.map((request: any) => (
				<Link to={`/feedback/${request._id}`} key={request._id}>
					<FeedbackCard
						_id={request._id}
						title={request.title}
						category={request.category}
						description={request.description}
						numberOfUpvotes={request.numberOfUpvotes + request.upvoters.length}
						comments={request.comments.length}
					/>
				</Link>
			))}
		</section>
	);
};
export default FeedbackList;
