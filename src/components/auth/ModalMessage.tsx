interface IModalMessageProps {
	message: string;
}

const ModalMessage: React.FC<IModalMessageProps> = ({ message }) => {
	return (
		<div className="fixed z-50 inset-0 px-6 gridc text-s-white bg-transparent-g animate-fade">
			<p className="w-full flex-c6 items-center py-4 px-6 bg-white text-s-grey opacity-100 rounded-lg authForm">
				{message}
			</p>
		</div>
	);
};
export default ModalMessage;
