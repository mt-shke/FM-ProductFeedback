import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IFeedback } from "../../interfaces";
import FeedbackCard from "../UI/cards/FeedbackCard";

interface IFeedbackListProps {
	list: IFeedback[];
}

const FeedbackList: React.FC<IFeedbackListProps> = ({ list }) => {
	const { setTargetFeedback } = useActions();
	const { categoryFilter } = useTypedSelector((state) => state.feedbacks);
	const navigate = useNavigate();

	const categoryFilteredList =
		categoryFilter === "All" ? list : list.filter((feedback) => feedback.category === categoryFilter);

	const onClickHandler = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		const id = target?.closest("div")?.id;
		if (id) navigate("/feedback/" + id);
	};

	return (
		<section onClick={(e) => onClickHandler(e)} className="grid grid-flow-row gap-6 items-start p-6 bg-gray">
			{categoryFilteredList.map((feedback: any) => (
				<div onClick={(e) => onClickHandler(e)} key={feedback._id} id={feedback._id}>
					<FeedbackCard feedback={feedback} />
				</div>
			))}
		</section>
	);
};
export default FeedbackList;
