import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImage"
							src={
								Users.filter((u) => u.id === post?.userId)[0]
									.profilePicture
							}
							alt="Perfil"
						/>
						<span className="postUsername">
							{
								Users.filter((u) => u.id === post?.userId)[0]
									.username
							}
						</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img
						src={post.photo}
						className="	postImg"
						alt="Imagen del post"
					/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="assets/like.png"
							alt="Like"
							onClick={likeHandler}
						/>
						<img
							className="likeIcon"
							onClick={likeHandler}
							src="assets/heart.png"
							alt="Love"
						/>
						<span className="postLikeCounter">
							A {like} personas le gusta esto
						</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">
							{post.comment} comentarios
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
