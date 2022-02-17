import AddFeedbackButton from "../UI/buttons/AddFeedbackButton";

const NoFeedBack: React.FC<{}> = () => {
	return (
		<section className="flex flex-col justify-center items-center p-6 bg-gray">
			<article className="flex flex-col gap-6 justify-center items-center text-center px-6 py-16 bg-white rounded-lg">
				<div>
					<img src="/assets/suggestions/illustration-empty.svg" alt="illustration" />
				</div>
				<h2 className="mt-8">There is no feedback yet.</h2>
				<p className="s-font">
					Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve
					our app.
				</p>
				<AddFeedbackButton className="h-full w-fit gridc px-4 py-2 bg-purple text-s-white rounded-xl">
					+ Add Feedback
				</AddFeedbackButton>
			</article>
		</section>
	);
};
export default NoFeedBack;
