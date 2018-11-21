insert into workout_items(user_id, workout_id, type, type_value, weight, reps, sets) 
values
 (${user_id}, ${workout_id}, ${type}, ${type_value}, ${weight}, ${reps}, ${sets}) returning *;



