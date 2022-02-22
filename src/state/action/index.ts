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

	// Comments
	ISetCommentReply,
	IResetCommentReply,
	ICreateCommentAction,
	IUpdateCommentAction,
	IDeleteCommentAction,
} from "./feedbackAction";

import {
	IGetUserCookie,
	ILoginUserAction,
	ILoginUserActionComplete,
	ILoginUserActionError,
	IVerifyUserAction,
	IVerifyUserCompleteAction,
	IVerifyUserErrorAction,
} from "./userAction";

export type Action =
	// FEEDBACKS --	FEEDBACKS
	| IFetchFeedbacksAction
	| IFetchFeedbacksCompleteAction
	| IFetchFeedbacksErrorAction
	// single
	| IFetchSingleFeedbackAction
	| IFetchSingleFeedbackCompleteAction
	| IFetchSingleFeedbackErrorAction
	// CRUD
	| ICreateFeedbackAction
	| IUpdateFeedbackAction
	| IDeleteFeedbackAction
	| ISetTargetFeedbackAction
	// Comments
	| ISetCommentReply
	| IResetCommentReply
	| ICreateCommentAction
	| IUpdateCommentAction
	| IDeleteCommentAction

	// USER -- USER
	| IGetUserCookie
	| ILoginUserAction
	| ILoginUserActionComplete
	| ILoginUserActionError
	| IVerifyUserAction
	| IVerifyUserCompleteAction
	| IVerifyUserErrorAction;
