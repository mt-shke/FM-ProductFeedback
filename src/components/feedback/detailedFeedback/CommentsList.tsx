import { IComment } from "../../../interfaces";
import CommentCard from "../../UI/cards/CommentCard";

interface ICommentsListProps {
	list: IComment[];
}

const CommentsList: React.FC<ICommentsListProps> = ({ list }) => {
	const sorted = [...list].sort(
		(a: IComment, b: IComment) => +new Date(a.createdAt as Date) - +new Date(b.createdAt as Date)
	);

	const subComments = [...sorted].filter((comm) => comm.comment);
	const feedbackReplies = [...sorted].filter((comm) => !comm.comment);
	return (
		<section className="grid grid-flow-row gap-6 items-start animate-fade">
			{feedbackReplies.map((commentItem: IComment, index: number) => {
				return (
					<CommentCard comment={commentItem} index={index} key={commentItem._id} subComments={subComments} />
				);
			})}
		</section>
	);
};
export default CommentsList;
