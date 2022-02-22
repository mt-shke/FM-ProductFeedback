import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
	feedbacks: feedbackReducer,
	user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
