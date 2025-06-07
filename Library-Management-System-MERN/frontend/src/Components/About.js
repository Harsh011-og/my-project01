import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-box">
      <h2 className="about-title">About the Library</h2>
      <div className="about-data">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
            alt=""
          />
        </div>
        <div>
          <p className="about-text">
            Our Library Management System is designed to simplify the process of
            managing books, members, and transactions efficiently. It enables
            users to search for books, issue and return them, and track due
            dates seamlessly. This system aims to replace traditional manual
            record-keeping with an automated and user-friendly interface.
            <br />
            <br />
            The system offers a centralized database where administrators can
            manage book inventory, monitor member activity, and generate
            reports. Users can create personal accounts, search for available
            books, and reserve them for future use, improving the overall
            library experience.
            <br />
            <br />
            Our system ensures secure user authentication and maintains data
            integrity. It includes features like automated fine calculation for
            overdue books, book availability updates, and personalized
            recommendations.
            <br />
            <br />
            Your feedback and suggestions for improving the system are always
            welcome!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
