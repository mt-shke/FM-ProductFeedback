import Main from "../components/home/Main";
import Header from "../components/layout/header/Header";
import { IPage } from "../interfaces";

const HomePage: React.FC<IPage> = (props) => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<Main />
		</div>
	);
};
export default HomePage;
