import React, { useState } from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import './UpdateModal.css';

const CloseModelButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

const UpdateModal = ({ showModal, setShowModal, update, setFooter, updateProject, data }) => {
    const [theTitle, setTheTitle] = useState(data.title);
    const [theDescription, setTheDescription] = useState(data.description);
    const [theUrl, setTheUrl] = useState(data.url);
    const [theImage, setTheImage] = useState(data.image);
    const [theProjectUrl, setTheProjectUrl] = useState(data.projectUrl);
    const [theFullDescription, setTheFullDescription] = useState(data.fullDescription);

    const onTitleChange = (e) => setTheTitle(e.target.value);
    const onDescriptionChange = (e) => setTheDescription(e.target.value);
    const onUrlChange = (e) => setTheUrl(e.target.value);
    const onImageChange = (e) => setTheImage(e.target.value);
    const onProjectUrlChange = (e) => setTheProjectUrl(e.target.value);
    const onFullDescriptionChange = (e) => setTheFullDescription(e.target.value);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const theData = { title: theTitle, description: theDescription, url: theUrl, image: theImage, projectUrl: theProjectUrl, fullDescription: theFullDescription };
        updateProject(theData, data._id);
        setShowModal(false);
        setFooter(true);
    };
console.log(data._id)
    return (
        <>{showModal && data._id === update ?
            <div className="bg-modal">
                <div className="modal-container">
                    <form className="modal-form" onSubmit={onFormSubmit}>
                    <label>Title: {" "}
                        <input className="edit" type="text" id="title" value={theTitle} onChange={onTitleChange}></input>
                    </label>
                    <br />
                    <label>Description: {" "}
                        <input className="edit" type="text" id="description" value={theDescription} onChange={onDescriptionChange}></input>
                    </label>
                    <br />
                    <label>App URL: {" "}
                        <input className="edit" type="text" id="url" value={theUrl} onChange={onUrlChange}></input>
                    </label>
                    <br />
                    <label>Image: {" "}
                        <input className="edit" type="text" id="image" value={theImage} onChange={onImageChange}></input>
                    </label>
                    <br />
                    <label>GitHub Link: {" "}
                        <input className="edit" type="text" id="projectUrl" value={theProjectUrl} onChange={onProjectUrlChange}></input>
                    </label>
                    <br />
                    <label>Detailed Description: {" "}
                        <input className="edit" type="text" id="fullDescription" value={theFullDescription} onChange={onFullDescriptionChange}></input>
                    </label>
                    <br />
                    <div id="submit">
                        <input className="submit" type="submit"></input>
                    </div>
                        <CloseModelButton aria-label="Close modal" onClick={() => {
                        setShowModal(false)
                        setFooter(true)
                        }} />
                    </form>
                </div>
            </div>
        : null}</>
    )
}

export default UpdateModal
