use coding_school;

select * from users;
select * from kelas;
select * from conn_user_kelas;

-- 1
select username, nama as nama_kelas from conn_user_kelas
join users on users.id = conn_user_kelas.id_user
join kelas on kelas.id = conn_user_kelas.id_kelas
where username = 'seto';

-- 2
select nama as nama_kelas, count(id_user) as jumlah_murid from conn_user_kelas
join kelas on kelas.id = conn_user_kelas.id_kelas
group by id_kelas;

-- 2 alt
select id_kelas, nama as nama_kelas, count(*) as jumlah_murid from conn_user_kelas as c
join users as u on u.id = id_user
join kelas as k on k.id = id_kelas
group by id_kelas;

-- 3
select username as nama_murid, count(id_user) as jumlah_kelas_yang_diikuti from conn_user_kelas
join users on users.id = conn_user_kelas.id_user
group by id_user;

-- 3 alt
select username, count(nama) as jumlah_kelas from conn_user_kelas as c
join users as u on u.id = id_user
join kelas as k on k.id = id_kelas
group by username;

-- 4
select username, kelas.nama from users, kelas, conn_user_kelas as conn,
(select id_kelas, count(id_kelas) as sum from conn_user_kelas group by id_kelas limit 1) as hitung
where conn.id_user = users.id and conn.id_kelas = hitung.id_kelas and kelas.id = conn.id_kelas;

-- 4 alt
select username from conn_user_kelas
join users as u on u.id = id_user
join kelas as k on k.id = id_kelas
where id_kelas =
(select id_kelas from conn_user_kelas as c
join users as u on u.id = id_user
join kelas as k on k.id = id_kelas
group by id_kelas
order by count(*) desc
limit 1);

-- 5
select id_kelas, nama as nama_kelas, count(*) as jumlah_murid from conn_user_kelas as c
join users as u on u.id = id_user
join kelas as k on k.id = id_kelas
group by id_kelas
having count(*) >
(select avg(total) from
(select count(username) as total, id_kelas from conn_user_kelas as c
join users as u on u.id = id_user
join kelas as k on k.id = id_kelas
group by id_kelas) as a);