import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState(null)

  const [blogs, setBlogs] = useState([])
  const [newBlog, setnewBlog] = useState({})

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      setUsername('')
      setPassword('')
    } catch (exception) {
      setNotification('Error: wrong username or password')
      setTimeout(() => setNotification(null), 2000)
    }
  }

  const handleLogout = () => {
    window.localStorage.clear()
    setUser(null)
  }

  const handleBlogAdded = async (event) => {
    event.preventDefault()
    try {
      blogService.setToken(user.token)
      const addedBlog = await blogService.addBlog(newBlog)
      setNotification(`Success: the blog ${addedBlog.title} by ${addedBlog.author || "an unknown writer"} was just added to your list.`)
      setTimeout(() => setNotification(null), 2000)
      setBlogs(blogs.concat(addedBlog))
      setnewBlog({})
    } catch (exception) {
      setNotification('Error: blog could not be added')
      setTimeout(() => setNotification(null), 2000)
    }
  }

  const loginForm = () => (
    <>
      <h1>Login to application</h1>
      <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  )

  const addBlogForm = () => (
    <>
      <h2>Add a new blog</h2>
      <form onSubmit={handleBlogAdded}>
        <div>
          Title:
          <input
            type="text"
            name="Title"
            onChange={({ target }) => setnewBlog({...newBlog, title: target.value})}
          />
        </div>
        <div>
          Author:
          <input
            name="Author"
            onChange={({ target }) => setnewBlog({...newBlog, author: target.value})}
          />
        </div>
        <div>
          URL:
          <input
            name="URL"
            onChange={({ target }) => setnewBlog({...newBlog, url: target.value})}
          />
        </div>
        <button type="submit">add blog</button>
      </form>
    </>
    )

  const blogsList = () => (
    <>
      <h2>blogs</h2>
      <p> {user.name} is logged in.</p>
      <button onClick={handleLogout}>
        Log out
      </button>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      {addBlogForm()}
    </>
  )

  return (
    <div>
      <Notification message={notification}></Notification>
      {user
        ? blogsList()
        : loginForm()
      }
    </div>
  )
}

export default App
