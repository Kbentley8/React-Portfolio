import React from "react";
import HomeProfile from "../assets/HomeProfile.png"

function HomeCard() {
    return (


        <div className="row row-home">
            <div className="col-4">

                <div className="card card-home">
                    <div className="card-body">
                        <img src={HomeProfile} alt="home-profile-photo" className="ome-profile-photo mb-3"></img>
                        <h5 className="card-title text-center">Full Stack Web developer</h5>
                        <p className="card-text text-center">Eager to offer a variety of services and always learning.</p>
                        <a href="https://www.linkedin.com/in/kiyona-bentley-49889b218/" className="ml-5">LinkedIn</a>
                        <a href="https://github.com/Kbentley8" className="ml-5">Github</a>
                    </div>
                </div>

            </div>
        </div>



    );
}

export default HomeCard;