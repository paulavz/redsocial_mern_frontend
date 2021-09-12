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
	const listFriend = [
		{
			name: "Jane Doe",
			src: "/assets/person/2.jpeg",
		},
		{
			name: "Victoria Yang",
			src: "/assets/person/3.jpeg",
		},
		{
			name: "Carlos Gonzales",
			src: "/assets/person/4.jpeg",
		},
		{
			name: "Luis Peña",
			src: "/assets/person/5.jpeg",
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
					{listFriend.map((val) => (
						<li className="sidebarFriend">
							<img
								className="sidebarFriendImg"
								src={val.src}
								alt="a friend"
							/>
							<span className="sidebarFriendName">
								{val.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
