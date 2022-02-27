import { Dispatch } from "redux";
import { Action } from "../action";
import { ActionType } from "../action-types";
import { viewportType } from "../reducers/viewportReducer";

export const setViewportState = (viewport: viewportType) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.SET_VIEWPORT_STATE, payload: viewport });
	};
};
