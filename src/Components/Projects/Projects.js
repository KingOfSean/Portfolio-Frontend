import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import UpdateModal from '../Admin/UpdateModal';

export default function Project({ setFooter, isLoggedIn }) {
    const [projectData, setProjectData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [update, setUpdate] = useState();


    const openModel = (e) => {
        setShowModal(true);
        setUpdate(e.target.value);
        setFooter(false);
      };


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
          console.log(data) 
        } catch (error) {
          console.error(error);
        } finally {
          await getProjects();
        }
    };

    
    const updateProject = async (data, id) => {
        try {
          const response = await fetch(`https://sean-portfolio-backend.herokuapp.com/projects/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
          console.log(response)
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
                            <>{showModal? null :
                            <Link to={`project/${project._id}`}>
                                <div className="project-container">
                                    <img src={project.image} alt={project._id} />
                                    <div className="description">
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </Link>}</>
                            <div>
                                <p>{project.title}</p>
                            </div>
                            <>{isLoggedIn?
                            <div>
                                <button value={project._id} onClick={openModel}>UPDATE</button>
                                <button onClick={(e) => {
                                    deleteProject(e, project._id);
                                }}>DELETE</button>
                                <UpdateModal data={project} showModal={showModal} setShowModal={setShowModal} update={update} setFooter={setFooter} updateProject={updateProject} />
                            </div>
                            : null}</>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}