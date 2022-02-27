import Menu from "./Menu";

interface IMenuProps {
	onSetModal?: () => void;
}

const NavMenu: React.FC<IMenuProps> = ({ onSetModal }) => {
	return (
		<nav>
			<Menu />
			<div onClick={onSetModal} className="fixed z-[9] inset-0 bg-transparent-g animate-fade5"></div>
		</nav>
	);
};
export default NavMenu;
