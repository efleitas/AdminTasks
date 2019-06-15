const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

//Db connection
const {mongoose} = require('./database');

//settings
app.set('port',process.env.PORT || 3000);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/tasks', require('./routes/task.routes'))

//starting server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
});