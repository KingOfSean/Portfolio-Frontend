import "./Contacts.css";
import SeanKingResume from "./Sean-King-Resume.pdf";

export default function Contact() {
	return (
		<div className="contact">
			<h1>Contacts</h1>
			<p>Contact me by Email or on my Linkedin!</p>
			<div className="contact-body">
				<ul>
					<li>
						<a className="contact-me" href="mailto:seanking2380@gmail.com">
							Email: seanking2380@gmail.com
						</a>
					</li>
					<li>
						<a
							className="contact-me"
							href="https://www.linkedin.com/in/sean-michael-king/"
							target="_target"
						>
							Linkedin
						</a>
					</li>
					<li>
						<a
							className="contact-me"
							href="https://github.com/KingOfSean"
							target="_target"
						>
							My GitHub
						</a>
					</li>
					<li>
						<a
							className="contact-me"
							href={SeanKingResume}
							download
							target="_blank"
						>
							My Resume
						</a>
					</li>
				</ul>
				<img
					className="contact-img"
					src="https://i.imgur.com/pAzk4jL.png"
					alt=""
				/>
			</div>
		</div>
	);
}
