import React from "react";

export default function Resume() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Skills</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon bg-success bg-gradient">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h2>Front-End Skills</h2>
          <p>
             HTML, CSS, JavaScript, JQuery, React, Bulma ,Bootstrap, and Materialize
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon bg-danger bg-gradient">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h2>Back-End Skills</h2>
          <p>
             Node.js, APIs, Express.js, MySQL, MySQL2, Sequelize, MongoDB, Mongoose, REST, and GraphQL
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon bg-warning bg-gradient">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h2>My Resume</h2>
          <p>
            Click the link below to view my resume
          </p>
          <a
            href="https://drive.google.com/file/d/1nvYXUpxk1iNyCn6CQVJC2g4kFmDxRbs6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}