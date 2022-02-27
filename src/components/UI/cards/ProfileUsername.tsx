import { IComment } from "../../../interfaces";

interface IProfilCard {
	comment: IComment;
	className?: string;
}

const ProfileUsername: React.FC<IProfilCard> = ({ comment, className }) => {
	return (
		<span className={`${className} flex flex-col mx-4`}>
			<span className="font-semibold ">{comment.user.fullname}</span>
			<span>@{comment.user.username}</span>
		</span>
	);
};
export default ProfileUsername;
