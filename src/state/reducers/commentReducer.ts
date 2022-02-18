import { IComment, IFeedback } from "../../interfaces/interfaces";
import { Action } from "../action";
import { ActionType } from "../action-types";

interface ICommentState {
	loading: boolean;
	error: string | null;
	data: IComment[];
}

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const commentReducer = (state: ICommentState = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.FETCH_COMMENTS:
			return { ...state, loading: true, error: null };
		case ActionType.FETCH_COMMENTS_COMPLETE:
			return { ...state, loading: false, data: action.payload };
		case ActionType.FETCH_COMMENTS_ERROR:
			return { ...state, loading: false, error: action.payload.errorMessage };
		default:
			return state;
	}
};

export default commentReducer;
