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

export type Action =
	| IFetchFeedbacksAction
	| IFetchFeedbacksCompleteAction
	| IFetchFeedbacksErrorAction
	| ICreateFeedbackAction;

// export interface FetchCellsAction {
// 	type: ActionType.FETCH_CELLS;
// }

// export interface FetchCellsCompleteAction {
// 	type: ActionType.FETCH_CELLS_COMPLETE;
// 	payload: Cell[];
// }

// export interface FetchCellsErrorAction {
// 	type: ActionType.FETCH_CELLS_ERROR;
// 	payload: string;
// }

// export interface SaveCellsError {
// 	type: ActionType.SAVE_CELLS_ERROR;
// 	payload: string;
// }

// export type Action =
// 	| MoveCellAction
// 	| DeleteCellAction
// 	| InsertCellAfterAction
// 	| UpdateCellAction
// 	| BundleStartAction
// 	| BundleCompleteAction
// 	| FetchCellsAction
// 	| FetchCellsCompleteAction
// 	| FetchCellsErrorAction
// 	| SaveCellsError;
