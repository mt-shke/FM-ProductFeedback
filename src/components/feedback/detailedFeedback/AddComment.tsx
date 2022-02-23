import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useUser } from "../../../hooks/useUser";
import { ICommentReply } from "../../../interfaces";
import AuthModal from "../../auth/AuthModal";

interface IAddCommentProps {
	feedbackId: string;
	commentReply?: ICommentReply;
}

const AddComment: React.FC<IAddCommentProps> = ({ feedbackId, commentReply }) => {
	const [modal, setModal] = useState(false);

	const { resetReplyComment, createComment } = useActions();
	const [enteredValue, setEnteredValue] = useState<string>("");
	const navigate = useNavigate();
	const user = useUser();

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!user) {
			setModal(true);
			return;
		}
		if (enteredValue.trim() === "") return;
		const content = enteredValue;
		const productRequest = feedbackId;
		const comment = commentReply ? commentReply.commentId : "";
		const response = await createComment({ content, productRequest, comment });
		setTimeout(() => {
			setEnteredValue("");
		}, 1000);
	};

	const replyTo = commentReply ? (
		<span
			onClick={() => resetReplyComment()}
			className="absolute -top-8 left-0 flex justify-between w-full text-purple b-font"
		>
			@{commentReply.replyToUsername}
			<span>x</span>
		</span>
	) : (
		""
	);

	return (
		<>
			{modal && <AuthModal onClick={() => setModal(false)} />}
			<section className="flex-c6 items-start bg-gray animate-fade">
				<form onSubmit={(e) => submitHandler(e)} className="w-full flex-c6 p-6 bg-white rounded-lg">
					<h2 className="w-full flex">Add Comment</h2>
					<label className={`${commentReply && "relative mt-6"}`} htmlFor="addComment">
						{replyTo}
						<textarea
							className={` w-full h-28 bg-gray rounded-lg`}
							name="addComment"
							id="addComment"
							placeholder="Type your comment here"
							maxLength={250}
							value={enteredValue}
							onChange={(e) => setEnteredValue(e.target.value)}
						></textarea>
					</label>

					<div className="flex flex-row justify-between items-center text-sm">
						<span>{250 - enteredValue.length} Characters left</span>
						<button
							onSubmit={(e) => submitHandler(e)}
							type="submit"
							className="w-fit gridc px-4 py-2 text-white bg-purple rounded-xl "
						>
							Post Comment
						</button>
					</div>
				</form>
			</section>
		</>
	);
};
export default AddComment;
