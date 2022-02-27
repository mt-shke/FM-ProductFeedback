import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IFeedback } from "../../interfaces";
import FeedbackCard from "../UI/cards/FeedbackCard";

interface IFeedbackListProps {
	list: IFeedback[];
	setStatus?: boolean;
}

const FeedbackList: React.FC<IFeedbackListProps> = ({ list, setStatus }) => {
	const { categoryFilter } = useTypedSelector((state) => state.feedbacks);
	const { setTargetFeedback } = useActions();
	const navigate = useNavigate();

	const categoryFilteredList =
		categoryFilter === "All" ? list : list.filter((feedback) => feedback.category === categoryFilter);

	const onClickHandler = (e: React.MouseEvent, feedback: IFeedback) => {
		const target = e.target as HTMLElement;
		const id = target?.closest("div")?.id;
		if (id) {
			setTargetFeedback(feedback);
			navigate("/feedback/" + id);
		}
	};

	return (
		<section className="grid grid-flow-row gap-6 items-start p-6 bg-gray md:p-0 xl:gap-8 ">
			{categoryFilteredList.map((feedback: any) => (
				<div
					className=" hover:cursor-pointer"
					onClick={(e) => onClickHandler(e, feedback)}
					key={feedback._id}
					id={feedback._id}
				>
					<FeedbackCard feedback={feedback} setStatus={setStatus} />
				</div>
			))}
		</section>
	);
};
export default FeedbackList;
