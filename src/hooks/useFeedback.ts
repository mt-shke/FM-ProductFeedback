import { useEffect } from "react";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useFeedback = () => {
	const { fetchFeedbacks } = useActions();

	const { data, loading, targetFeedback } = useTypedSelector((state) => state.feedbacks);
	useEffect(() => {
		console.log(data);
		if (data !== null) return;
		if (loading) return;
		fetchFeedbacks();
	});
	return { data, targetFeedback };
};
