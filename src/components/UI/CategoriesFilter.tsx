import CategoriesButton from "./buttons/CategoriesButton";

const CategoriesFilter: React.FC = () => {
	return (
		<div className="bg-white flex flex-wrap gap-2 p-6 rounded-lg">
			<CategoriesButton>All</CategoriesButton>
			<CategoriesButton>UI</CategoriesButton>
			<CategoriesButton>UX</CategoriesButton>
			<CategoriesButton>Enhancement</CategoriesButton>
			<CategoriesButton>Bug</CategoriesButton>
			<CategoriesButton>Feature</CategoriesButton>
		</div>
	);
};
export default CategoriesFilter;
