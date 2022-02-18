import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateFeedbackPage from "./pages/CreateFeedbackPage";
import DetailedFeedbackPage from "./pages/DetailedFeedbackPage";
import EditFeedbackPage from "./pages/EditFeedbackPage";
import HomePage from "./pages/HomePage";

const App: React.FC<{}> = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/feedback/:id" element={<DetailedFeedbackPage />} />
				<Route path="/edit-feedback/:id" element={<EditFeedbackPage />} />
				<Route path="/create-feedback" element={<CreateFeedbackPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
