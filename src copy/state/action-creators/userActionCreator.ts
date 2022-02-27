import { Dispatch } from "redux";
import { INewUser, IuserCredentials } from "../../interfaces";
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

export const registerUser = (newUser: INewUser) => {
	const { email, password, username } = newUser;

	return async (dispatch: Dispatch<Action>): Promise<{ success: boolean }> => {
		dispatch({ type: ActionType.REGISTER_USER });
		try {
			const data = await authAxios.post("/auth/register", newUser);
			if (data.data.success === true) {
				dispatch({ type: ActionType.REGISTER_USER_COMPLETE });
				return { success: true };
			}
			return { success: false };
		} catch (error: any) {
			console.error(JSON.parse(JSON.stringify(error)));
			dispatch({ type: ActionType.REGISTER_USER_ERROR, payload: error.errorMessage as string });
			return { success: false };
		}
	};
};

export const logoutUser = () => {
	return async (dispatch: Dispatch<Action>): Promise<{ success: boolean }> => {
		dispatch({ type: ActionType.REGISTER_USER });
		try {
			const data = await authAxios.post("/auth/logout");
			if (data.data.success === true) {
				dispatch({ type: ActionType.LOGOUT_USER });
				return { success: true };
			}
			return { success: false };
		} catch (error: any) {
			console.error(JSON.parse(JSON.stringify(error)));
			return { success: false };
		}
	};
};
