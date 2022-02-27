import { IFeedbackComponent, IUser } from "../../interfaces";
import AddFeedbackButton from "../UI/buttons/AddFeedbackButton";

const NoFeedBack: React.FC<{ user: IUser | null }> = ({ user }) => {
	return (
		<section className="flex flex-col justify-center items-center p-6 bg-gray md:p-0">
			<article className="w-full flex flex-col gap-6 justify-center items-center text-center px-6 py-16 bg-white rounded-lg lg:py-32">
				<div>
					<img src="/assets/suggestions/illustration-empty.svg" alt="illustration" />
				</div>
				<h2 className="mt-8">There is no feedback yet.</h2>
				<p className="s-font">
					Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve
					our app.
				</p>
				<AddFeedbackButton user={user} className="h-full py-2 text-s-white ">
					+ Add Feedback
				</AddFeedbackButton>
			</article>
		</section>
	);
};
export default NoFeedBack;
