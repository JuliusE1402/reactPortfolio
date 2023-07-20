import React from "react";
import "./css/Projects.css";
import tracktopia from "../assets/tracktopia.png";
import githubIcon from "../assets/github-mark.png";

const redirectToTrackTopia = () => {
	window.open("https://www.youtube.com/watch?v=nyBvqxfpAWQ", "_blank");
};

const redirectToTrackTopiaCode = () => {
	window.open("https://github.com/JuliusE1402/Tracktopia", "_blank");
};

const Projects: React.FC = () => {
	return (
		<div id="projects" className="ProjectsSection">
			<div className="ProjectPretext">
				<h3>PROJECTS</h3>
				<h2>Each project represents a step forward in my journey!</h2>
			</div>
			<div className="ProjectBox">
				<img src={tracktopia} alt="TrackTopia" onClick={redirectToTrackTopia} />
				<div className="ProjectText">
					<h3>TrackTopia 🎵</h3>
					<p>
						TrackTopia is an interactive game that utilizes your Spotify data to
						ask you questions. As the sole creator of this project, I embarked
						on this endeavor fueled by my passion for music and my desire to
						delve into the lyrics of my favorite tracks.
					</p>
					<div className="Tech">
						<div id="Technologies">
							<p>NodeJS </p>
							<p> + </p>
							<p> Bootstrap 5</p>
						</div>
					</div>
					<button onClick={redirectToTrackTopiaCode}>
						Code
						<img id="github" src={githubIcon} alt="GitHub Icon" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
