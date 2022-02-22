import { useRef } from "react";

const Register: React.FC<{}> = () => {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const fullnameRef = useRef<HTMLInputElement | null>(null);
	const usernameRef = useRef<HTMLInputElement | null>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		const username = usernameRef.current?.value;
		const fullname = fullnameRef.current?.value;

		// submitToDb
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
			<label className="w-full" htmlFor="username">
				<h2>Username</h2>
				<input
					ref={usernameRef}
					className="w-full bg-gray rounded-lg"
					type="text"
					id="username"
					name="username"
				/>
			</label>
			<label className="w-full" htmlFor="fullname">
				<h2>Full Name</h2>
				<input
					ref={fullnameRef}
					className="w-full bg-gray rounded-lg"
					type="text"
					id="fullname"
					name="fullname"
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
	);
};

export default Register;
