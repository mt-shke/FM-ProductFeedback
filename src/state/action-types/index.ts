export enum ActionType {
	// Fetch All Feedbacks
	FETCH_FEEDBACKS = "fetch_feedbacks",
	FETCH_FEEDBACKS_COMPLETE = "fetch_feedbacks_complete",
	FETCH_FEEDBACKS_ERROR = "fetch_feedbacks_error",
	// Fetch Single
	FETCH_SINGLE_FEEDBACK = "fetch_single_feedback",
	FETCH_SINGLE_FEEDBACK_COMPLETE = "fetch_single_feedback_complete",
	FETCH_SINGLE_FEEDBACK_ERROR = "fetch_single_feedback_error",
	// CRUD
	CREATE_FEEDBACK = "create_feedback",
	UPDATE_FEEDBACK = "update_feedback",
	DELETE_FEEDBACK = "delete_feedback",
	// Set Target
	SET_TARGET_FEEDBACK = "set_target_feedback",

	// Comments
	FETCH_COMMENTS = "fetch_comments",
	FETCH_COMMENTS_COMPLETE = "fetch_comments_complete",
	FETCH_COMMENTS_ERROR = "fetch_comments_error",
	CREATE_COMMENT = "create_comment",
	UPDATE_COMMENT = "update_comment",
	DELETE_COMMENT = "delete_comment",
}
