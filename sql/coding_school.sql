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

-- 3
select username as nama_murid, count(id_user) as jumlah_kelas_yang_diikuti from conn_user_kelas
join users on users.id = conn_user_kelas.id_user
group by id_user;
