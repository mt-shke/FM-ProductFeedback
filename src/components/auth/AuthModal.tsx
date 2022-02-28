import { useState } from "react";
import Login from "./Login";
import LoggedIn from "./login/LoggedIn";
import Register from "./Register";

interface IAuthModalProps {
	onClick: () => void;
}

const AuthModal: React.FC<IAuthModalProps> = ({ onClick }) => {
	const [register, setRegister] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const setUserLoggedIn = () => {
		setIsLoggedIn(true);
		window.location.reload();
		setTimeout(() => {
			onClick();
		}, 1400);
	};

	const onClickHandler = (e: React.MouseEvent) => {
		const target = e.target as HTMLDivElement;
		if (target.classList.contains("authModal")) {
			onClick();
		}
	};

	return (
		<div
			onClick={(e) => onClickHandler(e)}
			className={`authModal fixed z-50 inset-0 px-6 gridc text-s-white bg-transparent-g  ${
				isLoggedIn ? "animate-fadeOut" : "animate-fade"
			} `}
		>
			{isLoggedIn && <LoggedIn />}
			{!isLoggedIn && !register && (
				<Login onLogin={setUserLoggedIn} onSwitchRegister={() => setRegister(true)} />
			)}
			{!isLoggedIn && register && <Register />}
		</div>
	);
};
export default AuthModal;
