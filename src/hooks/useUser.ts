import { useEffect } from "react";
import { IUser } from "../interfaces";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useUser = () => {
    const { data, loading, verified } = useTypedSelector((state) => state.user);
    const { verifyUserCookie } = useActions();
    useEffect(() => {
        if (verified) return;
        if (data === null) return;
        if (loading) return;

        // TODO
        // set user cookie params
        verifyUserCookie();
    });

    return data as IUser;
};
