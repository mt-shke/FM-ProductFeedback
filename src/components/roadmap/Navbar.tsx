import useViewport from "../../hooks/useViewport";
import { IFeedback, StatusType } from "../../interfaces";

interface INavbarProps {
	feedbacks: IFeedback[] | null | undefined;
	onSetSelected: (e: React.MouseEvent) => void;
	selectedStatus: StatusType;
}

const Navbar: React.FC<INavbarProps> = ({ feedbacks, onSetSelected, selectedStatus }) => {
	const status = ["Suggestion", "Planned", "In-Progress", "Live"];
	const statusNumbers = status.map((st) => feedbacks?.filter((fb) => fb.status === st).length);
	const setColor = (st: StatusType) =>
		st === "In-Progress" ? "border-b-purple" : st === "Planned" ? "border-b-orange" : "border-b-s-blue";

	const viewport = useViewport();
	const isMobile = viewport === "mobile";

	if (isMobile) {
		return (
			<nav>
				<ul className="grid grid-cols-3 items-center">
					{status.map(
						(st, index) =>
							index !== 0 && (
								<li
									key={index + status[index]}
									onClick={(e) => onSetSelected(e)}
									className={`${
										selectedStatus === st ? `border-b-4 ${setColor(st)} font-bold md:border-none` : ""
									} w-full h-14 grid items-center justify-center grid-flow-col cursor-pointer`}
								>
									<span>{st}</span>
									<span>({statusNumbers[index]})</span>
								</li>
							)
					)}
				</ul>
			</nav>
		);
	}

	// responsive status
	const isMobileStatus = (st: string) =>
		st === "In-Progress"
			? "Currently being developed"
			: st === "Planned"
			? "Ideas prioritized for research"
			: st === "Live"
			? "Released features"
			: "";

	return (
		<nav>
			<ul className="w-full grid grid-cols-3 items-center gap-6">
				{status.map(
					(st, index) =>
						index !== 0 && (
							<li
								key={index + status[index]}
								onClick={(e) => onSetSelected(e)}
								className={`font-bold md:border-none w-full h-14 flex flex-col gap-1 justify-start items-start cursor-pointer`}
							>
								<div>
									<span>{st}</span>
									<span>({statusNumbers[index]})</span>
								</div>
								<span className="font-normal">{isMobileStatus(st)}</span>
							</li>
						)
				)}
			</ul>
		</nav>
	);
};
export default Navbar;
