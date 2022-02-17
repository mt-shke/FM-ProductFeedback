import { IComponent } from "../../interfaces";

const BackgroundLogo: React.FC<IComponent> = ({ className, children }) => {
	return (
		<div className={`${className} bg-gradient-to-tr from-s-blue via-purple to-orange text-s-white`}>
			{children}
		</div>
	);
};
export default BackgroundLogo;
