import React from "react";
import "./css/About.css";
import picture from "../assets/AboutSectionPicture.png";

const About: React.FC = () => {
	return (
		<div id="about" className="AboutSection">
			<img src={picture} alt="picture" />
			<div>
				<h2>About Me</h2>
				<h1>
					Passionate Developer | Transforming Ideas into Reality | [blank],
					Germany
				</h1>
				<p>
					I have always been captivated by IT, from coding algorithms in Java to
					creating innovative projects. Crafting dynamic software with optimized
					code is my pride. I continuously explore cutting-edge tools to stay
					ahead. Collaboration is my strength; I excel in cross-functional
					teamwork, creating exceptional applications. My ambition is to make a
					lasting impact, contributing to groundbreaking projects that elevate
					user experiences. Embracing challenges, I look forward to an exciting
					journey in the ever-evolving world of IT, where innovation and
					collaboration can shape a better future.
				</p>
			</div>
		</div>
	);
};

export default About;
