import { IComment } from "../../../interfaces";
import Button from "../buttons/Button";

interface ICommentCardProps {
	comment: IComment;
	index: number;
	replies?: IComment[];
	isCommentReply?: boolean;
}

const CommentCard: React.FC<ICommentCardProps> = ({ comment, index, replies, isCommentReply }) => {
	return (
		<>
			{index >= 1 && !isCommentReply && <hr className="opacity-20 my-2" />}
			<article className="flex-c6 text-sm">
				<div className="flex justify-start items-center">
					<span className="h-10 aspect-square rounded-full">
						<img className="rounded-full" src={comment.user.image} alt={comment.user.username} />
					</span>
					<span className="flex flex-col mx-4 ">
						<span className="font-semibold ">{comment.user.fullname}</span>
						<span>@{comment.user.username}</span>
					</span>
					<Button className="ml-auto mr-0 font-semibold text-blue">Reply</Button>
				</div>
				<p className="s-font text-sm">{comment.content}</p>
			</article>

			{replies?.map((rep, index) => (
				<CommentCard comment={rep} index={index} isCommentReply={true} />
			))}
		</>
	);
};
export default CommentCard;

{
	/* <article className="flex-c6">
<div className="flex justify-start items-center">
	<span className="h-12 aspect-square rounded-full">
		<img className="rounded-full" src="/assets/user-images/image-elijah.jpg" alt="elijah" />
	</span>
	<span className="flex flex-col s-font mx-4">
		<span className="b-font">Elijah Moss</span>
		<span>@hexagon.bestagon</span>
	</span>
	<Button className="ml-auto mr-0 font-semibold text-blue">Reply</Button>
</div>
<p>
	Also, please allow styles to be applied based on system preferences. I would love to be able to browse
	Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it
	currently has.
</p>
</article> */
}
