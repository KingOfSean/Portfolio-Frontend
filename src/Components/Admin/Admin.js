import React, {useState, useEffect} from "react";
import "./Admin.css";

const Admin = ({isLoggedIn, setLoggedIn}) => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		url: "",
		image: "",
		projectUrl: "",
		fullDescription: "",
	});

	const [loginForm, setLoginForm] = useState({
		username: "",
		password: "",
	});

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"https://portfolio-backend-l7rs.onrender.com/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({...loginForm}),
				},
			);
			const data = await response.json();
			if (data.token) {
				window.localStorage.setItem("token", data.token);
				window.localStorage.setItem("username", data.username);
				setLoggedIn(true);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleLogout = () => {
		window.localStorage.clear();
		setLoggedIn(false);
	};

	const handleLoginChange = (e) => {
		setLoginForm({...loginForm, [e.target.id]: e.target.value});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const createProject = async (e) => {
		e.preventDefault();
		const body = {...formData};

		try {
			const response = await fetch(
				"https://portfolio-backend-l7rs.onrender.com/projects",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(body),
				},
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		} finally {
			await getProjects();
		}

		setFormData({
			title: "",
			description: "",
			url: "",
			image: "",
			projectUrl: "",
			fullDescription: "",
		});
	};

	const getProjects = async () => {
		try {
			const res = await fetch(
				"https://portfolio-backend-l7rs.onrender.com/projects",
			);
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<div className="create-content">
			<>
				{isLoggedIn ? (
					<form className="create-form" onSubmit={createProject}>
						<label>
							Title:{" "}
							<input
								className="create"
								type="text"
								id="title"
								value={formData.title}
								onChange={handleChange}
							></input>{" "}
							<br />
						</label>
						<br />
						<label>
							Description:{" "}
							<input
								className="create"
								type="text"
								id="description"
								value={formData.description}
								onChange={handleChange}
							></input>{" "}
							<br />
						</label>
						<br />
						<label>
							App URL:{" "}
							<input
								className="create"
								type="text"
								id="url"
								value={formData.url}
								onChange={handleChange}
							></input>{" "}
							<br />
						</label>
						<br />
						<label>
							Image:{" "}
							<input
								className="create"
								type="text"
								id="image"
								value={formData.image}
								onChange={handleChange}
							></input>{" "}
							<br />
						</label>
						<br />
						<label>
							GitHub Link:{" "}
							<input
								className="create"
								type="text"
								id="projectUrl"
								value={formData.projectUrl}
								onChange={handleChange}
							></input>{" "}
							<br />
						</label>
						<br />
						<label>
							Detailed Description:{" "}
							<input
								className="create"
								type="text"
								id="fullDescription"
								value={formData.fullDescription}
								onChange={handleChange}
							></input>{" "}
							<br />
						</label>
						<br />
						<div id="submit">
							<input className="submit" type="submit" />
							<button id="logout" className="submit" onClick={handleLogout}>
								LogOut
							</button>
						</div>
					</form>
				) : (
					<form className="login" onSubmit={handleLogin}>
						<label>
							{" "}
							Username:{" "}
							<input
								className="create"
								type="text"
								id="username"
								value={loginForm.username}
								onChange={handleLoginChange}
							/>
						</label>
						<br />
						<label>
							{" "}
							Password:{" "}
							<input
								className="create"
								type="password"
								id="password"
								value={loginForm.password}
								onChange={handleLoginChange}
							/>
						</label>
						<br />
						<br />
						<div id="submit">
							<input className="submit" type="submit" />
						</div>
					</form>
				)}
			</>
		</div>
	);
};

export default Admin;
