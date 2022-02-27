import CategoriesFilter from "../../../UI/CategoriesFilter";
import RoadmapNav from "./Roadmap";

const Menu: React.FC = () => {
	return (
		<div className="fixed z-10 flex-c6 px-6 pt-[100px] mx-auto w-3/4 top-0 bottom-0 right-0 bg-gray animate-move md:static md:pt-0 md:animate-fade md:w-auto md:px-0">
			<CategoriesFilter />
			<RoadmapNav />
		</div>
	);
};
export default Menu;
