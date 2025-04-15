import React, { useState } from "react";
import axios from "axios";

const Register1 = () => {
  //Image Upload
  const [file, setFile] = useState();
  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:8080//api/v1/auth/register", formData)
      .then((res) => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.file[0])} />
      <button type="button" onClick={upload}>
        Upload
      </button>
    </div>
  );
};

export default Register1;

/* 
const [ApplicationType, setApplicationType] = useState("New");

//Application Types
  const handleApplicationChange = (event) => {
    setApplicationType(event.target.value);
  };

  <div className="application-box">
              <h3>
                Application Type<span style={errorStyle}>*</span>
              </h3>
              <div className="application-option">
                <div className="application">
                  <input
                    type="radio"
                    id="check-new"
                    name="application"
                    value="New"
                    onChange={handleApplicationChange}
                    checked={ApplicationType === "New"}
                  />
                  <label htmlFor="check-new">New</label>
                </div>
                <div className="application">
                  <input
                    type="radio"
                    id="check-extend"
                    name="application"
                    value="Extend"
                    onChange={handleApplicationChange}
                    checked={ApplicationType === "Extend"}
                  />
                  <label htmlFor="check-extend">Extend</label>
                </div>
                <div className="application">
                  <input
                    type="radio"
                    id="check-renewal"
                    name="application"
                    value="Renewal"
                    onChange={handleApplicationChange}
                    checked={ApplicationType === "Renewal"}
                  />
                  <label htmlFor="check-renewal">Renewal</label>
                </div>
                <div className="application">
                  <input
                    type="radio"
                    id="check-duplicate"
                    name="application"
                    value="Duplicate"
                    onChange={handleApplicationChange}
                    checked={ApplicationType === "Duplicate"}
                  />
                  <label htmlFor="check-duplicate">Duplicate</label>
                </div>
                <div className="application">
                  <input
                    type="radio"
                    id="check-conversion"
                    name="application"
                    value="Conversion"
                    onChange={handleApplicationChange}
                    checked={ApplicationType === "Conversion"}
                  />
                  <label htmlFor="check-conversion">Conversion</label>
                </div>
              </div>
            </div>








            <div className="input-box">
                <label>
                  Birth Date<span style={errorStyle}>*</span>
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={handleDobChange}
                  placeholder="Enter Birth Date"
                  className="form-control"
                  id="exampleInputDob"
                  required
                />
                <p className="error-message" style={errorStyles}>
                  {errorDOB}
                </p>
              </div>







              <div className="gender-box">
              <h3>
                Gender<span style={errorStyle}>*</span>
              </h3>
              <div className="gender-option">
                <div className="gender">
                  <input
                    type="radio"
                    id="check-male"
                    name="gender"
                    value="Male"
                    onChange={handleGenderChange}
                    checked={Gender === "Male"}
                  />
                  <label htmlFor="check-male">Male</label>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    id="check-female"
                    name="gender"
                    value="Female"
                    onChange={handleGenderChange}
                    checked={Gender === "Female"}
                  />
                  <label htmlFor="check-female">Female</label>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    id="check-other"
                    name="gender"
                    value="Prefer not to say"
                    onChange={handleGenderChange}
                    checked={Gender === "Prefer not to say"}
                  />
                  <label htmlFor="check-other">Prefer not to say</label>
                </div>
              </div>
            </div>




            <div className="vehicle-box">
              <h3>
                Vehicle Category<span style={errorStyle}>*</span>
              </h3>
              <div className="vehicle-option">
                <div class="column">
                  <div class="select-box">
                    <select
                      value={Category}
                      onChange={handleCategoryChange}
                      required
                    >
                      <option hidden>Choose Vehicle Category</option>
                      <option>Light-Weight Vehicle</option>
                      <option>Heavy-Weight Vehicle</option>
                    </select>
                  </div>
                </div>
                <div className="practice-option">
                  <div className="practice">
                    <input
                      type="radio"
                      id="check-wpractice"
                      name="practice"
                      value="With Practice"
                      onChange={handlePracticeChange}
                      checked={Practice === "With Practice"}
                    />
                    <label htmlFor="check-wpractice">With Practice</label>
                  </div>
                  <div className="practice">
                    <input
                      type="radio"
                      id="check-wopractice"
                      name="practice"
                      value="Without Practice"
                      onChange={handlePracticeChange}
                      checked={Practice === "Without Practice"}
                    />
                    <label htmlFor="check-wopractice">Without Practice</label>
                  </div>
                </div>
              </div>
            </div>


            <div className="table">
              <table border={1}>
                <tbody>
                  <tr>
                    <td rowSpan={6}>Light-Weight Vehicle</td>
                  </tr>
                  <tr>
                    <td>A1 - Motorcycle Engine Capacity &lt;= 100cc</td>
                  </tr>
                  <tr>
                    <td>A - Motorcycle Engine Capacity &gt; 100cc</td>
                  </tr>
                  <tr>
                    <td>
                      B1 - Motor Tricycle - Tare &lt;= 500kg, GVW &gt;= 1000kg
                    </td>
                  </tr>
                  <tr>
                    <td>
                      B - All Cars/Dual Purpose - GVW &lt;= 3500kg, Passengers
                      &lt;= 8, Trailer &lt;= 250kg
                    </td>
                  </tr>
                  <tr>
                    <td>G1 - Two Wheel Tractor with a Trailer</td>
                  </tr>
                  <tr>
                    <td rowSpan={10}>Heavy-Weight Vehicle</td>
                  </tr>
                  <tr>
                    <td>
                      C1 - Light Motor Lorry - 3500kg &lt; GVW &lt;= 17000kg,
                      Trailer &lt; 750kg
                    </td>
                  </tr>
                  <tr>
                    <td>
                      C - Motor Lorry - GVW &gt; 17000kg, Trailer &lt;= 750kg
                    </td>
                  </tr>
                  <tr>
                    <td>
                      CE - Heavy Motor Lorry - GVW &gt; 17000kg, Trailer &gt;
                      750kg
                    </td>
                  </tr>
                  <tr>
                    <td>
                      D1 - Light Motor Coach - Passengers &lt; 32, Trailer &lt;=
                      750kg
                    </td>
                  </tr>
                  <tr>
                    <td>
                      D - Motor Coach - Passengers &gt; 32, Trailer &lt;= 750kg
                    </td>
                  </tr>
                  <tr>
                    <td>DE - Heavy Motor Coach - Trailer &gt; 750kg</td>
                  </tr>
                  <tr>
                    <td>
                      G - Agricultural Land Vehicle with or without a Trailer
                    </td>
                  </tr>
                  <tr>
                    <td>J - Special Purpose Vehicle</td>
                  </tr>
                  <tr>
                    <td>PT - Public Transport Endorsement</td>
                  </tr>
                </tbody>
              </table>
            </div>



            <div className="upload">
              <h3>
                Documents<span style={errorStyle}>*</span>
              </h3>
              <div
                className="drag-and-drop"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                <i
                  className="fa-solid fa-cloud-arrow-up"
                  style={{ color: "#007bff" }}
                />
                <p>Drag and drop files here</p>
              </div>
              <form id="uploadForm" encType="multipart/form-data">
                <label htmlFor="fileInput" className="custom-file-upload">
                  <input
                    type="file"
                    id="fileInput"
                    name="files[]"
                    multiple
                    onChange={handleFileInputChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                  [ NIC or Passport, Birth Certificate, Medical Certificate,
                  B&amp;W Photo, Existing License (Renewal Purpose) ] -
                  <span id="fileCount">
                    {selectedFiles.size === 1
                      ? `${selectedFiles.size} File`
                      : `${selectedFiles.size} Files`}
                  </span>
                </label>
              </form>
              <div id="fileList" className="file-list">
                {Array.from(selectedFiles).map((fileName) => (
                  <div key={fileName} className="file-list-item">
                    <span>File: {fileName}</span>
                    <button
                      className="remove-button"
                      onClick={() => removeFile(fileName)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="error-messages">{errorMessages}</div>
            </div>




            //DOB Validation
  const handleDobChange = (e) => {
    const inputValue = e.target.value;
    setdob(inputValue);

    // Calculate the birth date from the input value (assuming the input format is "YYYY-MM-DD")
    const birthDate = new Date(inputValue);

    // Calculate the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - birthDate;

    // Calculate the age in days
    const ageInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Check if the calculated age in days is less than 6570 (which is roughly 18 years in days)
    if (ageInDays < 6572) {
      setErrorDOB("You must be at least 18 years old.");
    } else {
      setErrorDOB("");
    }
  };

  //Gender
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  //Vehicle Category Type
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  //Practice Type
  const handlePracticeChange = (event) => {
    setPractice(event.target.value);
  };




  const [Gender, setGender] = useState("Male");
  const [Practice, setPractice] = useState("With Practice");
  const [Category, setCategory] = useState("");





  const [selectedFiles, setSelectedFiles] = useState(new Set());
  const [errorMessages, setErrorMessages] = useState("");

  const allowedExtensions = ["png", "pdf", "jpeg", "jpg"];
  const maxFiles = 5; // Maximum allowed files

  // Prevent default drag and drop behavior
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const fileInputRef = useRef(null);

  // Handle files dropped onto the drag and drop area
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleDroppedFiles(files);
  };

  // Handle files selected using the file input field
  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleDroppedFiles(files);
    e.target.value = ""; // Clear the file input field
  };

  const handleDroppedFiles = (files) => {
    let errorMessage = "";

    // Filter out files with invalid extensions and check for duplicates before adding them
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        if (!selectedFiles.has(file.name)) {
          if (selectedFiles.size < maxFiles) {
            selectedFiles.add(file.name);
            appendFileToList(file);
          } else {
            errorMessage = "Maximum 5 files can be added.";
            break;
          }
        } else {
          errorMessage = `File "${file.name}" is already selected.`;
          break;
        }
        if (selectedFiles.size < 4) {
          errorMessage = "Minimum 4 files must be added.";
        }
      } else {
        errorMessage = `File "${file.name}" has an invalid extension and was not added.`;
      }
    }

    // Update the file count
    updateFileCount();

    // Display error message if there is one
    if (errorMessage) {
      setErrorMessages(errorMessage);
    } else {
      setErrorMessages("");
    }
  };

  const appendFileToList = (file) => {
    // Use React state to update the selectedFiles state
    setSelectedFiles(
      (prevSelectedFiles) => new Set([...prevSelectedFiles, file.name])
    );
  };

  const removeFile = (fileName) => {
    // Use React state to update the selectedFiles state
    setSelectedFiles((prevSelectedFiles) => {
      const newSelectedFiles = new Set(prevSelectedFiles);
      newSelectedFiles.delete(fileName);
      return newSelectedFiles;
    });
  };

  const updateFileCount = () => {
    // Use selectedFiles state to determine the count
    const count = selectedFiles.size;
    // Update the file count in your component
    // You can use count variable to display the count wherever needed in your JSX
  };

  // Function to format file size for display.
  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

*/
