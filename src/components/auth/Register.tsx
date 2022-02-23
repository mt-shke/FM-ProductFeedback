import { useRef, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { INewUser } from "../../interfaces";
import { setMsgFunction, validateEmail } from "../../utils";
import ModalMessage from "./ModalMessage";

const Register: React.FC<{}> = () => {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const usernameRef = useRef<HTMLInputElement | null>(null);
	const { registerUser } = useActions();
	const { error, loading } = useTypedSelector((state) => state.user);
	const [msg, setMsg] = useState<false | string>(false);

	const submitHandler = async (e: React.FormEvent) => {
		if (loading) return;
		e.preventDefault();
		const email = emailRef.current?.value.toString().trim();
		const password = passwordRef.current?.value.toString().trim();
		const username = usernameRef.current?.value.toString().trim();

		if (!email || !password || !username) {
			setMsgFunction("Please enter required field", setMsg);
			return;
		}

		if (!validateEmail(email)) {
			setMsgFunction("Please provid valid email", setMsg);
			return;
		}

		if (password.length < 6 || username?.length < 6) {
			setMsgFunction("Please enter valid values - 6 characters minimum", setMsg);
			return;
		}

		const newUser: INewUser = { email, password, username };
		// const response = await registerUser(newUser);
		// if (error) {
		// 	setMsgFunction(error, setMsg);
		// 	return;
		// }
		// if (response.success) {
		// 	setMsgFunction("Please check your email and activate your account before posting", setMsg)

		// }
	};

	return (
		<>
			{msg && <ModalMessage message={msg} />}
			<form
				className="w-full flex-c6 items-center p-8 bg-white text-s-grey opacity-100 rounded-lg "
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
						placeholder="6 Characters minimum"
					/>
				</label>
				<label className="w-full" htmlFor="username">
					<h2>Username</h2>
					<input
						ref={usernameRef}
						className="w-full bg-gray rounded-lg"
						type="text"
						id="username"
						name="username"
						placeholder="6-30 Characters"
					/>
				</label>

				<button
					onClick={(e) => submitHandler(e)}
					className="w-fit px-4 py-2 text-white bg-orange rounded-lg"
					type="submit"
				>
					Register
				</button>
			</form>
		</>
	);
};

export default Register;
