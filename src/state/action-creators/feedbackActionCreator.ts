import axios from "axios";
import { Dispatch } from "redux";
import { IComment, ICreatedComment, IFeedback } from "../../interfaces";
import { ICreatedFeedback, ICommentReply } from "../../interfaces";
import { API_URL, authAxios } from "../../utils";
import { Action } from "../action";
import { ActionType } from "../action-types";

export const fetchFeedbacks = () => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.FETCH_FEEDBACKS });
		try {
			const data = await axios.get(API_URL + "/product-requests");
			const requests: IFeedback[] = data.data.requests;
			dispatch({
				type: ActionType.FETCH_FEEDBACKS_COMPLETE,
				payload: requests,
			});
		} catch (error: any) {
			dispatch({
				type: ActionType.FETCH_FEEDBACKS_ERROR,
				payload: { errorMessage: error.errorMessage || "Error while fetching feedbacks" },
			});
		}
	};
};

export const fetchSingleFeedbackAction = (id: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.FETCH_SINGLE_FEEDBACK });
		try {
			const data = await axios.get(API_URL + "/product-requests/" + id);
			const request: IFeedback = data.data.request;
			dispatch({
				type: ActionType.FETCH_SINGLE_FEEDBACK_COMPLETE,
				payload: request,
			});
		} catch (error: any) {
			dispatch({
				type: ActionType.FETCH_SINGLE_FEEDBACK_ERROR,
				payload: { errorMessage: error.errorMessage || "Error while fetching single feedback" },
			});
		}
	};
};

// CRUD

export const createFeedback = (feedback: ICreatedFeedback) => {
	return async (dispatch: Dispatch<Action>) => {
		try {
			const response = await authAxios.post("/product-requests", feedback);
			if (response.data.success) {
				const data = await axios.get(API_URL + "/product-requests/" + response.data.request._id);
				const request: IFeedback = data.data.request;
				dispatch({ type: ActionType.CREATE_FEEDBACK, payload: request });
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateFeedback = (feedback: ICreatedFeedback) => {
	return async (dispatch: Dispatch<Action>) => {
		try {
			const { feedbackId, title, category, description } = feedback;
			const response = await authAxios.patch("/product-requests/" + feedbackId, feedback);
			if (response) {
				dispatch({
					type: ActionType.UPDATE_FEEDBACK,
					payload: response.data.request,
				});
				return feedbackId;
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteFeedback = (feedbackId: string) => {
	return async (dispatch: Dispatch<Action>) => {
		try {
			const response = await authAxios.delete("/product-requests/" + feedbackId);
			if (response) {
				const data = await axios.get(API_URL + "/product-requests");
				const requests: IFeedback[] = data.data.requests;
				dispatch({ type: ActionType.DELETE_FEEDBACK, payload: requests });
				return { success: true, message: "Feedback deleted" };
			}
			if (!response) {
				return { success: false, message: "Something went wrong when deleting feedback" };
			}
		} catch (error) {
			console.log(error);
		}
	};
};

// Set targetFeedback
export const setTargetFeedback = (feedback: IFeedback) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.SET_TARGET_FEEDBACK, payload: feedback });
	};
};

// Comments
export const setReplyComment = (commentPayload: ICommentReply) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.SET_COMMENT_REPLY, payload: commentPayload });
	};
};

export const resetReplyComment = () => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.RESET_COMMENT_REPLY });
	};
};

export const createComment = (commentBody: ICreatedComment) => {
	return async (dispatch: Dispatch<Action>) => {
		const { content, productRequest, comment } = commentBody;
		try {
			if (comment.trim() !== "") {
				const response = await authAxios.post(
					`/product-requests/${productRequest}/${comment}/reply`,
					commentBody
				);
				const data = await axios.get(API_URL + "/product-requests/" + productRequest);
				const target: IFeedback = data.data.request;

				dispatch({ type: ActionType.CREATE_COMMENT, payload: target });
				return productRequest;
			} else {
				const response = await authAxios.post(`/product-requests/${productRequest}/reply`, {
					content,
					productRequest,
				});

				const data = await axios.get(API_URL + "/product-requests/" + productRequest);
				const target: IFeedback = data.data.request;
				dispatch({ type: ActionType.CREATE_COMMENT, payload: target });
				return productRequest;
			}
		} catch (error) {
			console.log(error);
			return { success: false };
		}
	};
};

export const deleteComment = (commentBody: IComment) => {
	return async (dispatch: Dispatch<Action>) => {
		const { productRequest, _id } = commentBody;

		try {
			const response = await authAxios.delete(`/product-requests/${productRequest}/${_id}`);
			if (response) {
				const data = await authAxios.get(`/product-requests/${productRequest}`);
				const target: IFeedback = data.data.request;
				dispatch({ type: ActionType.DELETE_COMMENT, payload: target });
				return productRequest;
			}
		} catch (error) {
			console.log(error);
		}
	};
};
