drop table if exists workout_items;
drop table if exists workouts; 
 
drop table if exists users; 
create table users (
    id serial primary key,
    username text,
    password text,
    email text,
    weight int,
    fat int
);

insert into users (username, password, email, weight, fat) values (
    'gillygilstrap',
    'wordpass',
    'gilly@email.com',
    175,
    15
);

insert into users (username, password, email, weight, fat) values (
    'billdo',
    'badpassword',
    'billdo@loser.com',
    200,
    20
);


create table workouts (
    id serial primary key,
    name text,
    date text,
    completed boolean,
    note text
);

insert into workouts (name, date, completed, note) values (
    'Squat Heathen',
    '10/31/2018',
    true,
    'Felt great, no soreness'
);

insert into workouts (name, date, completed, note) values (
    'Murph',
    '11/1/2018',
    true,
    'Super tough day today'
);


create table workout_items(
    id serial primary key,
    user_id int references users (id),
    workout_id int references workouts (id),
    type text,
    type_value text,
    distance int,
    time int,
    weight int,
    reps int,
    sets int
);

insert into workout_items (user_id, workout_id, type, type_value, distance, time, weight, reps, sets) values (
    1,
    1,
    'Cardio',
    'Run',
    1,
    673, 
    null,
    null,
    null
);
insert into workout_items (user_id, workout_id, type, type_value, distance, time, weight, reps, sets) values (
    1,
    1,
    'Weights',
    'Bench Press',
    null,
    null, 
    225,
    8,
    3
);
insert into workout_items (user_id, workout_id, type, type_value, distance, time, weight, reps, sets) values (
    1,
    1,
    'Weights',
    'Pull-Ups',
    null,
    null, 
    175,
    5,
    2
);

insert into workout_items (user_id, workout_id, type, type_value, distance, time, weight, reps, sets) values (
    2,
    2,
    'Cardio',
    'Run',
    2,
    1000, 
    null,
    null,
    null
);
insert into workout_items (user_id, workout_id, type, type_value, distance, time, weight, reps, sets) values (
    2,
    2,
    'Weights',
    'Push-Ups',
    null,
    null, 
    175,
    20,
    4
);

select * from users;
select * from workouts;
select * from workout_items;
-- drop table workout_items;
