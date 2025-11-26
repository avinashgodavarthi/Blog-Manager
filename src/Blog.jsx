import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 className="logo">Blog Manager</h2>

      <button className="write-btn" onClick={() => navigate("/Home")}>
       ✍️ Write
      </button>
    </div>
  );
}

export default Blog;
