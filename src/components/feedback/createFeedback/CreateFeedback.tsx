import { IComponent } from "../../../interfaces";
import GoBackButton from "../../UI/buttons/GoBackButton";
import FeedbackForm from "./FeedbackForm";

const CreateFeedBack: React.FC<{}> = () => {
	return (
		<main className="h-full w-full flex flex-col">
			<section className="flex flex-col gap-16 px-6 py-10">
				<GoBackButton />
				<FeedbackForm />
			</section>
		</main>
	);
};
export default CreateFeedBack;
