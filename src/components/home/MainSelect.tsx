import { useActions } from "../../hooks/useActions";
import { OrderFilterType } from "../../interfaces/feedbackInterface";

const MainSelect: React.FC = () => {
	const { setFeedbackOrder } = useActions();

	const onChangeHandler = (event: React.ChangeEvent) => {
		const target = event.target as HTMLSelectElement;
	};

	return (
		<label htmlFor="sortFilter">
			<select
				className="b-font px-2 bg-transparent text-white"
				name="sortFilter"
				id="sortFilter"
				defaultValue="default"
				// onChange={onChangeHandler}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setFeedbackOrder(e.target.value as OrderFilterType)
				}
			>
				<option value="mostUpvotes">Most upvotes</option>
				<option value="leastUpvotes">Least upvotes</option>
				<option value="mostComments">Most comments</option>
				<option value="leastComments">Least comments</option>
			</select>
		</label>
	);
};
export default MainSelect;
