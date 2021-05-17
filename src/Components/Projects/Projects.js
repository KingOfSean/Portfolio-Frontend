import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./Projects.css"

export default function Project(){
    const [projectData, setProjectData] = useState([]);


    const getProjects = async () => {
        try {
            const res = await fetch('https://sean-portfolio-backend.herokuapp.com/projects');
            const data = await res.json();
            setProjectData(data.reverse());
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    console.log(projectData)
    return (
        <div className="all-projects">
            <h1>My Projects</h1>
            <div className="gallery">
                {projectData.map((project, i) => {
                    return (
                        <div>
                            <Link to={`project/${project._id}`}>
                                <div className="project-container">
                                    <img src={project.image} alt={project._id} />
                                    <div className="description">
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <p>{project.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}