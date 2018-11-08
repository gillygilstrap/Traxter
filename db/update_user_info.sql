update users
set weight = ${weight}, fat = ${fat}
where id = ${id} returning *;





