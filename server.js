const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/login', (req, res) => {
  // sets a cookie with their name
  let name = req.query.name
  res.cookie('userName', name, { expires: new Date(Date.now() + 900000), httpOnly: true })
  res.send('Usage: send a get request to http://localhost:3000/login?name=[insert name] --> then navigate to http://localhost:3000/hello')
})

app.get('/hello', (req, res) => {
  // says welcome to the name on the cookie
  let userName = req.cookies.userName
  res.send(`Welcome ${userName}`)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})