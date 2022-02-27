import { useState } from "react";
import { IPageProps } from "../../../interfaces";
import NavMenu from "./nav/NavMenu";

const Header: React.FC<IPageProps> = ({ data }) => {
	const [modal, setModal] = useState(false);

	return (
		<>
			<header className="relative z-20 h-[80px] flex justify-between items-center px-6 md:hidden">
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
			{modal && <NavMenu onSetModal={() => setModal(false)} />}
		</>
	);
};
export default Header;
