import express from 'express';
const app = express();


app.get('/home', (req, res) => {
    res.status(200)
    .json(
        {
            success: true,
            message: "Welcome to the home page",
        }
    )
})


app.use('*', (req, res, next) => {
    res.status(400)
    .json(
        {
            success: false,
            message: 'This route is not defined',
        }
    )
})


export default app;