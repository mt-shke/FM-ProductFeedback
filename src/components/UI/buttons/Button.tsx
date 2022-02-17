import { IComponent } from "../../../interfaces";

const Button: React.FC<IComponent> = ({ className, children, onClick }) => {
	return (
		<div onClick={onClick} className={`${className}`}>
			{children}
		</div>
	);
};
export default Button;
