import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Reload from "./components/home/Reload";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { useFeedback } from "./hooks/useFeedback";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useUser } from "./hooks/useUser";
import CreateFeedbackPage from "./pages/CreateFeedbackPage";
import DetailedFeedbackPage from "./pages/DetailedFeedbackPage";
import EditFeedbackPage from "./pages/EditFeedbackPage";
import HomePage from "./pages/HomePage";
import NewAccountPage from "./pages/NewAccountPage";
import RoadmapPage from "./pages/RoadmapPage";

const App: React.FC<{}> = () => {
	const { data: feedbacks, targetFeedback } = useFeedback();
	const user = useUser();
	const data = { feedbacks: { feedbacks, targetFeedback }, user };
	const { verified } = useTypedSelector((state) => state.user);

	useEffect(() => {}, [verified]);

	return (
		<div className="animate-fade overflow-hidden">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage data={data} />} />
					<Route path="/reload" element={<Reload />} />
					<Route path="/feedback/:id" element={<DetailedFeedbackPage data={data} />} />
					<Route path="/edit-feedback/:id" element={<EditFeedbackPage data={data} />} />
					<Route path="/create-feedback" element={<CreateFeedbackPage data={data} />} />
					<Route path="/roadmap" element={<RoadmapPage data={data} />} />
					<Route path="/new-account/:id" element={<NewAccountPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
