import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { IFeedback, StatusType } from "../../interfaces";
import FeedbackCard from "../UI/cards/FeedbackCard";

interface IRoadmapSortedFeedback {
	feedbacks: IFeedback[] | null;
	setStatus?: boolean;
}

const RoadmapSortedFeedback: React.FC<IRoadmapSortedFeedback> = ({ feedbacks }) => {
	const { setTargetFeedback } = useActions();
	const navigate = useNavigate();

	const filterFeedback = (status: StatusType) => feedbacks?.filter((fb) => fb.status === status);

	const onClickHandler = (e: React.MouseEvent, feedback: IFeedback) => {
		const target = e.target as HTMLElement;
		const id = target?.closest("div")?.id;
		if (id) {
			setTargetFeedback(feedback);
			navigate("/feedback/" + id);
		}
	};

	return (
		<section className="grid grid-cols-3 gap-4 my-4 lg:gap-6">
			<section className="col-start-1 col-end-2 flex-c6">
				{filterFeedback("Planned")?.map((feedback) => (
					<div
						className="w-full h-[280px] hover:cursor-pointer"
						onClick={(e) => onClickHandler(e, feedback)}
						key={feedback._id}
						id={feedback._id}
					>
						<FeedbackCard feedback={feedback} setStatus={true} />
					</div>
				))}
			</section>

			<section className="col-start-2 col-end-3 flex-c6">
				{filterFeedback("In-Progress")?.map((feedback) => (
					<div
						className="w-full h-[280px] hover:cursor-pointer"
						onClick={(e) => onClickHandler(e, feedback)}
						key={feedback._id}
						id={feedback._id}
					>
						<FeedbackCard feedback={feedback} setStatus={true} />
					</div>
				))}
			</section>

			<section className="col-start-3 col-end-4 flex-c6">
				{filterFeedback("Live")?.map((feedback) => (
					<div
						className="w-full h-[280px] hover:cursor-pointer"
						onClick={(e) => onClickHandler(e, feedback)}
						key={feedback._id}
						id={feedback._id}
					>
						<FeedbackCard feedback={feedback} setStatus={true} />
					</div>
				))}
			</section>
		</section>
	);
};
export default RoadmapSortedFeedback;
