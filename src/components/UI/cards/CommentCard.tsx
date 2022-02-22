import { useUser } from "../../../hooks/useUser";
import { IComment } from "../../../interfaces";
import CommentCardDeleteButton from "../buttons/CommentCardDeleteButton";
import CommentCardReplyButtons from "../buttons/CommentCardReplyButtons";
import ProfilCard from "./ProfilCard";

interface ICommentCardProps {
	comment: IComment;
	index: number;
	subComments: IComment[];
	isSubcomment?: boolean;
	replyToUsername?: string;
}

const CommentCard: React.FC<ICommentCardProps> = ({
	comment,
	index,
	subComments,
	isSubcomment,
	replyToUsername,
}) => {
	const user = useUser();

	const hr = index >= 1 && !isSubcomment ? <hr className="opacity-20" /> : "";
	const subCommentLBorderMT = index === 0 && isSubcomment ? "border-l-[1px] border-l-s-gray mt-4" : "";
	const paddingLeft = isSubcomment ? "pl-4 my-2" : "";
	const isAuthor = user && user.userId === comment.user._id;

	return (
		<>
			{hr}
			<article
				className={`${subCommentLBorderMT} ${paddingLeft} relative flex flex-col gap-4 text-sm animate-fade`}
			>
				{isAuthor && <CommentCardDeleteButton commentToDelete={comment} />}
				<div className="flex justify-start items-center">
					<ProfilCard comment={comment} />
					<CommentCardReplyButtons commentId={comment._id} commentUser={comment.user} />
				</div>
				<p className="s-font text-sm">
					{isSubcomment && <span className="text-purple b-font">@{replyToUsername}</span>} {comment.content}
				</p>

				{subComments
					?.filter((subComment) => subComment.comment === comment._id)
					.map((filteredComment, index) => (
						<CommentCard
							key={filteredComment._id}
							comment={filteredComment}
							index={index}
							subComments={subComments}
							isSubcomment={true}
							replyToUsername={comment.user.username}
						/>
					))}
			</article>
		</>
	);
};
export default CommentCard;
