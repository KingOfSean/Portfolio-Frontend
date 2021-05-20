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
    };

    const deleteProject = async (e, id) => {
        try {
          const response = await fetch(`https://sean-portfolio-backend.herokuapp.com/projects/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          });
          const data = await response.json(); 
        } catch (error) {
          console.error(error);
        } finally {
          await getProjects();
        }
      };

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
                                <button onClick={(e) => {
                                    deleteProject(e, project._id);
                                }}>DELETE</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}