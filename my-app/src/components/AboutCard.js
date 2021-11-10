import React from "react";
import Profile from "../assets/photo.jpg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div>

                    <p>Hello Everyone. Welcome to my Portfolio!</p>
                    <p>My name is Kiyona Bentley. I am 25 years old and was born and raised in Philadelphia, PA. I have a bachelor's degree in Psychology and a Master's degree in Buisness Administration. I have just started my journey into the world of full-stack web development and I am always excited to learn more. I am currently enrolled in the University of Pennsylvania  
            Lps coding bootcamp where I am learning to develop and hone my web development skills.</p>

                    <p>
                        I am eager to learn about new opportunities in coding and can be reached
                        through this portfolio, by
                        email:
                                                <a href="mailto:aubentley80@gmail.com"
                            target="_blank">aubentley80@gmail.com, </a> through<a
                                href="https://github.com/Kbentley8"> GitHub</a>, or through <a
                                    href="https://www.linkedin.com/in/kiyona-bentley-49889b218/">
                            LinkedIn.</a>
                        Thank you for visiting!

                                                </p>
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/kiyona-bentley-49889b218/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/Kbentley8" className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;