import React from "react";
import profilepic from "../../assets/photo.jpg";

export default function About() {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4 rounded->< shadow"
          src={profilepic}
          alt="profile"
          width="300"
          height="400"
        />
        <h1 className="display-5 fw-bold">About Me</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Hello Everyone. Welcome to my Portfolio!
          My name is Kiyona Bentley. I am 25 years old and was born and raised in Philadelphia, PA. 
          I have a bachelor's degree in Psychology and a Master's degree in Buisness Administration. 
          I have just started my journey into the world of full-stack web development and I am always excited to learn more. 
          Recently, I received a certificate from University of Pennsylvania Lps coding bootcamp where I learning to develop and hone my web development skills. When I am not cooding I enjoy watching movies and playing all different kinds of video games.
          </p>
        </div>
      </div>
    </div>
  );
}