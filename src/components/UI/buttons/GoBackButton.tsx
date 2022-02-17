import { useNavigate } from "react-router-dom";
import Button from "./Button";

const GoBackButton: React.FC<{}> = () => {
	const navigate = useNavigate();

	return (
		<Button onClick={() => navigate("/")} className="flex justify-center items-center gap-2 w-fit b-font">
			<img src="/assets/shared/icon-arrow-left.svg" alt="icon" />
			Go Back
		</Button>
	);
};
export default GoBackButton;
