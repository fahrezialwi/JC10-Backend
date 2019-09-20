use query_practice;

select * from locations;
select * from employees;
select * from departments;
select * from countries;
select * from regions;
select * from jobs;
select * from job_history;

-- cari nama depan, nama belakang, dan gaji dari karyawan
select first_name, last_name, salary from employees;

-- cari nama depan, nama belakang, dan gaji dari karyawan yang gajinya di atas karyawan yang nama belakangnya 'Bull'
select first_name, last_name, salary from employees 
where salary > (select salary from employees where last_name = 'Bull');

-- cari nama depan, nama belakang, dan gaji dari karyawan yang gajinya di atas rata-rata
select first_name, last_name, salary from employees
where salary > (select avg(salary) from employees);

-- cari nama depan, nama belakang, dan id job dari karyawan yang jabatannya manager
select first_name, last_name, job_id from employees
where employee_id in (select manager_id from employees);

-- cari nama depan dan nama belakang dari karyawan yang bekerja di departemen it, it support, dan it helpdesk
select first_name, last_name from employees
where department_id in (select department_id
from departments where department_name
in ('IT', 'IT Support', 'IT Helpdesk'));

-- cari nama depan dan nama belakang dari karyawan yang departemen managernya di amerika
select first_name, last_name from employees 
where manager_id in (select employee_id
from employees where department_id
in (select department_id from departments where location_id 
in (select location_id from locations where country_id = 'US')));