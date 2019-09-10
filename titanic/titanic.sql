-- syntax collection file for executing an instruction
-- use cmd + enter to execute

-- load schema
use titanic;

-- select all column from train table
select * from train;

-- select all column from train table, and show 10 data from top
select * from train limit 20;

-- select all column from train table, and show 20 data from bottom
select * from train order by PassengerId desc limit 20;

-- select all column from train table, and show 10 data after row 20
select * from train limit 10 offset 20;

-- select PassengerId, Name, Age column from train table
select PassengerId, Name, Age from train;

-- select all column from train table and filter Sex = male
select * from train where Sex = 'male';

-- select all column from train table and filter Age < 20
select * from train where Age < 20;

-- select all column from train table and filter Pclass = 2 or Pclass = 1
select * from train where Pclass in (2,1);

-- select all column from train table and filter Pclass = 2 or Pclass = 1
select * from train where Pclass = 2 or Pclass = 1;

-- select all column from train table and filter Sex = 'male' and Age < 20
select * from train where Sex = 'male' and Age < 20;

-- select all column from train table and show passenger that survived
select * from train where Survived = 1;

-- select PassengerId and Name column from train table, and change PassengerId header to Id
select PassengerId as Id, Name from train;

-- select PassengerId and Name column from train table, filter that survived, and change PassengerId header to Id
select PassengerId as Id, Name from train where Survived = 1;

-- count all row from train table
select count(*) from train;

-- count all row based from jumlah, group it by Pclass, and order by jumlah descending
select count(*) as jumlah, Pclass from train group by Pclass order by jumlah desc;

-- count all row based from jumlah, group it by Survived and Age, and order by Age ascending
select count(*) as jumlah, Survived, Age from train group by Survived, Age order by Age;

-- count all row based from total, group it by Survived and Pclass, and order by Survived ascending
select count(*) as total, Survived, Pclass from train group by Survived, Pclass order by Survived;

-- count all row based from total, filter Survived = 1, group it by Survived and Pclass, and order by Survived ascending
select count(*) as total, Survived, Pclass from train where Survived = 1 group by Survived, Pclass order by Survived;

-- count all row based from jumlah, group it by PassengerId
select count(*) as jumlah, PassengerId from train group by PassengerId;

-- sum all Age data from train table
select sum(Age) from train;
