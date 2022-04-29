use employees;

INSERT INTO department (department_name)
VALUES 
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
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
      ('Brian', 'Samuels', 7, 1),
      ('Tony', 'Stark', 1, NULL),
      ('Steve', 'Rodgers', 2, 3),
      ('Bruce', 'Banner', 3, NULL),
      ('Thor', 'Odinson', 4, NULL),
      ('Clinton', 'Barton', 5, NULL),
      ('Natasha', 'Romanoff', 6, 2),
      ('Henry', 'Pym', 8, NULL);