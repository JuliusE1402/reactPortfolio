import React from "react";
import "./css/Footer.css";
import github from "../assets/github-mark.png";

const redirectToGithub = () => {
	window.open("https://github.com/JuliusE1402/", "_blank");
};

const Footer: React.FC = () => {
	return (
		<div className="FooterSection">
			<p>Copyright © 2023. All rights are reserved</p>
			<img src={github} alt="GitHub Icon" onClick={redirectToGithub} />
		</div>
	);
};

export default Footer;
