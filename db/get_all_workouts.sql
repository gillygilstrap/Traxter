select * 
from workouts w
join workout_items wi
on wi.workout_id = w.id 
where wi.user_id = ${id}
order by date;
 

--  select * 
-- from workout_items wi
-- join workouts w
-- on wi.workout_id = w.id 
-- where wi.user_id = ${id}
