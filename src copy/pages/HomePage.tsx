import { IPageProps } from "../interfaces";
import Home from "../components/home/Home";

const HomePage: React.FC<IPageProps> = ({ data }) => {
	return <Home data={data} />;
};
export default HomePage;
