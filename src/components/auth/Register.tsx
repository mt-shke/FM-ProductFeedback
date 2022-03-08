import { useRef, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { INewUser, IPromise } from "../../interfaces";
import { setCustomMessage, validateEmail } from "../../utils";
import ModalMessage from "./ModalMessage";

interface IRegisterProps {
	setModal?: () => void;
}

const Register: React.FC<IRegisterProps> = ({ setModal }) => {
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
			setCustomMessage("Please enter required fields", setMsg);
			return;
		}

		if (!validateEmail(email)) {
			setCustomMessage("Please provid a valid email", setMsg);
			return;
		}

		if (password.length < 6 || username?.length < 6) {
			setCustomMessage("Please enter valid values: 6 characters minimum", setMsg);
			return;
		}

		const newUser: INewUser = { email, password, username };
		const { success, message } = (await registerUser(newUser)) as IPromise;

		if (!success) {
			console.error(message);
			setCustomMessage("Please provid valid values", setMsg);
			return;
		}
		setCustomMessage("Please check your email and activate your account", setMsg);

		setTimeout(() => {
			if (setModal) {
				setModal();
			}
		}, 4000);
	};

	return (
		<>
			{msg && <ModalMessage message={msg} />}
			<form
				className="w-full flex-c6 items-center p-8 bg-white text-s-grey opacity-100 rounded-lg md:max-w-[600px]"
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
