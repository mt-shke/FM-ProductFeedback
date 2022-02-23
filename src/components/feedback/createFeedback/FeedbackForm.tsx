import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { IPageProps } from "../../../interfaces";
import EditButtons from "../editFeedback/EditButtons";

interface IFeedbackFormProps extends IPageProps {
	edit?: boolean;
}

const FeedbackForm: React.FC<IFeedbackFormProps> = ({ data, edit }) => {
	const feedback = data.feedbacks?.targetFeedback ? data.feedbacks?.targetFeedback : null;
	const titleRef = useRef<HTMLInputElement>(null);
	const categoryRef = useRef<HTMLSelectElement>(null);
	const contentRef = useRef<HTMLTextAreaElement>(null);
	const navigate = useNavigate();
	const { createFeedback, deleteFeedback, updateFeedback } = useActions();

	const submitHandler = async (e: React.MouseEvent | React.FormEvent, eventType: string) => {
		e.preventDefault();
		// onSubmit  - Check if event is "delete" | "create" | "edit"
		if (eventType === "delete") {
			await deleteFeedback(feedback?._id as string);
			navigate("/");
			return;
		}
		const title = titleRef.current?.value.toString().trim() as string;
		const category = categoryRef.current?.value.toString().trim() as string;
		const description = contentRef.current?.value.toString().trim() as string;
		if (title === "" || category === "" || description === "") {
			return;
		}
		if (eventType === "create") {
			const response = await createFeedback({ title, category, description });
			navigate("/feedback/" + response);
			return;
		}

		if (eventType === "edit") {
			const response = await updateFeedback({ title, category, description, feedbackId: feedback?._id });
			navigate("/feedback/" + response);
			return;
		}
	};

	return (
		<form
			onSubmit={(e) => submitHandler(e, edit ? "edit" : "create")}
			className="relative w-full flex flex-col gap-6 p-6 pt-16 bg-white rounded-lg"
		>
			<span className="absolute -top-6 h-12 aspect-square">
				<img src={`/assets/shared/icon-${edit && feedback ? "edit" : "new"}-feedback.svg`} alt="icon" />
			</span>
			<h2 className="mb-6">{edit && feedback ? `Editing` : "Create New Feedback"}</h2>

			<label className="flex flex-col gap-1" htmlFor="title">
				<h3 className="b-font">Feedback Title</h3>
				<span className="s-font">Add a short, descriptive headline</span>
				<input
					className="h-10 bg-gray rounded-lg"
					type="text"
					ref={titleRef}
					defaultValue={edit && feedback ? feedback.title : ""}
				/>
			</label>

			<label className="flex flex-col gap-1" htmlFor="category">
				<h3 className="b-font">Category</h3>
				<span className="s-font">Choose a category for your feedback</span>
				<select
					className="h-10 bg-gray rounded-lg form"
					defaultValue={edit && feedback ? feedback.category : "Feature"}
					name="category"
					id="category"
					ref={categoryRef}
				>
					<option value="Feature">Feature</option>
					<option value="UI">UI</option>
					<option value="UX">UX</option>
					<option value="Enhancement">Enhancement</option>
					<option value="Bug">Bug</option>
				</select>
			</label>

			<label className="flex flex-col gap-1" htmlFor="description">
				<h3 className="b-font">Feedback Detail</h3>
				<span className="s-font">Include any specific comments on what should be improved, added, etc.</span>
				<textarea
					className="bg-gray rounded-lg resize-none"
					maxLength={600}
					rows={4}
					ref={contentRef}
					defaultValue={edit && feedback ? feedback.description : ""}
				/>
			</label>

			<EditButtons
				edit={edit}
				feedback={feedback}
				onSubmitHandler={(e, eventType) => submitHandler(e, eventType)}
			/>
		</form>
	);
};
export default FeedbackForm;
