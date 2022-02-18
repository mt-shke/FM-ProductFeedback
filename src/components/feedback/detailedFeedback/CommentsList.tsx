import { IComment } from "../../../interfaces";
import CommentCard from "../../UI/cards/CommentCard";

interface ICommentsListProps {
	list: IComment[];
}

const CommentsList: React.FC<ICommentsListProps> = ({ list }) => {
	const sorted = [...list].sort(
		(a: IComment, b: IComment) => +new Date(a.createdAt as Date) - +new Date(b.createdAt as Date)
	);

	const subComments = sorted.filter((comm) => comm.comment);
	const directReplies = sorted.filter((comm) => !comm.comment);

	return (
		<section className="grid grid-flow-row gap-6 items-start">
			{directReplies.map((commentItem: IComment, index: number) => {
				const commentReplies = subComments.filter((comm) => comm._id === commentItem._id);

				return (
					<CommentCard comment={commentItem} index={index} key={commentItem._id} replies={commentReplies} />
				);
			})}
		</section>
	);
};
export default CommentsList;
