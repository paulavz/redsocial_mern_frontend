import "./sidebar.css";
import {
	RssFeed,
	Chat,
	PlayCircleFilled,
	Group,
	Bookmark,
	HelpOutline,
	Work,
	Event,
	School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
	const listItems = [
		{
			name: "Siguiendo",
			icon: RssFeed,
		},
		{
			name: "Chat",
			icon: Chat,
		},
		{
			name: "Videos",
			icon: PlayCircleFilled,
		},
		{
			name: "Grupos",
			icon: Group,
		},
		{
			name: "Marcadores",
			icon: Bookmark,
		},
		{
			name: "Preguntas",
			icon: HelpOutline,
		},
		{
			name: "Trabajos",
			icon: Work,
		},
		{
			name: "Eventos",
			icon: Event,
		},
		{
			name: "Cursos",
			icon: School,
		},
	];

	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					{listItems.map((val) => (
						<li className="sidebarListItem">
							<val.icon className="sidebarIcon" />
							<span className="sidebarListItemText">
								{val.name}
							</span>
						</li>
					))}
				</ul>
				<button className="sidebarButton">Mostrar más</button>
				<hr className="sidebarHr" />
				<ul className="sidebarFriendList">
					{Users.map((u) => (
						<CloseFriend key={u.id} user={u} />
					))}
				</ul>
			</div>
		</div>
	);
}
