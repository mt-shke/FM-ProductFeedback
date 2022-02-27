import { Link } from "react-router-dom";

const Logo: React.FC = () => {
	return (
		<Link to="/">
			<div className="relative grid aspect-[5/3] w-full">
				<div className="absolute z-0 w-full h-full">
					<img
						className="rounded-lg w-full h-full"
						src="/assets/suggestions/desktop/background-header.png"
						alt="background-image"
					/>
				</div>
				<div className="z-10 flex flex-col justify-end items-start p-4 text-white md:text-sm lg:text-base lg:p-6">
					<h2 className="md:text-base lg:text-xl">Frontend Mentor</h2>
					<span>Feedback Board</span>
				</div>
			</div>
		</Link>
	);
};
export default Logo;
