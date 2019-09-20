use todo_api;

select * from todo;
select * from users;

select * from todo join users on users.id = todo.user_id;
select * from todo t join users u on u.id = t.user_id;

-- subqueries
select * from todo where user_id = (select id from users where username = 'budi');
select * from todo where user_id in (select id from users where username = 'budi' or username = 'coki');
select * from todo where user_id in (3, 6);
select * from todo where user_id in (select id from users where role = 'premium');
select * from todo where user_id in (select id from users where not role = 'premium');