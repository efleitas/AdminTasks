const mongoose = require('mongoose');
const URI = 'mongodb://localhost/admin-tareas';

mongoose.connect(URI)
	.then(db => console.log('db is connect'))
	.catch(err => console.log(err));

module.exports = mongoose;