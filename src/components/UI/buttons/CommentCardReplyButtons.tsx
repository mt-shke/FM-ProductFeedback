import { useActions } from "../../../hooks/useActions";
import { useUser } from "../../../hooks/useUser";
import { IUser } from "../../../interfaces";
import Button from "./Button";

interface ICommentCardReplyButtonsProps {
	commentUser: IUser;
	commentId: string;
}

const CommentCardReplyButtons: React.FC<ICommentCardReplyButtonsProps> = ({ commentId, commentUser }) => {
	const { setReplyComment } = useActions();
	const replyHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		setReplyComment({ commentId: commentId, replyToUsername: commentUser.username });
	};

	return (
		<Button onClick={(e) => replyHandler(e)} className="ml-auto mr-0 font-semibold text-blue">
			Reply
		</Button>
	);
};
export default CommentCardReplyButtons;
