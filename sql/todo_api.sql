use todo_api;

select * from todo;
select * from users;

select * from todo join users on users.id = todo.user_id;
select * from todo t join users u on u.id = t.user_id;