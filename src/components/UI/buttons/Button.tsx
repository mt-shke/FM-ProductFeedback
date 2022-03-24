import { IComponent } from "../../../interfaces";

const Button: React.FC<IComponent> = ({ className, children, onClick }) => {
	return (
		<div onClick={onClick} className={`${className} hover:cursor-pointer transition-all duration-300`}>
			{children}
		</div>
	);
};
export default Button;
