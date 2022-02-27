import { IComment } from "../../../interfaces";

interface IProfilCard {
	comment: IComment;
	className?: string;
}

const ProfilePicture: React.FC<IProfilCard> = ({ comment, className }) => {
	return (
		<span className={`${className} h-10 aspect-square rounded-full`}>
			<img className="rounded-full" src={comment.user.image} alt={comment.user.username} />
		</span>
	);
};
export default ProfilePicture;
