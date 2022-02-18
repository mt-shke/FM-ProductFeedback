// import axios from "axios";
// import { Dispatch } from "redux";
// import { IComment } from "../../interfaces/interfaces";
// import { Action } from "../action";
// import { ActionType } from "../action-types";

// // const apiUrl = "https://fm-pfeedback-api.herokuapp.com/api/v1";
// const apiUrl = "http://localhost:5000/api/v1";

// export const fetchComments = () => {
// 	return async (dispatch: Dispatch<Action>) => {
// 		dispatch({ type: ActionType.FETCH_COMMENTS });
// 		try {
// 			const data = await axios.get(apiUrl + "/product-requests");
// 			const requests: IComment[] = data.data.requests;
// 			dispatch({
// 				type: ActionType.FETCH_COMMENTS_COMPLETE,
// 				payload: requests,
// 			});
// 		} catch (error: any) {
// 			dispatch({
// 				type: ActionType.FETCH_COMMENTS_ERROR,
// 				payload: { errorMessage: error.errorMessage || "Error while fetching feedbacks" },
// 			});
// 		}
// 	};
// };

// export const createComment = (feedback: IFeedback) => {
// 	return async (dispatch: Dispatch<Action>) => {
// 		dispatch({ type: ActionType.CREATE_FEEDBACK, payload: feedback });

// 		try {
// 		} catch (error) {}
// 	};
// };

export const nothingToAvoidTsComplaining = () => {};
