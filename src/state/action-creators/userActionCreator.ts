import { Dispatch } from "redux";
import { IuserCredentials, IUser } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../action";
import { authAxios } from "../../utils";

export const verifyUserCookie = () => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.VERIFY_USER });
		try {
			const data = await authAxios.post("/auth/verify-user");
			dispatch({ type: ActionType.VERIFY_USER_COMPLETE, payload: data.data.user });
		} catch (error: any) {
			dispatch({ type: ActionType.VERIFY_USER_ERROR, payload: error.errorMessage as string });
		}
	};
};

export const loginUser = (credentials: IuserCredentials) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.LOGIN_USER });
		try {
			const data = await authAxios.post("/auth/login", credentials);
			dispatch({ type: ActionType.LOGIN_USER_COMPLETE, payload: data.data.user });
			if (data.data.success === true) {
				return { succes: true };
			}
			return { succes: false };
		} catch (error: any) {
			dispatch({ type: ActionType.LOGIN_USER_ERROR, payload: error.errorMessage as string });
			return { succes: false };
		}
	};
};
