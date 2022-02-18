import { IComponent } from "../../../interfaces";
import CategoriesButton from "../buttons/CategoriesButton";
import UpvotesButton from "../buttons/UpvotesButton";

export interface IFeedbackCardProps extends IComponent {
	_id?: string;
	title?: string;
	category?: string;
	description?: string;
	numberOfUpvotes?: number;
	comments?: number;
}

const FeedbackCard: React.FC<IFeedbackCardProps> = ({
	_id,
	title,
	category,
	description,
	numberOfUpvotes,
	comments,
}) => {
	return (
		<article className="w-full flex flex-col gap-3 justify-start items-start p-6 bg-white rounded-lg s-font">
			<h2 className="s-font">{title || ""}</h2>
			<p>{description || ""}</p>
			<CategoriesButton>{category || ""}</CategoriesButton>
			<div className="w-full flex justify-between items-center">
				<UpvotesButton>{numberOfUpvotes || ""}</UpvotesButton>
				<span className="flex gap-2 items-center b-font">
					<img src="/assets/shared/icon-comments.svg" alt="icon" />
					{comments || ""}
				</span>
			</div>
		</article>
	);
};
export default FeedbackCard;

// <article className="w-full flex flex-col gap-3 justify-start items-start p-6 bg-white rounded-lg s-font">
// <h2 className="s-font">Add tags for solutions</h2>
// <p>Easier to search for solutions based on a specific stack.</p>
// <CategoriesButton>Enhancement</CategoriesButton>
// <div className="w-full flex justify-between items-center">
// 	<UpvotesButton>112</UpvotesButton>
// 	<span className="flex gap-2 items-center b-font">
// 		<img src="/assets/shared/icon-comments.svg" alt="icon" />2
// 	</span>
// </div>
// </article>
