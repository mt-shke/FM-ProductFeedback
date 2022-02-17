import { stat } from "fs";
import { IFeedback } from "../../interfaces/interfaces";
import { Action } from "../action";
import { ActionType } from "../action-types";

interface IFeedbackState {
	loading: boolean;
	error: string | null;
	data: IFeedback[];
}

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const feedbackReducer = (state: IFeedbackState = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.FETCH_FEEDBACKS:
			return { ...state, loading: true, error: null };
		case ActionType.FETCH_FEEDBACKS_COMPLETE:
			return { ...state, loading: false, data: action.payload };
		case ActionType.FETCH_FEEDBACKS_ERROR:
			return { ...state, loading: false, error: action.payload.errorMessage };
		default:
			return state;
	}
};

export default feedbackReducer;
