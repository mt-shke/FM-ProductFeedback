interface IArrowButton {
	white?: boolean;
	up?: boolean;
}

const ArrowButton: React.FC<IArrowButton> = ({ white, up }) => {
	return (
		<img
			className={white ? "brightness-200 contrast-200" : ""}
			src={`/assets/shared/icon-arrow-${up ? "up" : "left"}.svg`}
			alt="icon"
		/>
	);
};
export default ArrowButton;
