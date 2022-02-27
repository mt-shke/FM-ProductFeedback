import useViewport from "../../../hooks/useViewport";
import { IFeedback } from "../../../interfaces";
import CategoriesButton from "../buttons/CategoriesButton";
import UpvotesButton from "../buttons/UpvotesButton";

interface IFeedbackCardProps {
	feedback: IFeedback;
	setStatus?: boolean;
}

const FeedbackCard: React.FC<IFeedbackCardProps> = ({ feedback, setStatus }) => {
	const { _id, title, category, description, upvoters, numberOfUpvotes, comments, status } = feedback;

	// status style  for roadmap page
	const statusColor =
		status === "In-Progress"
			? "border-t-purple"
			: status === "Planned"
			? "border-t-orange"
			: "border-t-s-blue";
	const bgStatusColor =
		status === "In-Progress" ? "bg-purple" : status === "Planned" ? "bg-orange" : "bg-s-blue";

	// check responsive
	const viewport = useViewport();

	if (viewport === "mobile") {
		if (setStatus)
			// Mobile && status mode
			return (
				<article
					className={`border-t-[6px] ${statusColor}
w-full flex flex-col gap-3 justify-start items-start p-6 bg-white rounded-md s-font animate-fade feedbackCard `}
				>
					<p className="flex items-center gap-2">
						<span className={`${bgStatusColor} inline-block w-2 aspect-square rounded-full`}></span>
						{status}
					</p>

					<h2 className="s-font hover:text-blue">{title}</h2>
					<p>{description}</p>
					<CategoriesButton>{category}</CategoriesButton>
					<div className="w-full flex justify-between items-center">
						<UpvotesButton feedbackId={_id} upvoters={upvoters}>
							{numberOfUpvotes}
						</UpvotesButton>
						<span className="flex gap-2 items-center b-font">
							<img src="/assets/shared/icon-comments.svg" alt="icon" />
							{+comments.length}
						</span>
					</div>
				</article>
			);

		// 	Mobile && No status mode

		return (
			<article
				className={` w-full flex flex-col gap-3 justify-start items-start p-6 bg-white rounded-md s-font animate-fade feedbackCard `}
			>
				<h2 className="s-font hover:text-blue">{title}</h2>
				<p>{description}</p>
				<CategoriesButton>{category}</CategoriesButton>
				<div className="w-full flex justify-between items-center">
					<UpvotesButton feedbackId={_id} upvoters={upvoters}>
						{numberOfUpvotes}
					</UpvotesButton>
					<span className="flex gap-2 items-center b-font">
						<img src="/assets/shared/icon-comments.svg" alt="icon" />
						{+comments.length}
					</span>
				</div>
			</article>
		);
	}

	// Desktop & status mode
	if (setStatus)
		return (
			<article
				className={`h-full border-t-[6px] ${statusColor}
w-full flex flex-col gap-3 justify-start items-start p-6 bg-white rounded-md s-font animate-fade feedbackCard `}
			>
				<p className="flex items-center gap-2">
					<span className={`${bgStatusColor} inline-block w-2 aspect-square rounded-full`}></span>
					{status}
				</p>

				<h2 className="s-font hover:text-blue">{title}</h2>
				<p>{description}</p>
				<CategoriesButton>{category}</CategoriesButton>
				<div className="w-full flex justify-between items-center">
					<UpvotesButton statusMode={true} feedbackId={_id} upvoters={upvoters}>
						{numberOfUpvotes}
					</UpvotesButton>
					<span className="flex gap-2 items-center b-font">
						<img src="/assets/shared/icon-comments.svg" alt="icon" />
						{+comments.length}
					</span>
				</div>
			</article>
		);

	// return (
	// 	<article
	// 		className={`border-t-[6px] ${statusColor} w-full flex items-start p-6 bg-white rounded-md s-font animate-fade feedbackCard md:flex-row md:justify-start md:items-center md:gap-6 lg:gap-8 lg:px-8`}
	// 	>
	// 		<UpvotesButton feedbackId={_id} upvoters={upvoters}>
	// 			{numberOfUpvotes}
	// 		</UpvotesButton>

	// 		<span className="flex flex-col gap-1 items-start lg:gap-2">
	// 			{setStatus && (
	// 				<p className="flex items-center gap-2">
	// 					<span className={`${bgStatusColor} inline-block w-2 aspect-square rounded-full`}></span>
	// 					{status}
	// 				</p>
	// 			)}
	// 			<h2 className="s-font hover:text-blue md:text-base lg:text-lg">{title}</h2>
	// 			<p className="lg:text-base">{description}</p>
	// 			<CategoriesButton>{category}</CategoriesButton>
	// 		</span>

	// 		<span className="flex gap-2 h-full mr-0 ml-auto b-font">
	// 			<img src="/assets/shared/icon-comments.svg" alt="icon" />
	// 			{+comments.length}
	// 		</span>
	// 	</article>
	// );

	// Desktop && No status mode
	return (
		<article
			className={`
			w-full flex  items-start p-6 bg-white rounded-md s-font animate-fade feedbackCard md:flex-row md:justify-start md:items-center md:gap-6 lg:gap-8 lg:px-8`}
		>
			<UpvotesButton feedbackId={_id} upvoters={upvoters}>
				{numberOfUpvotes}
			</UpvotesButton>
			<span className="flex flex-col gap-1 items-start lg:gap-2">
				<h2 className="s-font hover:text-blue md:text-base lg:text-lg">{title}</h2>
				<p className="lg:text-base">{description}</p>
				<CategoriesButton>{category}</CategoriesButton>
			</span>

			<span className="flex gap-2 h-full mr-0 ml-auto b-font">
				<img src="/assets/shared/icon-comments.svg" alt="icon" />
				{+comments.length}
			</span>
		</article>
	);
};
export default FeedbackCard;
