import React from "react";

function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <h2>Resume</h2>
      <p>
        You can download my resume using the link below:
      </p>
      <br/>
      <a href="/Resume.pdf"
      className="btn-secondary"
      download="Resume.pdf">Download Resume</a>

    </section>
  );
}

export default Resume;
