import React, { useState} from "react";
import axios from "axios";

function FileUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = async () => {
        if (!file) return alert("Please select a file");
        const formData = new FormData();
        formData.append("file", file);
        try {
            await axios.post("http://localhost:5000/upload", formData);
            alert("File uploaded successfully");
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert("Upload failed");
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}
export default FileUpload;