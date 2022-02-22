import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

interface IAuthModalProps {
	onClick: (e: React.MouseEvent) => void;
}

const AuthModal: React.FC<IAuthModalProps> = ({ onClick }) => {
	const [register, setRegister] = useState(false);

	return (
		<div
			onClick={(e) => onClick(e)}
			className="fixed z-50 inset-0 px-6 gridc text-s-white bg-transparent-g animate-fade"
		>
			{!register && <Login onClick={() => setRegister(true)} />}
			{register && <Register />}
		</div>
	);
};
export default AuthModal;
