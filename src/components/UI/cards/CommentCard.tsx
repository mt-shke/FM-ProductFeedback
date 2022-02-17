import Button from "../buttons/Button";

const CommentCard: React.FC<{}> = () => {
	return (
		<article className="flex-c6">
			<div className="flex justify-start items-center">
				<span className="h-12 aspect-square rounded-full">
					<img className="rounded-full" src="/assets/user-images/image-elijah.jpg" alt="elijah" />
				</span>
				<span className="flex flex-col s-font mx-4">
					<span className="b-font">Elijah Moss</span>
					<span>@hexagon.bestagon</span>
				</span>
				<Button className="ml-auto mr-0 font-semibold text-blue">Reply</Button>
			</div>
			<p>
				Also, please allow styles to be applied based on system preferences. I would love to be able to browse
				Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it
				currently has.
			</p>
		</article>
	);
};
export default CommentCard;
