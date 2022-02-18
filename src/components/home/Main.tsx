import { useFeedback } from "../../hooks/useFeedback";
import FeedbackList from "../feedback/FeedbackList";
import AddFeedbackButton from "../UI/buttons/AddFeedbackButton";
import NoFeedBack from "./NoFeedback";

const Main: React.FC = () => {
	const { data } = useFeedback();
	return (
		<main className="h-full w-full flex flex-col">
			<section className="h-14 flex justify-between items-center px-6 py-2 bg-s-grey text-s-white whitespace-nowrap">
				<div className="flex items-center gap-1">
					<span>Sort by:</span>
					<label htmlFor="sortFilter">
						<select className="b-font px-2 bg-transparent text-white" name="sortFilter" id="sortFilter">
							<option value="most-upvotes">Most upvotes</option>
							<option value="least-upvotes">Least upvotes</option>
							<option value="most-comments">Most comments</option>
							<option value="least-comments">Least comments</option>
						</select>
					</label>
				</div>
				<AddFeedbackButton className="h-full w-fit gridc px-4 bg-purple rounded-xl ">
					+ Add Feedback
				</AddFeedbackButton>
			</section>
			{!data && <NoFeedBack />}
			{data && <FeedbackList list={data} />}
		</main>
	);
};
export default Main;
