import { useEffect, useState } from "react";
import { setViewportState } from "../state/action-creators";

const useViewport = () => {
	const [viewport, setViewport] = useState(window.innerWidth);
	const actualViewport = window.innerWidth <= 768 ? "mobile" : "desktop";
	const handleResize = () => {
		setViewport(window.innerWidth);
		setViewportState(actualViewport);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return viewport < 768 ? "mobile" : actualViewport;
};

export default useViewport;
