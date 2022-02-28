import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { IFeedback, IFeedbackState } from "../../../../interfaces";

const RoadmapNav: React.FC = () => {
	const { data } = useTypedSelector((state) => state.feedbacks) as IFeedbackState;
	const planned = data ? data.filter((fb) => fb.status === "Planned").length : "";
	const inProgress = data ? data.filter((fb) => fb.status === "In-Progress").length : "";
	const live = data ? data.filter((fb) => fb.status === "Live").length : "";

	return (
		<div className=" flex-c6 flex-wrap p-6 rounded-lg bg-white">
			<div className="w-full flex justify-between items-center">
				<h2>Roadmap</h2>
				<Link to="/roadmap">
					<span className="underline text-dark b-font">View</span>
				</Link>
			</div>

			<ul className="w-full flex flex-col gap-2 justify-around items-start">
				<li className="w-full flex justify-start items-center gap-4">
					<span className="w-2 aspect-square rounded-full bg-orange"></span>
					<span>Planned</span>
					<span className="ml-auto mr-0">{planned}</span>
				</li>
				<li className="w-full flex justify-start items-center gap-4">
					<span className="w-2 aspect-square rounded-full bg-purple"></span>
					<span>In-Progress</span>
					<span className="ml-auto mr-0">{inProgress}</span>
				</li>
				<li className="w-full flex justify-start items-center gap-4">
					<span className="w-2 aspect-square rounded-full bg-s-blue"></span>
					<span>Live</span>
					<span className="ml-auto mr-0">{live}</span>
				</li>
			</ul>
		</div>
	);
};
export default RoadmapNav;
