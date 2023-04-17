const express = require('express');
const cors = require('cors')
const taskRouter = require('./Routes/taskRoutes');

const app = express();

// 1) MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
// app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);



app.listen(8080,()=>{
    console.log("Server is running on PORT 8080")
})

module.exports = app;
