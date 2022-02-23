import { useState } from "react";
import { Link } from "react-router-dom";
import { IPageProps } from "../../../interfaces";
import Button from "../../UI/buttons/Button";
import CategoriesFilter from "../../UI/CategoriesFilter";
import RoadmapNav from "./nav/Roadmap";

const Header: React.FC<IPageProps> = ({ data }) => {
	const [modal, setModal] = useState(false);

	return (
		<>
			<header className="relative z-20 h-[80px] flex justify-between items-center px-6">
				<div className="absolute -z-10 inset-0">
					<img
						className="w-full h-full"
						src="/assets/suggestions/mobile/background-header.png"
						alt="background"
					/>
				</div>
				<div>
					<h3 className="text-s-white">Frontend Mentor</h3>
					<span className="text-gray">Feedback Board</span>
				</div>
				{!modal && (
					<img
						className="animate-fade"
						onClick={() => setModal(true)}
						src="/assets/shared/mobile/icon-hamburger.svg"
						alt="icon"
					/>
				)}
				{modal && (
					<img
						className="animate-fade"
						onClick={() => setModal(false)}
						src="/assets/shared/mobile/icon-close.svg"
						alt="icon"
					/>
				)}
			</header>
			{modal && (
				<>
					<div className="fixed z-10 flex-c6 px-6 pt-[100px] mx-auto w-3/4 top-0 bottom-0 right-0 bg-gray animate-move">
						<CategoriesFilter />
						<RoadmapNav />
						<Button>Login todo</Button>
					</div>
					<div
						onClick={() => setModal(false)}
						className="fixed z-[9] inset-0 bg-transparent-g animate-fade5"
					></div>
				</>
			)}
		</>
	);
};
export default Header;
