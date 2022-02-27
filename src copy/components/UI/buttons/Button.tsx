import { IComponent } from "../../../interfaces";

const Button: React.FC<IComponent> = ({ className, children, onClick }) => {
	return (
		<div onClick={onClick} className={`${className} hover:cursor-pointer`}>
			{children}
		</div>
	);
};
export default Button;
