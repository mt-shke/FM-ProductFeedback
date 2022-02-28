import { useNavigate } from "react-router-dom";

const Reload: React.FC = () => {
	const navigate = useNavigate();

	const goHome = () =>
		setTimeout(() => {
			navigate("/");
		}, 1000);

	goHome();

	return (
		<div className="w-screen h-screen gridc">
			<div className="h-20 aspect-square rounded-full border-t-4 border-blue animate-spinning"></div>;
		</div>
	);
};
export default Reload;
