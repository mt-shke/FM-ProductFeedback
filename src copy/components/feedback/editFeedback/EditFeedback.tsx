import { IPageProps } from "../../../interfaces";
import GoBackButton from "../../UI/buttons/GoBackButton";
import FeedbackForm from "../createFeedback/FeedbackForm";

const EditFeedback: React.FC<IPageProps> = ({ data }) => {
	return (
		<main className="ctn-feedback h-full w-full flex flex-col">
			<section className="flex flex-col gap-16 px-6 py-10">
				<GoBackButton />
				<FeedbackForm data={data} edit={true} />
			</section>
		</main>
	);
};
export default EditFeedback;
