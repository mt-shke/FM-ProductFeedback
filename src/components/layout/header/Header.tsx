import { useState } from "react";
import CategoriesFilter from "../../UI/CategoriesFilter";

const Header: React.FC = () => {
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
					<img onClick={() => setModal(true)} src="/assets/shared/mobile/icon-hamburger.svg" alt="icon" />
				)}
				{modal && (
					<img onClick={() => setModal(false)} src="/assets/shared/mobile/icon-close.svg" alt="icon" />
				)}
			</header>
			{modal && (
				<>
					<div className="fixed z-10 flex-c6 p-6 mx-auto w-3/4 top-[80px] bottom-0 right-0 bg-gray">
						<CategoriesFilter />
						<div className=" flex-c6 flex-wrap p-6 rounded-lg bg-white">
							<div className="w-full flex justify-between items-center">
								<h2>Roadmap</h2>
								<span className="underline text-dark b-font">View</span>
							</div>

							<ul className="w-full flex flex-col gap-2 justify-around items-start">
								<li className="w-full flex justify-start items-center gap-4">
									<span className="w-2 aspect-square rounded-full bg-orange"></span>
									<span>Planned</span>
									<span className="ml-auto mr-0">2</span>
								</li>
								<li className="w-full flex justify-start items-center gap-4">
									<span className="w-2 aspect-square rounded-full bg-purple"></span>
									<span>In-Progress</span>
									<span className="ml-auto mr-0">3</span>
								</li>
								<li className="w-full flex justify-start items-center gap-4">
									<span className="w-2 aspect-square rounded-full bg-s-blue"></span>
									<span>Live</span>
									<span className="ml-auto mr-0">1</span>
								</li>
							</ul>
						</div>
					</div>
					<div onClick={() => setModal(false)} className="fixed z-0 inset-0 bg-black opacity-50"></div>
				</>
			)}
		</>
	);
};
export default Header;
