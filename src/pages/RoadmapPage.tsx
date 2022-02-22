import MainRoadmap from "../components/roadmap/MainRoadmap";
import { IPageProps } from "../interfaces";

const RoadmapPage: React.FC<IPageProps> = ({ data }) => {
	return <MainRoadmap data={data} />;
};
export default RoadmapPage;
