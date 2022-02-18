import { IFeedback } from "../../interfaces/feedbackInterface";
import { ActionType } from "../action-types";

// Fetch ALL Feedbacks
export interface IFetchFeedbacksAction {
	type: ActionType.FETCH_FEEDBACKS;
}

export interface IFetchFeedbacksCompleteAction {
	type: ActionType.FETCH_FEEDBACKS_COMPLETE;
	payload: IFeedback[];
}

export interface IFetchFeedbacksErrorAction {
	type: ActionType.FETCH_FEEDBACKS_ERROR;
	payload: {
		errorMessage: string;
	};
}

// Fetch Single Feedback
export interface IFetchSingleFeedbackAction {
	type: ActionType.FETCH_SINGLE_FEEDBACK;
}

export interface IFetchSingleFeedbackCompleteAction {
	type: ActionType.FETCH_SINGLE_FEEDBACK_COMPLETE;
	payload: IFeedback;
}

export interface IFetchSingleFeedbackErrorAction {
	type: ActionType.FETCH_SINGLE_FEEDBACK_ERROR;
	payload: {
		errorMessage: string;
	};
}

// CRUD Feedback
export interface ICreateFeedbackAction {
	type: ActionType.CREATE_FEEDBACK;
	payload: IFeedback;
}
export interface IUpdateFeedbackAction {
	type: ActionType.UPDATE_FEEDBACK;
	payload: IFeedback;
}
export interface IDeleteFeedbackAction {
	type: ActionType.DELETE_FEEDBACK;
	payload: string;
}

export interface ISetTargetFeedbackAction {
	type: ActionType.SET_TARGET_FEEDBACK;
	payload: IFeedback;
}