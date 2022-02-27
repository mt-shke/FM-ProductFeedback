interface IProps {}

const LoggedIn: React.FC<IProps> = () => {
	return (
		<p className="w-full flex-c6 items-center py-4 px-6 bg-white text-s-grey opacity-100 rounded-lg authForm md:max-w-[600px]">
			You are now logged in
		</p>
	);
};
export default LoggedIn;
