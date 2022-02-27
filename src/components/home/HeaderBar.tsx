import { IFeedback, IUser } from "../../interfaces";
import AddFeedbackButton from "../UI/buttons/AddFeedbackButton";
import MainSelect from "./MainSelect";

interface IHeaderBarProps {
	user: IUser | null;
	feedbacks: IFeedback[] | null | undefined;
}

const HeaderBar: React.FC<IHeaderBarProps> = ({ feedbacks, user }) => {
	const numOfSugg = feedbacks?.filter((fb) => fb.status === "Suggestion").length;

	return (
		<header className="h-14 flex justify-between items-center px-6 py-2 bg-s-grey text-s-white whitespace-nowrap md:h-16 md:rounded-md md:justify-start xl:h-20">
			<div className="flex items-center gap-2">
				<span>
					<img src="/assets/suggestions/icon-suggestions.svg" alt="icon" />
				</span>
				<h3>
					<span>{numOfSugg ? numOfSugg : 0}</span> Suggestion
					{numOfSugg && numOfSugg >= 2 ? "s" : ""}
				</h3>
			</div>
			<div className="flex items-center gap-1 md:mx-6 xl:mx-12 xl:gap-2">
				<span>Sort by:</span>
				<MainSelect />
			</div>
			<AddFeedbackButton user={user} className="h-full md:h-10 md:ml-auto md:mr-0">
				+ Add Feedback
			</AddFeedbackButton>
		</header>
	);
};
export default HeaderBar;
