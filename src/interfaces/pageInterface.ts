import { IFeedback, IUser } from ".";

export interface IPageProps {
	data: {
		feedbacks: {
			feedbacks: IFeedback[] | null;
			targetFeedback: IFeedback | null;
		} | null;
		user: IUser | null;
	};
}
