import React from "react";
import FileUpload from "./FileUpload";
import FileList from "./FileList";

function App() {
  return (
    <div style={{ padding: "20px"}}>
      <h1>File Upload with Multer</h1>
      <FileUpload />
      <hr />
      <FileList />

    </div>
  )
}

export default App;