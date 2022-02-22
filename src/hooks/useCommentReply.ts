import { useTypedSelector } from "./useTypedSelector";

const useCommentReply = () => {
	const { commentReply } = useTypedSelector((state) => state.feedbacks);
	return commentReply;
};

export default useCommentReply;
