import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useUser } from "../../hooks/useUser";

const Login: React.FC<{ onClick: () => void }> = ({ onClick }) => {
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
			setErrorMessage("Please enter correct email and password");
			return;
		}
		const response = await loginUser({ email, password });
		console.log(user);
		if (!response) {
			setErrorMessage("Please enter correct email and password");
			return;
		}
		navigate("/create-feedback");
	};

	return (
		<form
			className="w-full flex-c6 items-center p-8 bg-white text-s-grey opacity-100 rounded-lg authForm"
			onSubmit={(e) => submitHandler(e)}
		>
			<label className="w-full" htmlFor="email">
				<h2>Email</h2>
				<input ref={emailRef} className="w-full bg-gray rounded-lg" type="text" id="email" name="email" />
			</label>
			<label className="w-full" htmlFor="password">
				<h2>Password</h2>
				<input
					ref={passwordRef}
					className="w-full bg-gray rounded-lg"
					type="password"
					id="password"
					name="password"
				/>
			</label>
			<button
				onClick={(e) => submitHandler(e)}
				className="w-fit px-4 py-2 text-white bg-blue rounded-lg"
				type="submit"
			>
				Login
			</button>
			<button onClick={onClick} className="w-fit px-4 py-2 text-white bg-orange rounded-lg" type="button">
				Create Account
			</button>
		</form>
	);
};

export default Login;
