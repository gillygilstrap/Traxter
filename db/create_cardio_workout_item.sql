insert into workout_items(user_id, workout_id, type, type_value, distance, time) values 
(${user_id}, ${workout_id}, ${type}, ${type_value}, ${distance}, ${time}) returning *;



-- create table workout_items(
--     id serial primary key,
--     user_id int references users (id),
--     workout_id int references workouts (id),
--     type text,
--     type_value text,
--     distance int,
--     time int,
--     weight int,
--     reps int,
--     sets int
-- );
-- user_id: 1,
--                             workout_id: workouts.id,
--                             type: type,
--                             type_value: workout[i].colOne,
--                             distance: workout[i].colTwo,
--                             time: workout[i].colThree