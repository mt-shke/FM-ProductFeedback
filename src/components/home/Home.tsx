import useViewport from "../../hooks/useViewport";
import { IPageProps } from "../../interfaces";
import Header from "../layout/header/Header";
import Main from "./Main";

const Home: React.FC<IPageProps> = ({ data }) => {
	const viewport = useViewport();
	const isMobile = viewport === "mobile";
	return (
		<div className="w-full flex flex-col">
			{isMobile && <Header data={data} />}
			<Main data={data} />
		</div>
	);
};
export default Home;
