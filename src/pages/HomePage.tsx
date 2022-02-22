import Main from "../components/home/Main";
import Header from "../components/layout/header/Header";
import { IPageProps } from "../interfaces";

const HomePage: React.FC<IPageProps> = ({ data }) => {
	return (
		<div className="w-full flex flex-col">
			<Header data={data} />
			<Main data={data} />
		</div>
	);
};
export default HomePage;
