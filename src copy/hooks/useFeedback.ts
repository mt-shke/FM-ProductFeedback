import { useEffect, useState } from "react";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useFeedback = () => {
	const [isUpdated, setIsUpdated] = useState(false);
	const { fetchFeedbacks } = useActions();
	const { data, loading, targetFeedback, categoryFilter } = useTypedSelector((state) => state.feedbacks);
	useEffect(() => {
		if (!isUpdated) {
			fetchFeedbacks();
			setIsUpdated(true);
			return;
		}
		if (data !== null) return;
		if (loading) return;
		fetchFeedbacks();
	}, [data]);
	return { data, targetFeedback, categoryFilter };
};
