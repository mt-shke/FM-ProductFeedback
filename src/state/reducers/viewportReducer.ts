import { Action } from "../action";
import { ActionType } from "../action-types";

// example simple reducer using viewport : type & interface

export type viewportType = "mobile" | "desktop";

export interface IViewport {
	viewport: null | viewportType;
}

const initialState: IViewport = {
	viewport: null,
};

const viewportReducer = (state: IViewport = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.SET_VIEWPORT_STATE:
			return { viewport: action.payload };
		default:
			return state;
	}
};

export default viewportReducer;
