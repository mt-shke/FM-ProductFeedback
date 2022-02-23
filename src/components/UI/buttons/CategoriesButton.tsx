import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { CategoriesType, IComponent } from "../../../interfaces";
import Button from "./Button";

const CategoriesButton: React.FC<IComponent> = ({ children, className }) => {
	const { setFilterCategory } = useActions();
	const { categoryFilter } = useTypedSelector((state) => state.feedbacks);
	const selected = categoryFilter === children;

	const onClickHandler = () => {
		if (categoryFilter === children) {
			setFilterCategory("All");
			return;
		}
		setFilterCategory(children as CategoriesType);
	};

	return (
		<Button
			onClick={() => onClickHandler()}
			className={`${className} ${
				selected ? "text-white bg-blue" : "text-dark bg-gray font-semibold"
			} w-fit px-4 py-2 rounded-lg text-sm CategoriesButton`}
		>
			{children}
		</Button>
	);
};
export default CategoriesButton;
