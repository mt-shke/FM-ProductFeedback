import { IFeedbackState } from "../../interfaces";
import { Action } from "../action";
import { ActionType } from "../action-types";

const initialState: IFeedbackState = {
	loading: false,
	error: null,
	data: null,
	targetFeedback: null,
};

const feedbackReducer = (state: IFeedbackState = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.FETCH_FEEDBACKS:
			return { ...state, loading: true, error: null };
		case ActionType.FETCH_FEEDBACKS_COMPLETE:
			return { ...state, loading: false, data: action.payload };
		case ActionType.FETCH_FEEDBACKS_ERROR:
			return { ...state, loading: false, error: action.payload.errorMessage };

		// Single fetch
		case ActionType.FETCH_SINGLE_FEEDBACK:
			return { ...state, loading: true, error: null };
		case ActionType.FETCH_SINGLE_FEEDBACK_COMPLETE:
			return { ...state, loading: false, targetFeedback: action.payload };
		case ActionType.FETCH_SINGLE_FEEDBACK_ERROR:
			return { ...state, loading: false, error: action.payload.errorMessage };

		// Set target
		case ActionType.SET_TARGET_FEEDBACK:
			return { ...state, targetFeedback: action.payload };

		default:
			return state;
	}
};

export default feedbackReducer;
