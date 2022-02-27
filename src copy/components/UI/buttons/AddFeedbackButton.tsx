import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import { IUser } from "../../../interfaces";
import AuthModal from "../../auth/AuthModal";
import Button from "./Button";

interface IAddFeedbackButtonProps {
	children?: ReactNode;
	className?: string;
	user?: IUser | null;
}

const AddFeedbackButton: React.FC<IAddFeedbackButtonProps> = ({ children, className }) => {
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();
	const user = useUser();

	const checkUser = (e: React.MouseEvent) => {
		if (!user) {
			e.preventDefault();
			setModal(true);
			return;
		}
		navigate("/create-feedback");
	};

	return (
		<>
			<Button onClick={checkUser} className={`${className} w-fit gridc px-4 bg-purple rounded-xl`}>
				{children}
			</Button>
			{modal && <AuthModal onClick={() => setModal(false)} />}
		</>
	);
};
export default AddFeedbackButton;
