use employees;

INSERT INTO department (department_name)
VALUES 
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role (salary, title, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Account Manager', 160000, 3),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
      ('Brian', 'Samuels', 7, ),
      ('Tony', 'Stark', 1, ),
      ('Steve', 'Rodgers', 2, ),
      ('Bruce', 'Banner', 3, ),
      ('Thor', 'Odinson', 4, ),
      ('Clinton', 'Barton', 5, ),
      ('Natasha', 'Romanoff', 6, ),
      ('Henry', 'Pym', 8, );