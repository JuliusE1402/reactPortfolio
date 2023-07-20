import React from "react";
import "./css/Home.css";
import Julius from "../assets/Julius.jpg";
import GitHubLogo from "../assets/github-mark.png";
import nodeJS from "../assets/nodejs.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import mysql from "../assets/mysql.png";
import css from "../assets/css.png";

const Header: React.FC = () => {
	const handleGitHubIconClick = () => {
		window.open("https://github.com/JuliusE1402", "_blank");
	};

	return (
		<div id="home" className="centered-container">
			<div className="Header">
				<h1>Aspiring Programmer 🕊</h1>
				<p>
					Hi, I am Julius [blank]. An ambitious Developer based in [blank],
					Germany. 📍
				</p>
				<img
					className="GitHub"
					src={GitHubLogo}
					alt="GitHub"
					onClick={handleGitHubIconClick} // Attach the onClick event here
				/>
				<div className="TechStack">
					<h4>Tech Stack |</h4>
					<img src={react} alt="HTML Logo" />
					<img src={nodeJS} alt="HTML Logo" />
					<img src={typescript} alt="HTML Logo" />
					<img src={mysql} alt="HTML Logo" />
					<img src={css} alt="HTML Logo" />
				</div>
			</div>
			<img
				className="Julius"
				src={Julius}
				alt="Picture of Julius [blank] 3543x3427"
			/>
		</div>
	);
};

export default Header;
