import { useState } from "react";
import { IPageProps } from "../../interfaces";
import AuthModal from "../auth/AuthModal";
import FeedbackList from "../feedback/FeedbackList";
import AddFeedbackButton from "../UI/buttons/AddFeedbackButton";
import MainSelect from "./MainSelect";
import NoFeedBack from "./NoFeedback";

const Main: React.FC<IPageProps> = ({ data }) => {
	const [modal, setModal] = useState(false);
	const feedbacks = data.feedbacks?.feedbacks;
	const user = data.user;

	const checkUser = (e: React.MouseEvent) => {
		if (!user) {
			e.preventDefault();
			setModal(true);
		}
	};

	return (
		<main className="h-full w-full flex flex-col">
			{modal && <AuthModal onClick={() => setModal(false)} />}
			<section className="h-14 flex justify-between items-center px-6 py-2 bg-s-grey text-s-white whitespace-nowrap">
				<div className="flex items-center gap-1">
					<span>Sort by:</span>
					<MainSelect />
				</div>
				<AddFeedbackButton
					onClick={(e) => checkUser(e)}
					className="h-full w-fit gridc px-4 bg-purple rounded-xl"
				>
					+ Add Feedback
				</AddFeedbackButton>
			</section>

			{!feedbacks && <NoFeedBack />}
			{feedbacks && <FeedbackList list={feedbacks} />}
		</main>
	);
};
export default Main;
