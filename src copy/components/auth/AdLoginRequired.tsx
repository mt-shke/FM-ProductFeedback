interface IProps {
	setModal: () => void;
}

const AdLoginRequired: React.FC<IProps> = ({ setModal }) => {
	return (
		<div
			onClick={setModal}
			className="fixed z-50 inset-0 px-6 gridc text-s-white bg-transparent-g animate-fade  md:max-w-[600px]"
		>
			<p className="w-full flex-c6 items-center py-4 px-6 bg-white text-s-grey opacity-100 rounded-lg authForm">
				Please you must login before posting
			</p>
		</div>
	);
};
export default AdLoginRequired;
