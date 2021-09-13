import "./login.css";

export default function Login() {
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
						<input placeholder="Correo" className="logininput" />
						<input
							placeholder="Contraseña"
							className="logininput"
						/>
						<button className="loginButton">Iniciar Sesión</button>
						<span className="loginForgot">
							¿Contraseña Olvidada?
						</span>
						<button className="loginRegisterButton">
							Crear cuenta
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
