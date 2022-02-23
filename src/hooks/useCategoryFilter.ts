import { useEffect, useState } from "react";
import { CategoriesType } from "../interfaces";
import { useTypedSelector } from "./useTypedSelector";

const useCategoryFilter = () => {
	const [isUpdated, setIsUpdated] = useState(false);
	const { categoryFilter } = useTypedSelector((state) => state.feedbacks);

	useEffect(() => {
		if (!isUpdated) {
			setIsUpdated(true);
			return;
		}
	}, [categoryFilter]);

	return categoryFilter as CategoriesType;
};

export default useCategoryFilter;
