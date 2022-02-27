import { ActionType } from "../action-types";
import { viewportType } from "../reducers/viewportReducer";

export interface ISetViewportState {
	type: ActionType.SET_VIEWPORT_STATE;
	payload: viewportType;
}
