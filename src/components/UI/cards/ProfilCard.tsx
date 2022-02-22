import { IComment } from "../../../interfaces";

interface IProfilCard {
	comment: IComment;
}

const ProfilCard: React.FC<IProfilCard> = ({ comment }) => {
	return (
		<>
			<span className="h-10 aspect-square rounded-full">
				<img className="rounded-full" src={comment.user.image} alt={comment.user.username} />
			</span>
			<span className="flex flex-col mx-4 ">
				<span className="font-semibold ">{comment.user.fullname}</span>
				<span>@{comment.user.username}</span>
			</span>
		</>
	);
};
export default ProfilCard;
