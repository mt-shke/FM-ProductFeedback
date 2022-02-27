import { IUserState } from "../../interfaces";
import { Action } from "../action";
import { ActionType } from "../action-types";

const initalState: IUserState = {
	data: null,
	error: null,
	loading: false,
	verified: false,
};

const userReducer = (state: IUserState = initalState, action: Action) => {
	switch (action.type) {
		case ActionType.LOGIN_USER:
			return { ...state, loading: true, error: null };
		case ActionType.LOGIN_USER_COMPLETE:
			return { ...state, loading: false, data: action.payload };
		case ActionType.LOGIN_USER_ERROR:
			return { ...state, loading: false, error: action.payload };

		// Verify
		case ActionType.VERIFY_USER:
			return { ...state, loading: true, error: null };
		case ActionType.VERIFY_USER_COMPLETE:
			return { ...state, loading: false, data: action.payload, verified: true };
		case ActionType.VERIFY_USER_ERROR:
			return { ...state, loading: false, error: action.payload, verified: true };

		// Logout
		case ActionType.LOGOUT_USER:
			return { ...state, data: initalState };
		default:
			return state;
	}
};

export default userReducer;
