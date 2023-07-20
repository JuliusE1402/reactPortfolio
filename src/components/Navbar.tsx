import React from "react";
import "./css/Navbar.css";

const Navbar: React.FC = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	const handleTitleOnClick = () => {
		scrollToSection("home");
	};

	const handleNavLinkOnClick = (sectionId: string) => () => {
		scrollToSection(sectionId);
	};

	return (
		<div className="Navbar">
			<h3 onClick={handleTitleOnClick}>Julius [blank]</h3>
			<ul>
				<li onClick={handleNavLinkOnClick("home")}>Home</li>
				<li onClick={handleNavLinkOnClick("about")}>About</li>
				<li onClick={handleNavLinkOnClick("projects")}>Projects</li>
				<li onClick={handleNavLinkOnClick("contact")}>Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
