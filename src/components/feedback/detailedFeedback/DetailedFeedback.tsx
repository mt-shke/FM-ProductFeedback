import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Button from "../../UI/buttons/Button";
import CategoriesButton from "../../UI/buttons/CategoriesButton";
import GoBackButton from "../../UI/buttons/GoBackButton";
import UpvotesButton from "../../UI/buttons/UpvotesButton";
import CommentCard from "../../UI/cards/CommentCard";
import FeedbackCard, { IFeedbackCardProps } from "../../UI/cards/FeedbackCard";

export interface IDetailedFeedbackProps extends IFeedbackCardProps {}

const DetailedFeedback: React.FC<{}> = (
	{
		// _id,
		// title,
		// category,
		// description,
		// numberOfUpvotes,
		// comments,
	}
) => {
	const { data, loading } = useTypedSelector((state) => state.feedbacks);
	const { fetchFeedbacks } = useActions();
	useEffect(() => {
		if (data.length) return;
		if (!loading) {
			fetchFeedbacks();
		}
	});
	const { id } = useParams();
	const request = data.find((item) => item._id === id);

	return (
		<main className="h-full w-full flex flex-col">
			<section className="flex-c6 items-start p-8 bg-gray">
				<div className="w-full flex justify-between">
					<GoBackButton />
					<Link to="/edit-feedback">
						<Button className="py-2 px-4 rounded-lg bg-blue text-s-white">Edit feedback</Button>
					</Link>
				</div>
				{request ? (
					<FeedbackCard
						_id={request._id}
						title={request.title}
						category={request.category}
						description={request.description}
						numberOfUpvotes={request.numberOfUpvotes}
						comments={request.comments?.length}
					/>
				) : (
					<FeedbackCard />
				)}

				<section className="flex-c6 p-6 bg-white rounded-lg">
					<h2>{request ? request.comments?.length : ""} Comments</h2>
					<div>
						<CommentCard />
					</div>
				</section>
			</section>
		</main>
	);
};
export default DetailedFeedback;
