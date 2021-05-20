import "./About.css";

export default function About(){
    return(
        <div className="about-content">
            <h1>About Me</h1>
            <div className="about-body">
                <div className="about-me">
                    <p>
                    Hi! I'm Sean King. I am a software engineer graduate from Downers Grove IL, (Chicagoland area) who is adaptable, hardworking, and a team player. My hobbies are watching TV shows/ movies/ anime,
    Writing code and gaining knowledge, playing video games, and building computers. I value  my family and friends, my work, positivity, and fairness/ equality. 
                    </p>
                </div>
                <img className="my-pic" src="https://i.imgur.com/4jPhPSV.jpg" alt="" />
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ul>
                    <li>HTML/CSS/JS</li>
                    <li>React</li>
                    <li>Postgres/ SQL</li>
                    <li>MERN Stack</li>
                    <li>Django/ Python</li>
                </ul>
            </div>
        </div>
    );
};