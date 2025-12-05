import React from "react";

const skills = {
  "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Redux"],
  "Backend": ["Node.js", "Express"],
  "Tools": ["Git & GitHub", "VS Code", "Postman", "npm / yarn"],
};

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <ul>
              {list.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
