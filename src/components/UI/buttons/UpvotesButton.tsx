import { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useUser } from "../../../hooks/useUser";
import Button from "./Button";

interface IUpvotesButtonProps {
	feedbackId: string;
	children: number;
	upvoters: string[];
}

const UpvotesButton: React.FC<IUpvotesButtonProps> = ({ feedbackId, children, upvoters }) => {
	const total = children + upvoters.length;
	const user = useUser();
	const { setUpvote } = useActions();
	const { loading } = useTypedSelector((state) => state.feedbacks);
	const upvoteButtonHandler = async () => {
		if (!user) return;
		if (loading) return;
		const response = await setUpvote(feedbackId);
	};

	return (
		<Button
			onClick={upvoteButtonHandler}
			className="flex items-center gap-2 px-4 py-[5px] text-s-grey bg-gray font-semibold w-fit rounded-lg text-sm"
		>
			<span>
				<img src="/assets/shared/icon-arrow-up.svg" alt="icon up" />
			</span>
			<span>{total}</span>
		</Button>
	);
};

export default UpvotesButton;
