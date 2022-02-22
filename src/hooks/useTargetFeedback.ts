import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IFeedback } from "../interfaces";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

const useTargetFeedback = () => {
	const [isUpdated, setIsUpdated] = useState(false);
	const { id } = useParams();
	const { data, loading, targetFeedback } = useTypedSelector((state) => state.feedbacks);
	const { fetchSingleFeedbackAction } = useActions();

	useEffect(() => {
		if (!isUpdated) {
			fetchSingleFeedbackAction(id as string);
			setIsUpdated(true);
			return;
		}
		if (targetFeedback !== null) return;
		if (loading) return;
		fetchSingleFeedbackAction(id as string);
	}, [targetFeedback]);

	return targetFeedback;
};

export default useTargetFeedback;
