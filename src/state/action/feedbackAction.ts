import { IFeedback } from "../../interfaces/interfaces";
import { ActionType } from "../action-types";

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
