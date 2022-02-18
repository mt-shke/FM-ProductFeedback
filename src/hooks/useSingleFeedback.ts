import { useEffect } from "react";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useSingleFeedback = (id: string) => {
	const { fetchSingleFeedbackAction } = useActions();
	const { loading, targetFeedback } = useTypedSelector((state) => state.feedbacks);
	useEffect(() => {
		if (targetFeedback) return;
		if (!loading) {
			fetchSingleFeedbackAction(id);
		}
	});
	return { targetFeedback };
};
