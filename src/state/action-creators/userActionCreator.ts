import { Dispatch } from "redux";
import { INewUser, IuserCredentials } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../action";
import { authAxios } from "../../utils";
import { IPromise } from "../../interfaces/promiseInterface";

export const verifyUserCookie = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.VERIFY_USER });
        try {
            const data = await authAxios.post("/auth/verify-user");
            dispatch({
                type: ActionType.VERIFY_USER_COMPLETE,
                payload: data.data.user,
            });
        } catch (error) {
            // if (error instanceof TypeError) {
            //     // A TypeError
            // } else if (error instanceof RangeError) {
            //     // Handle the RangeError
            // } else if (error instanceof EvalError) {
            //     // you guessed it: EvalError
            // } else if (typeof error === "string") {
            //     // The error is a string
            // } else {
            //     // everything else
            // }

            const err = JSON.parse(JSON.stringify(error));

            dispatch({
                type: ActionType.VERIFY_USER_ERROR,
                payload: err.message as string,
            });
            return { success: false, message: err, status: err.status };
        }
    };
};

export const loginUser = (credentials: IuserCredentials) => {
    return async (dispatch: Dispatch<Action>): Promise<IPromise> => {
        dispatch({ type: ActionType.LOGIN_USER });
        try {
            const response = await authAxios.post("/auth/login", credentials);
            console.log("response login");

            console.log(response);

            dispatch({
                type: ActionType.LOGIN_USER_COMPLETE,
                payload: response.data.user,
            });
            if (response.data.success === true) {
                return { success: true, message: response.data.message };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            const err = JSON.parse(JSON.stringify(error));
            dispatch({
                type: ActionType.LOGIN_USER_ERROR,
                payload: err.message as string,
            });
            return { success: false, message: err.message, status: err.status };
        }
    };
};

export const registerUser = (newUser: INewUser) => {
    return async (dispatch: Dispatch<Action>): Promise<IPromise> => {
        dispatch({ type: ActionType.REGISTER_USER });
        try {
            const response = await authAxios.post("/auth/register", newUser);

            if (response.data.success === true) {
                dispatch({ type: ActionType.REGISTER_USER_COMPLETE });
                return { success: true, message: response.data.message };
            } else {
                dispatch({
                    type: ActionType.REGISTER_USER_ERROR,
                    payload: response.data.message,
                });
                return { success: false, message: response.data.message };
            }
        } catch (error: any) {
            const err = JSON.parse(JSON.stringify(error));

            dispatch({
                type: ActionType.REGISTER_USER_ERROR,
                payload: err.message as string,
            });
            return { success: false, message: err.message, status: err.status };
        }
    };
};

export const logoutUser = () => {
    return async (dispatch: Dispatch<Action>): Promise<IPromise> => {
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
        } catch (error) {
            const err = JSON.parse(JSON.stringify(error));
            return { success: false, message: err.message, status: err.status };
        }
    };
};

export const activateEmail = ({
    verificationToken,
    email,
}: {
    verificationToken: string;
    email: string;
}) => {
    return async (dispatch: Dispatch<Action>): Promise<IPromise> => {
        try {
            const response = await authAxios.post("/auth/verify-email", {
                verificationToken,
                email,
            });
            if (response.data.success === true) {
                return { success: true };
            } else {
                return {
                    success: false,
                };
            }
        } catch (error) {
            const err = JSON.parse(JSON.stringify(error));
            return { success: false, message: err.message, status: err.status };
        }
    };
};
