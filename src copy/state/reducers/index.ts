import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducer";
import userReducer from "./userReducer";
import viewportReducer from "./viewportReducer";

const reducers = combineReducers({
	feedbacks: feedbackReducer,
	user: userReducer,
	viewport: viewportReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
