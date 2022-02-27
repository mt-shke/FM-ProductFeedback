import { useLocation, useNavigate } from "react-router-dom";
import ArrowButton from "./ArrowButton";
import Button from "./Button";

const GoBackButton: React.FC<{ white?: boolean }> = ({ white }) => {
	const navigate = useNavigate();

	return (
		<Button onClick={() => navigate("/")} className="flex justify-center items-center gap-2 w-fit b-font">
			<ArrowButton white={white} />
			Go Back
		</Button>
	);
};
export default GoBackButton;
