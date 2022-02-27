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
	// Set Filter
	SET_FILTER_CATEGORY = "set_filter_category",
	SET_FEEDBACK_ORDER = "set_feedback_order",
	SET_UPVOTE = "set_upvote",
	SET_UPVOTE_COMPLETE = "set_upvote_complete",
	SET_UPVOTE_ERROR = "set_upvote_error",

	// Comments
	SET_COMMENT_REPLY = "set_comment_reply",
	RESET_COMMENT_REPLY = "reset_comment_reply",
	CREATE_COMMENT = "create_comment",
	UPDATE_COMMENT = "update_comment",
	DELETE_COMMENT = "delete_comment",

	// USER
	// Get user
	GET_COOKIE_USER = "get_cookie_user",
	FETCH_USER = "fetch_user",

	// Verify cookies
	VERIFY_USER = "verify_user",
	VERIFY_USER_COMPLETE = "verify_user_complete",
	VERIFY_USER_ERROR = "verify_user_error",
	// Login
	LOGIN_USER = "login_user",
	LOGIN_USER_COMPLETE = "login_user_complete",
	LOGIN_USER_ERROR = "login_user_error",
	// Register
	REGISTER_USER = "register_user",
	REGISTER_USER_COMPLETE = "register_user_complete",
	REGISTER_USER_ERROR = "register_user_error",
	// Logout
	LOGOUT_USER = "logout_user",

	// VIEWPORT
	SET_VIEWPORT_STATE = "set_viewport_state",
}
