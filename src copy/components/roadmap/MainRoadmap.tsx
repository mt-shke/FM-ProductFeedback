import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import useViewport from "../../hooks/useViewport";
import { IPageProps } from "../../interfaces";
import { StatusType } from "../../interfaces";
import FeedbackList from "../feedback/FeedbackList";
import AddFeedbackButton from "../UI/buttons/AddFeedbackButton";
import GoBackButton from "../UI/buttons/GoBackButton";
import Navbar from "./Navbar";
import RoadmapSortedFeedback from "./RoadmapSortedFeedback";

const MainRoadmap: React.FC<IPageProps> = ({ data }) => {
	const { feedbacks } = data;
	const user = useUser();
	const [selectedStatus, setSelectedStatus] = useState<StatusType>("Planned");
	const status = ["Suggestion", "Planned", "In-Progress", "Live"];

	const setSelected = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		const value = target.closest("li")?.children[0].textContent as StatusType;
		if ([...status].includes(value)) {
			setSelectedStatus(value);
		}
	};

	const list = data.feedbacks?.feedbacks?.filter((fb) => fb.status === selectedStatus);

	const viewport = useViewport();
	const isMobile = viewport === "mobile";

	if (isMobile) {
		return (
			<main className="ctn-feedback">
				<section className="h-20 flex justify-between items-center px-6 py-2 bg-s-grey text-s-white whitespace-nowrap">
					<div className="flex flex-col items-start gap-1">
						<GoBackButton white={true} />
						<h2 className="s-font">Roadmap</h2>
					</div>
					<AddFeedbackButton user={user} className="w-fit gridc px-4 py-2 bg-purple rounded-xl">
						+ Add Feedback
					</AddFeedbackButton>
				</section>
				<section>
					<Navbar
						selectedStatus={selectedStatus}
						feedbacks={feedbacks?.feedbacks}
						onSetSelected={setSelected}
					/>
					<hr className="opacity-20 border-t-[1px]" />
					<div className="flex flex-col gap-1 items-start px-6 pt-6">
						<h2>
							{selectedStatus}({list?.length})
						</h2>
						<p className="s-font">Features currently being developed</p>
					</div>
					{list && <FeedbackList list={list} setStatus={true} />}
				</section>
			</main>
		);
	}

	return (
		<main className="max-w-[1200px] mx-auto h-full w-full flex-c6 mt-12 lg:px-6 xl:gap-12">
			<section className="h-20 w-full flex justify-between items-center px-6 py-2 bg-s-grey text-s-white whitespace-nowrap rounded-lg">
				<div className="flex flex-col items-start gap-1">
					<GoBackButton white={true} />
					<h2 className="s-font">Roadmap</h2>
				</div>
				<AddFeedbackButton user={user} className="w-fit gridc px-4 py-2 bg-purple rounded-xl">
					+ Add Feedback
				</AddFeedbackButton>
			</section>
			<section>
				<Navbar
					selectedStatus={selectedStatus}
					feedbacks={feedbacks?.feedbacks}
					onSetSelected={setSelected}
				/>
				{feedbacks && <RoadmapSortedFeedback feedbacks={feedbacks?.feedbacks} />}
			</section>
		</main>
	);
};
export default MainRoadmap;
