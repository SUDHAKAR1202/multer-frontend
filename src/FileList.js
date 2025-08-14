import React, { useState, useEffect } from "react";
import axios from "axios";

function FileList() {
    const [files, setFiles]= useState([]);

    useEffect(()=> {
        axios.get("https://multer-backend-deploy.onrender.com/files")
           .then(res => setFiles(res.data))
           .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <h2>Uploaded Files</h2>
            <ul>
                {files.map(file => (
                    <li key={file._id}>
                        <a href={`https://multer-backend-deploy.onrender.com/${file.path}`} target="_blank" rel="noreferrer">
                       {file.filename}
                       </a> ({(file.size / 1024).toFixed(2)} KB)
                    </li>
))}
            </ul>

        </div>
    )
}

export default FileList;