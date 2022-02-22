import EditFeedback from "../components/feedback/editFeedback/EditFeedback";
import { IPageProps } from "../interfaces";

const EditFeedbackPage: React.FC<IPageProps> = ({ data }) => {
	return <EditFeedback data={data} />;
};
export default EditFeedbackPage;
