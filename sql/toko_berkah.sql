use toko_berkah;

select * from kota;
select * from toko;

select * from toko order by totalIncome desc;

select k.nama as nama_kota, count(t.nama) as jumlah_toko from kota as k
join toko as t on k.id = t.kotaId
group by k.nama;

select k.nama as nama_kota, count(t.nama) as jumlah_toko from kota as k
join toko as t on k.id = t.kotaId
where t.tanggalBerdiri between '2017-12-01' and '2018-12-01'
group by k.nama
order by jumlah_toko desc;

select nama from toko where totalIncome >
(select avg(t.totalIncome) from toko as t
join kota as k on t.kotaId = k.id
where k.nama in ('Jakarta','Tangerang','Bandung'));

select k.nama, count(t.nama) as jumlah_toko, t.totalIncome from toko as t
join kota as k on t.kotaId = k.id
where t.totalIncome >
(select avg(t.totalIncome) from toko as t
join kota as k on t.kotaId = k.id
where k.nama in ('Jakarta','Tangerang','Bandung'))
group by k.nama
order by jumlah_toko desc;

select t.id as id_toko, t.nama as nama_toko, t.alamat,
t.totalIncome as total_income, t.tanggalBerdiri as tanggal_berdiri,
k.id as id_kota, k.nama as nama_kota, 
extract(year from tanggalBerdiri) as tahun,
extract(month from tanggalBerdiri) as bulan,
extract(day from tanggalBerdiri) as tanggal
from toko as t join kota as k on t.kotaId = k.id
where t.tanggalBerdiri between '2017-12-01' and '2018-12-01'
and k.nama in ('Jakarta','Tangerang')
and t.totalIncome > 
(select avg(t.totalIncome) from toko as t 
join kota as k on t.kotaId = k.id 
where k.nama = 'Bandung');