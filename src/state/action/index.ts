import {
	ICreateFeedbackAction,
	IDeleteFeedbackAction,
	IFetchFeedbacksAction,
	IFetchFeedbacksCompleteAction,
	IFetchFeedbacksErrorAction,
	IUpdateFeedbackAction,
} from "./feedbackAction";
import {
	ICreateCommentAction,
	IDeleteCommentAction,
	IFetchCommentsAction,
	IFetchCommentsCompleteAction,
	IFetchCommentsErrorAction,
	IUpdateCommentAction,
} from "./commentAction";

export type Action =
	| IFetchFeedbacksAction
	| IFetchFeedbacksCompleteAction
	| IFetchFeedbacksErrorAction
	| ICreateFeedbackAction
	| IFetchCommentsAction
	| IFetchCommentsCompleteAction
	| IFetchCommentsErrorAction
	| ICreateCommentAction;

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
