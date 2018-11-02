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

app.post('/api/workouts', workoutController.newWorkout)

const port = 4000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})