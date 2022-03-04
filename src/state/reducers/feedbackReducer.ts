import { IFeedback, IFeedbackState } from "../../interfaces";
import { Action } from "../action";
import { ActionType } from "../action-types";

const initialState: IFeedbackState = {
	loading: false,
	error: null,
	data: null,
	targetFeedback: null,
	commentReply: null,
	categoryFilter: "All",
};

const feedbackReducer = (state: IFeedbackState = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.FETCH_FEEDBACKS:
			return { ...state, loading: true, error: null };
		case ActionType.FETCH_FEEDBACKS_COMPLETE:
			return { ...state, loading: false, data: action.payload };
		case ActionType.FETCH_FEEDBACKS_ERROR:
			return { ...state, loading: false, error: action.payload.errorMessage };

		// Single fetch
		case ActionType.FETCH_SINGLE_FEEDBACK:
			return { ...state, loading: true, error: null };
		case ActionType.FETCH_SINGLE_FEEDBACK_COMPLETE:
			let updatedFeebacks;
			if (state.data) {
				const index = state.data.findIndex((fb) => fb._id === action.payload._id);
				updatedFeebacks = [...state.data].map((fb, ind) => (ind === index ? action.payload : fb));
			}
			return { ...state, data: updatedFeebacks, loading: false, targetFeedback: action.payload };
		case ActionType.FETCH_SINGLE_FEEDBACK_ERROR:
			return { ...state, loading: false, error: action.payload.errorMessage };

		// Create feedback
		case ActionType.CREATE_FEEDBACK:
			let newData: IFeedback[] = [];
			if (state.data?.length) {
				newData = [...state.data];
			}
			newData = [...newData, action.payload];
			return { ...state, data: newData, targetFeedback: action.payload };

		case ActionType.UPDATE_FEEDBACK:
			return { ...state, targetFeedback: action.payload };

		case ActionType.DELETE_FEEDBACK: {
			return { ...state, data: action.payload, targetFeedback: null };
		}

		// Set Filter
		case ActionType.SET_TARGET_FEEDBACK:
			return { ...state, targetFeedback: action.payload };
		case ActionType.SET_FILTER_CATEGORY:
			return { ...state, categoryFilter: action.payload };

		case ActionType.SET_FEEDBACK_ORDER:
			let orderedFeedbacks = state.data;
			if (state.data?.length) {
				if (action.payload === "mostComments") {
					orderedFeedbacks = [...state.data].sort((a, b) => a.comments.length - b.comments.length).reverse();
				}

				if (action.payload === "leastComments") {
					orderedFeedbacks = [...state.data].sort((a, b) => a.comments.length - b.comments.length);
				}

				if (action.payload === "mostUpvotes") {
					orderedFeedbacks = [...state.data]
						.sort((a, b) => a.numberOfUpvotes + a.upvoters.length - (b.numberOfUpvotes + b.upvoters.length))
						.reverse();
				}

				if (action.payload === "leastUpvotes") {
					orderedFeedbacks = [...state.data].sort(
						(a, b) => a.numberOfUpvotes + a.upvoters.length - (b.numberOfUpvotes + b.upvoters.length)
					);
				}
			}
			return { ...state, data: orderedFeedbacks };

		// UPvotes

		case ActionType.SET_UPVOTE:
			return { ...state, loading: true, error: null };
		case ActionType.SET_UPVOTE_COMPLETE:
			return { ...state, loading: false, error: null };
		case ActionType.SET_UPVOTE_ERROR:
			return { ...state, loading: false, error: action.payload };

		// Comments
		case ActionType.SET_COMMENT_REPLY:
			return { ...state, commentReply: action.payload };
		case ActionType.RESET_COMMENT_REPLY:
			return { ...state, commentReply: null };

		case ActionType.CREATE_COMMENT:
			return { ...state, targetFeedback: action.payload, commentReply: null };
		case ActionType.DELETE_COMMENT:
			return { ...state, targetFeedback: action.payload, commentReply: null };

		default:
			return state;
	}
};

export default feedbackReducer;
