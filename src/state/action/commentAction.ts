import { IComment } from "../../interfaces/interfaces";
import { ActionType } from "../action-types";

export interface IFetchCommentsAction {
	type: ActionType.FETCH_COMMENTS;
}

export interface IFetchCommentsCompleteAction {
	type: ActionType.FETCH_COMMENTS_COMPLETE;
	payload: IComment[];
}

export interface IFetchCommentsErrorAction {
	type: ActionType.FETCH_COMMENTS_ERROR;
	payload: {
		errorMessage: string;
	};
}

export interface ICreateCommentAction {
	type: ActionType.CREATE_COMMENT;
	payload: IComment;
}
export interface IUpdateCommentAction {
	type: ActionType.UPDATE_COMMENT;
	payload: IComment;
}
export interface IDeleteCommentAction {
	type: ActionType.DELETE_COMMENT;
	payload: string;
}
