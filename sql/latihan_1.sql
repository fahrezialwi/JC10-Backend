use latihan_1;

select * from users join cart on users.id = cart.user_id;

select product_name, username as pemilik from users 
join cart on users.id = cart.user_id;

-- select * from users
-- join cart on users.username = cart.pemilik;

select * from users;
select * from cart;

select * from users where not role = 'admin';

select * from users where role = 'admin' or role = 'ninja';
select * from users where role in ('admin', 'ninja');

insert into users (role, username, email) values ('user', 'elon', 'elon@gmail.com');

update users set username = 'musk' where id = 4;
delete from users where id = 4;