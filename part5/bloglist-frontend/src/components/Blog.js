import React from 'react'
const Blog = ({ blog }) => (
  <div>
    {blog.title} - {blog.author || "no author"}
  </div>
)

export default Blog
