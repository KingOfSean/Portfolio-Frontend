import React from "react";
import {Link} from "react-router-dom";
import "./Details.css";

const Details = ({thisProject, getInspiration}) => {
	return (
		<div className="details">
			<h1>{thisProject.title}</h1>
			<div className="details-content">
				<div className="details-description">
					<p>{thisProject.fullDescription}</p>
					<ul>
						<li>
							<a href={thisProject.url} target="_target">
								Actual App
							</a>
						</li>
						<li>
							<a href={thisProject.projectUrl} target="_target">
								GitHub/ My Code
							</a>
						</li>
					</ul>
				</div>
				<div className="details-img">
					<img src={thisProject.image} className="details-pic" alt="" />
				</div>
			</div>
			<div>
				<Link className="back" onClick={getInspiration} to="/projects">
					Back
				</Link>
			</div>
		</div>
	);
};

export default Details;
