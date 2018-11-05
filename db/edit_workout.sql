UPDATE workouts
SET name = ${name}, date = ${date}, completed = ${completed}, note = ${note}
WHERE id = ${workout_id} returning *;


-- insert into workouts (name, date, completed, note)
-- where workout_id = ${workout_id} values 

-- (${name}, ${date}, ${completed}, ${note}, ${workout_id}) returning *;
