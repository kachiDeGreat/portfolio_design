import React from "react";

const Resume: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Resume</h1>
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Degree:</strong> Your Degree
            <br />
            <strong>Institution:</strong> Your University
            <br />
            <strong>Year:</strong> YYYY - YYYY
          </li>
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Job Title:</strong> Your Position
            <br />
            <strong>Company:</strong> Company Name
            <br />
            <strong>Duration:</strong> YYYY - YYYY
            <br />
            <strong>Description:</strong> Brief description of your role.
          </li>
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
