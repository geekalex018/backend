const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const userRouter = require('./Routes/UserRoute');
const filesRouter = require('./Routes/FileRoutes')
const ErrorController = require('./Controllers/ErrorController');

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('hello World How Are you')
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/imageUpload', filesRouter)

app.all('*', (req, res, next) => {
    const error = new Error(req.originalUrl + "url not found on server")
    next(error)
})

// error handling middleware is the error object


module.exports = app;