import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useUser } from "../../hooks/useUser";
import { IPromise } from "../../interfaces/promiseInterface";
import { setCustomMessage } from "../../utils";
import ModalMessage from "./ModalMessage";

interface ILoginProps {
	onLogin: () => void;
	addFeedback?: boolean;
	onSwitchRegister?: (e: React.MouseEvent) => void;
}

const Login: React.FC<ILoginProps> = ({ onLogin, addFeedback, onSwitchRegister }) => {
	const [errorMessage, setErrorMessage] = useState<string>("");
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const { loginUser } = useActions();
	const user = useUser();
	const navigate = useNavigate();

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		const email = emailRef.current?.value.toString() as string;
		const password = passwordRef.current?.value.toString() as string;
		if (email.trim() === "" || password.trim() === "") {
			setCustomMessage("Please enter a correct email and password", setErrorMessage);
			return;
		}
		const { success, message } = (await loginUser({ email, password })) as IPromise;
		if (!success) {
			setCustomMessage("Please enter a correct email and password" as string, setErrorMessage);
			return;
		}
		if (success) {
			if (addFeedback) navigate("/create-feedback");
			onLogin();
		}
	};

	return (
		<>
			<form
				className="w-full flex-c6 items-center p-8 bg-white text-s-grey opacity-100 rounded-lg  md:max-w-[600px]"
				onSubmit={(e) => submitHandler(e)}
			>
				<label className="w-full" htmlFor="email">
					<h2>Email</h2>
					<input
						ref={emailRef}
						className="w-full bg-gray rounded-lg"
						type="text"
						id="email"
						name="email"
						placeholder="john@doe.com"
					/>
				</label>
				<label className="w-full" htmlFor="password">
					<h2>Password</h2>
					<input
						ref={passwordRef}
						className="w-full bg-gray rounded-lg"
						type="password"
						id="password"
						name="password"
						placeholder="johndoe"
					/>
				</label>
				<button
					onClick={(e) => submitHandler(e)}
					className="w-fit px-4 py-2 text-white bg-blue rounded-lg hover:bg-s-blue transition-all duration-300"
					type="submit"
				>
					Login
				</button>
				<button
					onClick={onSwitchRegister}
					className="w-fit px-4 py-2 text-white bg-orange rounded-lg hover:opacity-80 transition-all duration-300"
					type="button"
				>
					Create Account
				</button>
			</form>
			{errorMessage && <ModalMessage message={errorMessage} />}
		</>
	);
};

export default Login;
