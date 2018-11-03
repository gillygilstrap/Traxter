insert into workouts (name, date, completed, note) values 

(${name}, ${date}, ${completed}, ${note}) returning *;



