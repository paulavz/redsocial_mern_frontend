import "./register.css";

export default function Register() {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Social Program</h3>
					<span className="loginDesc">
						¡Conecta con otros programadores y comparte tus
						proyectos en Social Program!
					</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input placeholder="Username" className="logininput" />
						<input placeholder="Correo" className="logininput" />
						<input
							placeholder="Contraseña"
							className="logininput"
						/>
						<input
							placeholder="Confirma Contraseña"
							className="logininput"
						/>
						<button className="loginButton">Resgistrate</button>
						<button className="loginRegisterButton">
							Ya tengo cuenta
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
