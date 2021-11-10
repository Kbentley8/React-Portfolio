import React from "react";
import ResumePNG from "../../assets/resume.png"



function Learn() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+4849295245" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto:aubentley80@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/kiyona-bentley-49889b218/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/Kbentley8" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="https://drive.google.com/file/d/1nvYXUpxk1iNyCn6CQVJC2g4kFmDxRbs6/view?usp=sharing"><h1 className="text-center mt-2">View Here</h1></a>

        </div>
      </div>
    </div >
  );
}

export default Learn;