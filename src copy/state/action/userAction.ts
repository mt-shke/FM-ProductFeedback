import { IUser } from "../../interfaces";
import { ActionType } from "../action-types";

export interface IGetUserCookie {
	type: ActionType.GET_COOKIE_USER;
}

// Verify
export interface IVerifyUserAction {
	type: ActionType.VERIFY_USER;
}
export interface IVerifyUserCompleteAction {
	type: ActionType.VERIFY_USER_COMPLETE;
	payload: IUser;
}
export interface IVerifyUserErrorAction {
	type: ActionType.VERIFY_USER_ERROR;
	payload: string;
}

// Login
export interface ILoginUserAction {
	type: ActionType.LOGIN_USER;
}
export interface ILoginUserActionComplete {
	type: ActionType.LOGIN_USER_COMPLETE;
	payload: IUser;
}
export interface ILoginUserActionError {
	type: ActionType.LOGIN_USER_ERROR;
	payload: string;
}

// Register
export interface IRegisterUserAction {
	type: ActionType.REGISTER_USER;
}
export interface IRegisterUserActionComplete {
	type: ActionType.REGISTER_USER_COMPLETE;
}
export interface IRegisterUserActionError {
	type: ActionType.REGISTER_USER_ERROR;
	payload: string;
}

// Logout
export interface ILogoutUser {
	type: ActionType.LOGOUT_USER;
}
