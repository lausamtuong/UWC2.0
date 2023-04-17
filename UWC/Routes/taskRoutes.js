const express = require('express');
const taskController = require('../Controllers/taskController');


const router = express.Router();

router
	.route('/')
	//.get( taskController.getAllTask)
	.post(taskController.createTask);



module.exports = router;
