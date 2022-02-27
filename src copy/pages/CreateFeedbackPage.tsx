import CreateFeedBack from "../components/feedback/createFeedback/CreateFeedback";
import { IPageProps } from "../interfaces";

const CreateFeedbackPage: React.FC<IPageProps> = ({ data }) => {
	return <CreateFeedBack data={data} />;
};
export default CreateFeedbackPage;
