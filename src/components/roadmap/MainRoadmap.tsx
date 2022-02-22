import { IPageProps } from "../../interfaces";
import AddFeedbackButton from "../UI/buttons/AddFeedbackButton";
import GoBackButton from "../UI/buttons/GoBackButton";

const MainRoadmap: React.FC<IPageProps> = ({ data }) => {
	return (
		<main>
			<header>
				<div className="flex flex-col">
					<GoBackButton />
					<h2>Roadmap</h2>
				</div>
				<AddFeedbackButton />
			</header>
			<section>
				<ul>
					<li>Planned</li>
					<li>In-Progress</li>
					<li>Live</li>
				</ul>
				<section>
					<h2>Planned</h2>
					<span>Ideas prioritized for research</span>

					<h2>In-Progress</h2>
					<span>Currently being developed</span>

					<h2>Live</h2>
					<span>Released features</span>
				</section>
			</section>
		</main>
	);
};
export default MainRoadmap;
