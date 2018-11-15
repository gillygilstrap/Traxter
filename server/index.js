const express= require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const userController = require('./userController')
const workoutController = require('./workoutController');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('database connect is bueno')
    // Need Catch Here
})

app.post('/api/workouts/:id', workoutController.newWorkout)
app.put('/api/workouts', workoutController.saveChanges)
app.get('/api/workouts/getAll/:id', workoutController.getAllWorkouts)
app.delete('/api/workout/:userId/:workoutId', workoutController.deleteWorkout)
app.delete('/api/workoutItem/:id', workoutController.deleteWorkoutItem)

app.post('/api/register', userController.createNewUser)
app.post('/api/login', userController.loginUser)
app.put('/api/users/:id', userController.updateUser)
const port = 4000

const path = require('path')
app.get('*', (req, res)=>{
    console.log('hit')
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});