import React from "react";
import moviemeal from "../../assets/moviemeal.png";
import weatherdash from "../../assets/weatherdash.png";
import passgen from "../../assets/password.png";
import gettowork from "../../assets/pmdash.png";
import codequiz from "../../assets/codequiz.png";
import dayplanner from "../../assets/dayplanner.png";

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-center fw-bold">Take a look at my projects!</h1>
      <p className="text-center fw-bold">
        Tap the buttons to open a page to view a  project!
      </p>

      <div className="container">
        <div className="row justify-content-around">
          <div className="card m-2" style={{ width: "18rem" }}>
            <img src={moviemeal} className="card-img-top" alt="moviemealScreenshot" />
            <div className="card-body">
              <h5 className="card-title">Movie and Meal </h5>
              <p className="card-text">
                This app generates a random movie and meal for the user.
              </p>
              <a
                href="https://daelso.github.io/movie_meal/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                Check out this Project!
              </a>
              <a
                href="https://github.com/Kbentley8/movie_meal"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Check out the Repo!
              </a>
            </div>
          </div>
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={weatherdash}
              className="card-img-top"
              alt="weatherdashScreenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
              An app that displays a weekly forecast
              </p>
              <a
                href="https://kbentley8.github.io/Weather-Dashboard/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                Check out this Project!
              </a>
              <a
                href="https://github.com/Kbentley8/Weather-Dashboard"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Check out the Repo!
              </a>
            </div>
          </div>
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={passgen}
              className="card-img-top"
              alt="passgenScreenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Password Generator App</h5>
              <p className="card-text">
                This app randomnly generates a secure password for the user
              </p>
              <a
                href="https://kbentley8.github.io/passwordgenerator/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                Check out this Project!
              </a>
              <a
                href="https://github.com/Kbentley8/passwordgenerator"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Check out the Repo!
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img src={gettowork} className="card-img-top" alt="gettoworkScreenshot" />
            <div className="card-body">
              <h5 className="card-title">Get to Work</h5>
              <p className="card-text">
                This app features A project management dashboard for the user to organize tasks and deadlines.
              </p>
              <a
                href="https://stormy-fortress-72998.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                Check out this Project!
              </a>
              <a
                href="https://github.com/Kbentley8/project-management-application"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Check out the Repo!
              </a>
            </div>
          </div>
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={codequiz}
              className="card-img-top"
              alt="codequizScreenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Code Quiz App</h5>
              <p className="card-text">
                An Code quiz app made using Javascript
              </p>
              <a
                href="https://kbentley8.github.io/CodeQuiz/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                Check out this Project!
              </a>
              <a
                href="https://github.com/Kbentley8/CodeQuiz"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Check out the Repo!
              </a>
            </div>
          </div>
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={dayplanner}
              className="card-img-top"
              alt="DailyPlannerScreenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Day Planner App</h5>
              <p className="card-text">
                This app allows the user to schedule their workday.
              </p>
              <a
                href="https://kbentley8.github.io/dayplanner/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                Check out this Project!
              </a>
              <a
                href="https://github.com/Kbentley8/dayplanner"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Check out the Repo!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}