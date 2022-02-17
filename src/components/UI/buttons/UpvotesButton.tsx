import { IComponent } from "../../../interfaces";
import Button from "./Button";

const UpvotesButton: React.FC<IComponent> = ({ children }) => {
	return (
		<Button className="flex items-center gap-2 px-4 py-[5px] text-s-grey bg-gray font-semibold w-fit  rounded-lg text-sm">
			<span>
				<img src="/assets/shared/icon-arrow-up.svg" alt="icon up" />
			</span>
			{children}
		</Button>
	);
};
export default UpvotesButton;
