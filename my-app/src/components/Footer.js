import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="py-3 mt-4 bg-dark bg-gradient footer-style">
      <ul className="nav justify-content-center pb-3 mb-3">
        <li className="nav-item">
          <a
            href="mailto:aubentley80@gmail.com"
            className="nav-link px-2 text-light "
          >
            aubentley80@gmail.com
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/Kbentley8"
            target="_blank"
            rel="noreferrer"
            className="nav-link px-2 text-light "
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/kiyona-bentley-49889b218/"
            target="_blank"
            rel="noreferrer"
            className="nav-link px-2 text-light"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}