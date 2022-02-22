import { IFeedback } from "../../../interfaces";
import CommentsList from "./CommentsList";

interface ISectionComments {
	feedback: IFeedback | null;
}

const SectionComments: React.FC<ISectionComments> = ({ feedback }) => {
	return (
		<section className="w-full flex-c6 p-6 bg-white rounded-lg">
			<h2 className="w-full flex">
				{feedback ? feedback.comments?.length : ""} Comment
				{feedback && feedback.comments?.length >= 2 ? "s" : ""}
			</h2>
			{feedback ? <CommentsList list={feedback.comments} /> : ""}
		</section>
	);
};
export default SectionComments;
