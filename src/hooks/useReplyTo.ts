import { useEffect, useState } from "react";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

const useCommentReply = () => {
	const [isUpdated, setIsUpdated] = useState(false);
	const { resetReplyComment } = useActions();
	const { commentReply } = useTypedSelector((state) => state.feedbacks);
	useEffect(() => {
		if (!isUpdated) {
			resetReplyComment();
			return;
		}
	}, [commentReply]);
	return commentReply;
};

export default useCommentReply;
