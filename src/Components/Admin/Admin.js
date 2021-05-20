import React, { useState, useEffect } from 'react';


const Admin = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        url: "",
        image: "",
        projectUrl: "",
        fullDescription: ""
    });

    const handleChange = (e) => {
        setFormData({
          ...formData, [e.target.id]: e.target.value
        })
      }


    const createProject = async (e) => {
        e.preventDefault();
        const body = { ...formData };

        try {
            const response = await fetch('https://sean-portfolio-backend.herokuapp.com/projects', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.log(error)
        } finally {
            await getProjects();
        };

        setFormData({
            title: "",
            description: "",
            url: "",
            image: "",
            projectUrl: "",
            fullDescription: ""
        })
    };


    const getProjects = async () => {
        try {
            const res = await fetch('https://sean-portfolio-backend.herokuapp.com/projects');
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div>
            <form onSubmit={createProject}>
            <label>Title: {" "}
                <input className="create" type="text" id="title" value={formData.title} onChange={handleChange}></input>{" "}<br />
                </label>
                <br />
                <label>Description: {" "}
                <input className="create" type="text" id="description" value={formData.description} onChange={handleChange}></input>{" "}<br />
                </label>
                <br />
                <label>App URL: {" "}
                <input className="create" type="text" id="url" value={formData.url} onChange={handleChange}></input>{" "}<br />
                </label>
                <br />
                <label>Image: {" "}
                <input className="create" type="text" id="image" value={formData.image} onChange={handleChange}></input>{" "}<br />
                </label>
                <br />
                <label>GitHub Link: {" "}
                <input className="create" type="text" id="projectUrl" value={formData.projectUrl} onChange={handleChange}></input>{" "}<br />
                </label>
                <br />
                <label>Detailed Description: {" "}
                <input className="create" type="text" id="fullDescription" value={formData.fullDescription} onChange={handleChange}></input>{" "}<br />
                </label>
                <br />
                <input className="submit" type="submit"></input>
            </form>
        </div>
    )
}

export default Admin
