import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						className="shareProfileImg"
						src="assets/person/1.jpeg"
						alt="avatar"
					/>
					<input
						placeholder="¿Qué estás programando?"
						className="shareInput"
					/>
				</div>
			</div>
			<hr className="shareHr" />
			<div className="shareBottom">
				<div className="shareOptions">
					<div className="shareOption">
						<PermMedia htmlColor="tomato" className="shareIcon" />
						<span className="shareOptionText">Multimedia</span>
					</div>
					<div className="shareOption">
						<Label htmlColor="blue" className="shareIcon" />
						<span className="shareOptionText">Etiqueta</span>
					</div>
					<div className="shareOption">
						<Room htmlColor="green" className="shareIcon" />
						<span className="shareOptionText">Ubicación</span>
					</div>
					<div className="shareOption">
						<EmojiEmotions
							htmlColor="goldenrod"
							className="shareIcon"
						/>
						<span className="shareOptionText">Emoción</span>
					</div>
				</div>
				<button className="shareButton">Compartir</button>
			</div>
		</div>
	);
}
