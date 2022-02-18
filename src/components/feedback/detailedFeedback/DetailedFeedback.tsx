import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSingleFeedback } from "../../../hooks/useSingleFeedback";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IFeedback } from "../../../interfaces";
import Button from "../../UI/buttons/Button";
import GoBackButton from "../../UI/buttons/GoBackButton";
import FeedbackCard from "../../UI/cards/FeedbackCard";
import CommentsList from "./CommentsList";

const DetailedFeedback: React.FC<{}> = () => {
	const { id } = useParams();
	const updatedFeedback = useSingleFeedback(id as string);
	const { data, targetFeedback } = useTypedSelector((state) => state.feedbacks);
	const [feedback, setFeedback] = useState<IFeedback | null>(targetFeedback ? targetFeedback : null);

	if (!feedback && !targetFeedback && data) {
		const target = data.find((fb) => fb._id === id);
		setFeedback(target as IFeedback);
	}
	return (
		<main className="h-full w-full flex flex-col">
			<section className="flex-c6 items-start px-6 my-8 bg-gray">
				<div className="w-full flex justify-between">
					<GoBackButton />
					<Link to="/edit-feedback">
						<Button className="py-2 px-4 rounded-lg bg-blue text-s-white">Edit feedback</Button>
					</Link>
				</div>
				{feedback ? (
					<FeedbackCard feedback={feedback} />
				) : (
					<p className="w-full gridc p-4 rounded-lg bg-white">No feedback</p>
				)}

				<section className="w-full flex-c6 p-6 bg-white rounded-lg">
					<h2 className="w-full flex">
						{feedback ? feedback.comments?.length : ""} Comment
						{feedback && feedback.comments?.length >= 2 ? "s" : ""}
					</h2>
					{feedback ? <CommentsList list={feedback.comments} /> : ""}
				</section>
			</section>
		</main>
	);
};
export default DetailedFeedback;
