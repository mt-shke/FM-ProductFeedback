import axios from "axios";
import { Dispatch } from "redux";
import { IFeedback } from "../../interfaces";
import { Action } from "../action";
import { ActionType } from "../action-types";

// const apiUrl = "https://fm-pfeedback-api.herokuapp.com/api/v1";
const apiUrl = "http://localhost:5000/api/v1";

export const fetchFeedbacks = () => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.FETCH_FEEDBACKS });
		try {
			const data = await axios.get(apiUrl + "/product-requests");
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
			const data = await axios.get(apiUrl + "/product-requests/" + id);
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

export const createFeedback = (feedback: IFeedback) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.CREATE_FEEDBACK, payload: feedback });

		try {
		} catch (error) {}
	};
};

export const setTargetFeedback = (feedback: IFeedback) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.SET_TARGET_FEEDBACK, payload: feedback });
	};
};
