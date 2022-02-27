import { IComment } from "../../../interfaces";
import ProfileUsername from "./ProfileUsername";
import ProfilePicture from "./ProfilPicture";

interface IProfilCard {
	comment: IComment;
}

const ProfilCard: React.FC<IProfilCard> = ({ comment }) => {
	return (
		<>
			<ProfilePicture comment={comment} />
			<ProfileUsername comment={comment} />
		</>
	);
};
export default ProfilCard;
