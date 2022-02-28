import { Dispatch } from "redux";
import { INewUser, IuserCredentials } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../action";
import { API_URL, authAxios } from "../../utils";
import { IPromise } from "../../interfaces/promiseInterface";
import axios from "axios";

export const verifyUserCookie = () => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.VERIFY_USER });
		try {
			const data = await authAxios.post("/auth/verify-user");
			dispatch({ type: ActionType.VERIFY_USER_COMPLETE, payload: data.data.user });
		} catch (error: any) {
			dispatch({ type: ActionType.VERIFY_USER_ERROR, payload: error.errorMessage as string });
			const err = JSON.parse(JSON.stringify(error));
			return { success: false, message: err.message, status: err.status };
		}
	};
};

export const loginUser = (credentials: IuserCredentials) => {
	return async (dispatch: Dispatch<Action>): Promise<IPromise> => {
		dispatch({ type: ActionType.LOGIN_USER });
		try {
			const response = await axios.post(API_URL + "/auth/login", credentials);
			dispatch({ type: ActionType.LOGIN_USER_COMPLETE, payload: response.data.user });
			if (response.data.success === true) {
				return { success: true, message: response.data.message };
			}
			return { success: false, message: response.data.message };
		} catch (error: any) {
			dispatch({ type: ActionType.LOGIN_USER_ERROR, payload: error.errorMessage as string });
			const err = JSON.parse(JSON.stringify(error));
			return { success: false, message: err.message, status: err.status };
		}
	};
};

export const registerUser = (newUser: INewUser) => {
	const { email, password, username } = newUser;

	return async (dispatch: Dispatch<Action>): Promise<IPromise> => {
		dispatch({ type: ActionType.REGISTER_USER });
		try {
			const data = await authAxios.post("/auth/register", newUser);
			if (data.data.success === true) {
				dispatch({ type: ActionType.REGISTER_USER_COMPLETE });
				return { success: false, message: data.data.message };
			}
			return { success: false, message: data.data.message };
		} catch (error: any) {
			console.error(JSON.parse(JSON.stringify(error)));
			dispatch({ type: ActionType.REGISTER_USER_ERROR, payload: error.errorMessage as string });
			const err = JSON.parse(JSON.stringify(error));
			return { success: false, message: err.message, status: err.status };
		}
	};
};

export const logoutUser = () => {
	return async (dispatch: Dispatch<Action>): Promise<any> => {
		dispatch({ type: ActionType.REGISTER_USER });
		try {
			const data = await authAxios.post("/auth/logout");
			if (data.data.success === true) {
				dispatch({ type: ActionType.LOGOUT_USER });
				return { success: true };
			} else {
				return {
					success: false,
				};
			}
		} catch (error: any) {
			const err = JSON.parse(JSON.stringify(error));
			return { success: false, message: err.message, status: err.status };
		}
	};
};
