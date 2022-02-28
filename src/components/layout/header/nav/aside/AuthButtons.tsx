import { useState } from "react";
import { useActions } from "../../../../../hooks/useActions";
import { useUser } from "../../../../../hooks/useUser";
import AuthModal from "../../../../auth/AuthModal";
import Button from "../../../../UI/buttons/Button";

const AuthButtons: React.FC = () => {
	const user = useUser();
	const [modal, setModal] = useState(false);
	const { logoutUser } = useActions();

	const logoutHandler = async () => {
		const { success }: any = await logoutUser();
		if (success) {
			window.location.reload();
		}
	};

	return (
		<div className="flex-c6">
			{!user && !modal && (
				<Button className="w-fit px-4 py-2 text-white bg-blue rounded-lg" onClick={() => setModal(true)}>
					Login / Register
				</Button>
			)}
			{modal && <AuthModal onClick={() => setModal(false)} />}
			{user && (
				<Button onClick={logoutHandler} className="w-fit px-4 py-2 text-white bg-orange rounded-lg">
					Logout
				</Button>
			)}
		</div>
	);
};
export default AuthButtons;
