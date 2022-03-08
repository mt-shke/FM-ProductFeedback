import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { IPromise } from "../../interfaces";

const NewAccount: React.FC = () => {
	const [isActive, setIsActive] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const { pathname, search } = useLocation();
	const { activateEmail } = useActions();
	const navigate = useNavigate();

	const verifyEmail = async (search: string) => {
		if (isFetching) return;
		if (!search.startsWith("?")) return;
		const credentials = search.replace("?", "").split("&");
		const verificationToken = credentials[0].replace("token=", "");
		const email = credentials[1].replace("email=", "");

		setIsFetching(true);
		const { success } = (await activateEmail({ verificationToken, email })) as IPromise;
		if (success) {
			setIsActive(true);
			setTimeout(() => {
				navigate("/");
			}, 2000);
			return;
		}
		setIsFetching(false);
		return;
	};

	if (pathname.startsWith("/new-account/verify-email")) {
		verifyEmail(search);
	}

	return (
		<div className="w-screen h-screen gridc animate-fade">
			{isActive && <h2>Your account is activated, you will be redirected in a moment...</h2>}
			{!isActive && <h2>Account inactive...</h2>}
		</div>
	);
};
export default NewAccount;
