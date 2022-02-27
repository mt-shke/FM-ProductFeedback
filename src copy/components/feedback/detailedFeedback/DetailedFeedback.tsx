import useCommentReply from "../../../hooks/useCommentReply";
import useTargetFeedback from "../../../hooks/useTargetFeedback";
import { IPageProps } from "../../../interfaces";
import AddComment from "./AddComment";
import HeaderButtons from "./HeaderButtons";
import MainDetailedFeedback from "./MainDetailedFeedback";
import SectionComments from "./SectionComments";

const DetailedFeedback: React.FC<IPageProps> = ({ data }) => {
	const feedback = useTargetFeedback();
	const { user } = data;
	const commentReply = useCommentReply();
	window.scrollTo(0, 0);
	return (
		<main className="ctn-feedback grid grid-flow-row items-center gap-6 px-6 py-8 bg-gray">
			<HeaderButtons feedback={feedback} user={user} />
			<MainDetailedFeedback feedback={feedback} />
			<SectionComments feedback={feedback} />
			{feedback && !commentReply && <AddComment feedbackId={feedback?._id} />}
			{feedback && commentReply && <AddComment feedbackId={feedback?._id} commentReply={commentReply} />}
		</main>
	);
};
export default DetailedFeedback;
