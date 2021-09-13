import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
	return (
		<>
			<Topbar />
			<div className="profile">
				<SideBar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								className="profileCoverImg"
								src="assets/post/3.jpeg"
								alt="Imagen de Perfil"
							/>
							<img
								className="profileUserImg"
								src="assets/person/7.jpeg"
								alt="Usuario"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Pamela Drené</h4>
							<span className="profileInfoDesc">
								Me encanta programar
							</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
}
