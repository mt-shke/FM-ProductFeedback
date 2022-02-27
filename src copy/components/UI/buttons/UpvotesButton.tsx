import { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useUser } from "../../../hooks/useUser";
import ArrowButton from "./ArrowButton";
import Button from "./Button";

interface IUpvotesButtonProps {
	feedbackId: string;
	children: number;
	upvoters: string[];
	className?: string;
	statusMode?: boolean;
}

const UpvotesButton: React.FC<IUpvotesButtonProps> = ({
	feedbackId,
	children,
	upvoters,
	className,
	statusMode,
}) => {
	const user = useUser();
	const userId = user && user._id ? user._id : user && user.userId ? user.userId : null;

	const [isUpvoter, setIsUpvoter] = useState<boolean>(
		userId && upvoters?.find((upvoter) => upvoter === userId) ? true : false
	);
	const [total, setTotal] = useState(children + upvoters.length);

	const { setUpvote } = useActions();
	const { loading } = useTypedSelector((state) => state.feedbacks);

	const upvoteButtonHandler = async () => {
		if (!user) return;
		if (loading) return;
		const response = await setUpvote(feedbackId);
		const totalSum = isUpvoter ? -1 : 1;
		setIsUpvoter((p) => !p);
		setTotal((p) => p + totalSum);
	};

	if (statusMode)
		return (
			<Button
				onClick={upvoteButtonHandler}
				className={`${className} flex items-center gap-2 px-4 py-[5px] ${
					isUpvoter ? "text-s-gray bg-s-blue animate-fade" : "text-s-grey bg-gray animate-fadeOut1"
				} font-semibold w-fit rounded-lg text-sm hover:bg-s-blue`}
			>
				<ArrowButton white={isUpvoter ? true : false} up={true} />
				<span>{total}</span>
			</Button>
		);

	return (
		<Button
			onClick={upvoteButtonHandler}
			className={`${className} flex items-center gap-2 px-4 py-[5px] ${
				isUpvoter ? "text-s-gray bg-s-blue animate-fade" : "text-s-grey bg-gray animate-fadeOut1"
			} font-semibold w-fit rounded-lg text-sm hover:bg-s-blue md:flex-col md:py-3 md:w-12`}
		>
			<ArrowButton white={isUpvoter ? true : false} up={true} />
			<span>{total}</span>
		</Button>
	);
};

export default UpvotesButton;
