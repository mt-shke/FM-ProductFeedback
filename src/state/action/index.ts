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
	ISetFilterCategory,
	ISetFeedbackOrder,
	ISetUpvoteAction,
	ISetUpvoteCompleteAction,
	ISetUpvoteErrorAction,
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
	IRegisterUserAction,
	IRegisterUserActionComplete,
	IRegisterUserActionError,
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
	// Set target
	| ISetTargetFeedbackAction
	// Set filter
	| ISetFilterCategory
	| ISetFeedbackOrder
	| ISetUpvoteAction
	| ISetUpvoteCompleteAction
	| ISetUpvoteErrorAction
	// CRUD
	| ICreateFeedbackAction
	| IUpdateFeedbackAction
	| IDeleteFeedbackAction
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
	| IVerifyUserErrorAction
	| IRegisterUserAction
	| IRegisterUserActionComplete
	| IRegisterUserActionError;
