import { useNavigate } from "react-router-dom";

const Reload: React.FC = () => {
	const navigate = useNavigate();
	setTimeout(() => {
		navigate(-1);
	}, 2000);

	return (
		<div className="w-screen h-screen gridc">
			<div className="h-20 aspect-square rounded-full border-t-4 border-blue animate-spinning"></div>;
		</div>
	);
};
export default Reload;
