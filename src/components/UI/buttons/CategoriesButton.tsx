import { IComponent } from "../../../interfaces";
import Button from "./Button";

interface CategoriesButtonProps extends IComponent {
	selected?: boolean;
}

const CategoriesButton: React.FC<CategoriesButtonProps> = ({ children, className, selected }) => {
	return (
		<Button
			className={`${className} ${
				selected ? "text-white bg-blue" : "text-dark bg-gray font-semibold"
			} w-fit px-4 py-2 rounded-lg text-sm`}
		>
			{children}
		</Button>
	);
};
export default CategoriesButton;
