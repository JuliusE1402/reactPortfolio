import React from "react";
import "./css/Contact.css";
import telephone from "../assets/telephone.png";
import mail from "../assets/mail.png";

const email = "Julius[blank]@icloud.com";
const number = "+49 1234 56789012";

const mailToOnClick = () => {
	window.open(email);
};

const copyNumberOnClick = () => {
	const tempTextarea = document.createElement("textarea");

	tempTextarea.value = number;

	document.body.appendChild(tempTextarea);

	tempTextarea.select();

	document.execCommand("copy");

	document.body.removeChild(tempTextarea);

	alert("Number has been copied!");
};

const Contact: React.FC = () => {
	return (
		<div id="contact" className="ContactSection">
			<div className="ContactText">
				<h3>CONTACT</h3>
				<h2>
					Get in touch with me anytime using the contact information below. I'm
					always just a message away and eager to connect! 👇🏾
				</h2>
			</div>
			<div className="ContactBoxes">
				<div className="meansOfContact" onClick={mailToOnClick}>
					<img src={mail} alt="" />
					<p>{email}</p>
				</div>
				<div className="meansOfContact" onClick={copyNumberOnClick}>
					<img src={telephone} alt="" />
					<p>{number}</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
