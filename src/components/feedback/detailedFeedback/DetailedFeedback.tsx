import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../../utils";
import { getAllProductRequests } from "../../../utils/fetchData";
import Button from "../../UI/buttons/Button";
import CategoriesButton from "../../UI/buttons/CategoriesButton";
import GoBackButton from "../../UI/buttons/GoBackButton";
import UpvotesButton from "../../UI/buttons/UpvotesButton";
import CommentCard from "../../UI/cards/CommentCard";
import { IFeedbackCardProps } from "../../UI/cards/FeedbackCard";

export interface IDetailedFeedbackProps extends IFeedbackCardProps {}

const DetailedFeedback: React.FC<{}> = () => {
	// {
	// 	_id,
	// 	title,
	// 	category,
	// 	description,
	// 	upvotes,
	// 	comments,
	// }
	const params = useParams();
	console.log(params.id);

	return (
		<main className="h-full w-full flex flex-col">
			<section className="flex-c6 items-start p-8 bg-gray">
				<div className="w-full flex justify-between">
					<GoBackButton />
					<Link to="/edit-feedback">
						<Button className="py-2 px-4 rounded-lg bg-blue text-s-white">Edit feedback</Button>
					</Link>
				</div>

				<article className="w-full flex flex-col gap-3 justify-start items-start p-6 bg-white rounded-lg s-font">
					<h2 className="s-font">Add tags for solutions</h2>
					<p>Easier to search for solutions based on a specific stack.</p>
					<CategoriesButton>Enhancement</CategoriesButton>
					<div className="w-full flex justify-between items-center">
						<UpvotesButton>112</UpvotesButton>
						<span className="flex gap-2 items-center b-font">
							<img src="/assets/shared/icon-comments.svg" alt="icon" />2
						</span>
					</div>
				</article>
				<section className="flex-c6 p-6 bg-white rounded-lg">
					<h2>4 Comments</h2>
					<div>
						<CommentCard />
					</div>
				</section>
			</section>
		</main>
	);
};
export default DetailedFeedback;
