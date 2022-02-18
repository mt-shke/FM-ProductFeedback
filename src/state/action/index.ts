import {
	IFetchFeedbacksAction,
	IFetchFeedbacksCompleteAction,
	IFetchFeedbacksErrorAction,
	// single
	IFetchSingleFeedbackAction,
	IFetchSingleFeedbackCompleteAction,
	IFetchSingleFeedbackErrorAction,
	// CRUD
	ICreateFeedbackAction,
	IUpdateFeedbackAction,
	IDeleteFeedbackAction,
	// Set target
	ISetTargetFeedbackAction,
} from "./feedbackAction";

export type Action =
	| IFetchFeedbacksAction
	| IFetchFeedbacksCompleteAction
	| IFetchFeedbacksErrorAction
	// single
	| IFetchSingleFeedbackAction
	| IFetchSingleFeedbackCompleteAction
	| IFetchSingleFeedbackErrorAction
	// CRUD
	| ICreateFeedbackAction
	| ISetTargetFeedbackAction;
