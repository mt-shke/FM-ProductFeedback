const LoadingSpinner: React.FC = () => {
	return (
		<div className="w-screen h-screen gridc">
			<div className="h-20 aspect-square rounded-full border-t-4 border-blue animate-spinning"></div>;
		</div>
	);
};
export default LoadingSpinner;
