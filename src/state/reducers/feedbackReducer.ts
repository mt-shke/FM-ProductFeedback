import { IFeedback, IFeedbackState } from "../../interfaces";
import { Action } from "../action";
import { ActionType } from "../action-types";

const initialState: IFeedbackState = {
	loading: false,
	error: null,
	data: null,
	targetFeedback: null,
	commentReply: null,
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

		// Create feedback
		case ActionType.CREATE_FEEDBACK:
			let newData: IFeedback[] = [];
			if (state.data?.length) {
				newData = [...state.data];
			}
			newData = [...newData, action.payload];
			return { ...state, data: newData, targetFeedback: action.payload };

		case ActionType.UPDATE_FEEDBACK:
			return { ...state, targetFeedback: action.payload };

		case ActionType.DELETE_FEEDBACK: {
			return { ...state, data: action.payload, targetFeedback: null };
		}

		// Set target
		case ActionType.SET_TARGET_FEEDBACK:
			return { ...state, targetFeedback: action.payload };

		// Comments
		case ActionType.SET_COMMENT_REPLY:
			return { ...state, commentReply: action.payload };
		case ActionType.RESET_COMMENT_REPLY:
			return { ...state, commentReply: null };

		case ActionType.CREATE_COMMENT:
			return { ...state, targetFeedback: action.payload, commentReply: null };
		case ActionType.DELETE_COMMENT:
			return { ...state, targetFeedback: action.payload, commentReply: null };

		default:
			return state;
	}
};

export default feedbackReducer;
