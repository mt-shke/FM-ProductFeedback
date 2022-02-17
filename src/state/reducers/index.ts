import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducer";

const reducers = combineReducers({ feedbacks: feedbackReducer });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
