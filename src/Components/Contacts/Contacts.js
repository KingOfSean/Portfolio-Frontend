import "./Contacts.css";

export default function Contact(){
   
    return (
        <div className="contact">
            <h1>Contacts</h1>
            <p>Contact me by Email or on my Linkedin!</p>
            <div className="contact-body">
                <ul>
                    <li>
                        <a className="contact-me" href="mailto:seanking2380@gmail.com">Email: seanking2380@gmail.com</a>
                    </li>
                    <li>
                        <a className="contact-me" href="https://www.linkedin.com/in/sean-michael-king/" target="_target">Linkedin</a>
                    </li>
                    <li>
                        <a className="contact-me" href="https://github.com/KingOfSean" target="_target">My GitHub</a>
                    </li>
                    <li>
                        <a className="contact-me" href="https://docs.google.com/document/d/1Hn4tImuvlmjrzgAHgG-rAPP9_bXwkUcOJpcYbPVd_ZU/edit?usp=sharing" target="_target">My Resume</a>
                    </li>
                </ul>
                <img className="contact-img" src="https://i.imgur.com/pAzk4jL.png" alt="" />
            </div>
        </div>
    );
};