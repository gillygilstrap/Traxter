update workout_items
set type_value = ${type_value}, distance = ${distance}, time = ${time}
where id = ${id} returning *;

