import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import useTargetFeedback from "../../../hooks/useTargetFeedback";
import { IComment } from "../../../interfaces";

interface ICommentCardDeleteButton {
	commentToDelete: IComment;
}

const CommentCardDeleteButton: React.FC<ICommentCardDeleteButton> = ({ commentToDelete }) => {
	const [modal, setModal] = useState(false);
	const { deleteComment } = useActions();
	const navigate = useNavigate();
	const feedback = useTargetFeedback();

	const onDeleteComment = async () => {
		const response = await deleteComment(commentToDelete);
		navigate("/feedback/" + feedback?._id);
	};

	return (
		<>
			<span onClick={() => setModal(true)} className="absolute -left-3 top-2 text-red b-font">
				X
			</span>
			{modal && (
				<div
					onClick={() => setModal(false)}
					className="fixed z-50 inset-0 px-6 gridc text-s-white bg-transparent-g animate-fade"
				>
					<div
						onClick={() => onDeleteComment()}
						className="w-fit flex-c6 items-center px-6 py-4 bg-gray text-red b-font opacity-100 rounded-xl "
					>
						Delete comment
					</div>
				</div>
			)}
		</>
	);
};
export default CommentCardDeleteButton;
