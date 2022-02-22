import DetailedFeedback from "../components/feedback/detailedFeedback/DetailedFeedback";
import { IPageProps } from "../interfaces";

const DetailedFeedbackPage: React.FC<IPageProps> = ({ data }) => {
	return <DetailedFeedback data={data} />;
};
export default DetailedFeedbackPage;
