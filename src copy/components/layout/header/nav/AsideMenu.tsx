import AuthButtons from "./aside/AuthButtons";
import Logo from "./Logo";
import Menu from "./Menu";

const AsideMenu: React.FC = () => {
	return (
		<aside className="hidden md:flex-c6 col-start-1 col-end-2">
			<Logo />
			<Menu />
			<AuthButtons />
		</aside>
	);
};
export default AsideMenu;
