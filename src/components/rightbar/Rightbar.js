import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img
						className="birthdayImg"
						src="assets/gift.png"
						alt="cumpleaños"
					/>
					<span className="birthdayText">
						<b>Maria Duarte</b> y <b>otros tres amigos</b> cumplen
						años hoy
					</span>
				</div>
				<img
					className="rightbarAd"
					src="assets/ad.png"
					alt="Publicidad"
				/>
				<h4 className="rightbarTitle">Amigos en Linea</h4>
				<ul className="rightbarFriendList">
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</>
		);
	};
	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle">Información del usuario</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Ciudad:</span>
						<span className="rightbarInfoValue">New York</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Proveniente de:</span>
						<span className="rightbarInfoValue">Madrid</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">
							Estado Sentimental:
						</span>
						<span className="rightbarInfoValue">Soltera</span>
					</div>
				</div>
				<h4 className="rightbarTitle">Amigos del Usuario</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src="assets/person/1.jpeg"
							alt="Seguidores"
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/3.jpeg"
							alt="Seguidores"
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/6.jpeg"
							alt="Seguidores"
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Melisa James
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/3.jpeg"
							alt="Seguidores"
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Fabi Lopez
						</span>
					</div>
					<HomeRightbar />
				</div>
			</>
		);
	};
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{profile ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	);
}
