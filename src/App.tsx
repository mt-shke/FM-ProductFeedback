import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFeedback } from "./hooks/useFeedback";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useUser } from "./hooks/useUser";
import CreateFeedbackPage from "./pages/CreateFeedbackPage";
import DetailedFeedbackPage from "./pages/DetailedFeedbackPage";
import EditFeedbackPage from "./pages/EditFeedbackPage";
import HomePage from "./pages/HomePage";
import RoadmapPage from "./pages/RoadmapPage";

const App: React.FC<{}> = () => {
	const { data: feedbacks, targetFeedback } = useFeedback();
	const user = useUser();
	const data = { feedbacks: { feedbacks, targetFeedback }, user };
	const { verified } = useTypedSelector((state) => state.user);

	if (verified)
		return (
			<div className="animate-fade overflow-hidden">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage data={data} />} />
						<Route path="/feedback/:id" element={<DetailedFeedbackPage data={data} />} />
						<Route path="/edit-feedback/:id" element={<EditFeedbackPage data={data} />} />
						<Route path="/create-feedback" element={<CreateFeedbackPage data={data} />} />
						<Route path="/roadmap" element={<RoadmapPage data={data} />} />
					</Routes>
				</BrowserRouter>
			</div>
		);

	return <div></div>;
};

export default App;
