create table emp(
emp_id INT PRIMARY KEY,
emp_name VARCHAR(100),

emp_address VARCHAR(100),
pid_id INT
);
insert into emp(emp_id,emp_name,emp_address,pid_id)values(1,'akhi','pune',10);
insert into emp(emp_id,emp_name,emp_address,pid_id)values(2,'mahi','hyd',20);
insert into emp(emp_id,emp_name,emp_address,pid_id)values(3,'archi','mumbai',30);
insert into emp(emp_id,emp_name,emp_address,pid_id)values(4,'varshini','warngal',40);
insert into emp(emp_id,emp_name,emp_address,pid_id)values(5,'divya','sdpt',50);
insert into emp(emp_id,emp_name,emp_address,pid_id)values(6,'naveena','karminagar',60);
insert into emp(emp_id,emp_name,emp_address,pid_id)values(7,'srujana','talwade',70);
select * from emp;


---primary key---
create table stu(
stu_id INT PRIMARY KEY,
stu_name VARCHAR(100),
stu_address VARCHAR(100),
pid_id INT
);
insert into stu(stu_id,stu_name,stu_address,pid_id)values(1,'Akhi','prp',501);
insert into stu(stu_id,stu_name,stu_address,pid_id)values(1,'Akhi','prp',501);
select * from stu;


---superkey---
create table stu(
stu_id INT PRIMARY KEY,
stu_name VARCHAR(100),
stu_address VARCHAR(100),
pid_id INT
);
insert into stu(stu_id,stu_name,stu_address,pid_id)values(1,'Akhi','prp',501);
insert into stu(stu_id,stu_name,stu_address,pid_id)values(2,'mahi','sdpt',502);
select * from stu;

---aggreate functions---
create table stude(
stude_id INT PRIMARY KEY,
stude_name VARCHAR(100),
stude_marks INT 
);
insert into stude(stude_id,stude_name,stude_mark)values(1,'Akhi',50);
insert into stude(stude_id,stude_name,stude_mark)values(2,'mahi',80);
insert into stude(stude_id,stude_name,stude_mark)values(3,'sunny',85);
insert into stude(stude_id,stude_name,stude_mark)values(4,'mom',95
insert into stude(stude_id,stude_name,stude_mark)values(5,'archi',100);
select * from stude;





