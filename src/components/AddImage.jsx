import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import CssBaseline from "@mui/material/CssBaseline";
import "../index.css";

const AddImage = () => {
  const [givenImage, setImage] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, { preview: URL.createObjectURL(upFile) })
        )
      );
    },
  });

  return (
    <div className="Drag">
      <header className="App_Header">
        <div className="Drag_Area" {...getRootProps()}>
          <CssBaseline />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the Image here..</p>
          ) : (
            <p>
              Drag and Drop Report Here <br />
              <br />
              <span className="Select_Report">Select the Report</span>{" "}
            </p>
          )}
        </div>
        <div>
          {givenImage.map((upFile) => {
            return (
              <div style={{ margin: "auto" }}>
                <img
                  src={upFile.preview}
                  style={{
                    width: "600px",
                    height: "400px",
                    border: "3px solid #CCC",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                  }}
                  alt="preview"
                />
                <div style={{textAlign:'center'}}>
                <button style={{padding:'2rem', alignText:'center'}}>Submit</button>
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
};
export default AddImage;
