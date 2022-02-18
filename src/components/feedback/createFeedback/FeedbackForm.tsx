import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IFeedback } from "../../../interfaces";
import Button from "../../UI/buttons/Button";

interface IFeedbackForm {
	feedback?: IFeedback;
}

const FeedbackForm: React.FC<IFeedbackForm> = ({ feedback }) => {
	const titleRef = useRef<HTMLInputElement>(null);
	const categoryRef = useRef<HTMLSelectElement>(null);
	const contentRef = useRef<HTMLTextAreaElement>(null);

	const submitHandler = (e: React.MouseEvent | React.FormEvent) => {
		e.preventDefault();
		const title = titleRef.current?.value;
		const category = categoryRef.current?.value;
		const description = contentRef.current?.value;

		// function submit to DB new productRequest
	};

	return (
		<form
			onSubmit={(e) => submitHandler(e)}
			className="relative w-full flex flex-col gap-6 p-6 pt-16 bg-white rounded-lg"
		>
			<span className="absolute -top-6 h-12 aspect-square">
				<img src={`/assets/shared/icon-${feedback ? "edit" : "new"}-feedback.svg`} alt="icon" />
			</span>
			<h2 className="mb-6">{feedback ? `Editing` : "Create New Feedback"}</h2>

			<label className="flex flex-col gap-1" htmlFor="title">
				<h3 className="b-font">Feedback Title</h3>
				<span className="s-font">Add a short, descriptive headline</span>
				<input
					className="h-10 bg-gray rounded-lg"
					type="text"
					ref={titleRef}
					defaultValue={feedback ? feedback.title : ""}
				/>
			</label>

			<label className="flex flex-col gap-1" htmlFor="category">
				<h3 className="b-font">Category</h3>
				<span className="s-font">Choose a category for your feedback</span>
				<select
					className="h-10 bg-gray rounded-lg"
					defaultValue={feedback ? feedback.category : "Feature"}
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
					defaultValue={feedback ? feedback.description : ""}
				/>
			</label>
			<div>
				{feedback ? (
					<>
						<Button className="h-full w-full gridc p-2 my-4 bg-purple text-white rounded-lg">
							Save Changes
						</Button>
						<Link to="/" className="gridc p-2 rounded-lg bg-s-grey text-white">
							Cancel
						</Link>
						<Button className="h-full w-full gridc p-2 my-4 bg-red text-white rounded-lg">Delete</Button>
					</>
				) : (
					<>
						<button
							onClick={(e) => submitHandler(e)}
							className="h-full w-full gridc p-2 my-4 bg-purple text-white rounded-lg"
						>
							Add Feedback
						</button>
						<Link to="/" className="gridc p-2 rounded-lg bg-s-grey text-white">
							Cancel
						</Link>
					</>
				)}
			</div>
		</form>
	);
};
export default FeedbackForm;
