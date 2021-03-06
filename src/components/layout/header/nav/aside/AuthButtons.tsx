import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../../hooks/useActions";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { IPromise } from "../../../../../interfaces/promiseInterface";
import AuthModal from "../../../../auth/AuthModal";
import Button from "../../../../UI/buttons/Button";

const AuthButtons: React.FC = () => {
	const { data: user } = useTypedSelector((state) => state.user);
	const [modal, setModal] = useState(false);
	const { logoutUser } = useActions();
	const navigate = useNavigate();

	const logoutHandler = async () => {
		const { success } = (await logoutUser()) as IPromise;
		if (success) {
			navigate("/reload");
		}
	};

	return (
		<div className="flex-c6">
			{!user && !modal && (
				<Button
					className="w-fit px-4 py-2 text-white bg-blue rounded-lg animate-fade hover:bg-s-blue"
					onClick={() => setModal(true)}
				>
					Login / Register
				</Button>
			)}
			{modal && <AuthModal onClick={() => setModal(false)} />}
			{user && (
				<Button
					onClick={logoutHandler}
					className="w-fit px-4 py-2 text-white bg-orange rounded-lg animate-fade hover:opacity-80"
				>
					Logout
				</Button>
			)}
		</div>
	);
};
export default AuthButtons;
