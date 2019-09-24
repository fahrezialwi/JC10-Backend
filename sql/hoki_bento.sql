use hoki_bento;

select * from transaction;
select * from transactionitem;
select * from product;

select * from transactionitem where productId = 2;

select sum(qty) as totalQty from transactionitem where productId = 2;

select transactionItem.id, productId, qty,transactionId, tanggalTransaksi from transactionitem 
join transaction  t on t.id = transactionItem.transactionId 
where productId = 3;

select count(*) as totalTransaksi, sum(totalHarga) as jumlahHarga, namaPembeli
from transaction group by namaPembeli;

select sum(qty) as totalQty, productId
from transactionitem group by productId;

select * from transactionItem join product 
on transactionitem.productId = product.id;

select * from transaction join transactionitem 
on transaction.id = transactionitem.transactionId;

select namaPembeli, nama as namaProduct, sum(qty) as totalQty, count(namaPembeli) as TotalTransaksi from transactionItem ti
join transaction t on ti.transactionId = t.id
join product p on p.Id = ti.productId
where nama = 'Paket Bento B'
group by namaPembeli
order by totalQty desc;

