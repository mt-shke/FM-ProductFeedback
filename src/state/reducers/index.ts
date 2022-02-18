import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import feedbackReducer from "./feedbackReducer";

const reducers = combineReducers({
	feedbacks: feedbackReducer,
	comments: commentReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
