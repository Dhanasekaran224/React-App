import React from "react";
import "../App.css";

function BlogPost({ title, content }) {
  return (
    <div className="blog-post">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;