update workout_items
set type_value = ${type_value}, weight = ${weight}, reps = ${reps}, sets = ${sets}
where id = ${id} returning *;


