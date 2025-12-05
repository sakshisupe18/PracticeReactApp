import React from "react";
import "./Blog.css";

function Blog() {
  const title = "10 Tips for Effective Time Management";
  const author = "John Doe";
  const description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  const image = "https://via.placeholder.com/150";


  return (
    <div className="blog-container" style={{ padding: "20px", maxWidth: "600px", margin: "20px auto", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <img className="blog-image" src={image} alt="Blog Thumbnail" />
      <h1 style={{ color: "#333" }}>{title}</h1>
      <h3 style={{ color: "#666" }}>By {author}</h3>
      <p style={{ lineHeight: "1.5" }}>{description}</p>
    </div>
  );
}

export default Blog;
