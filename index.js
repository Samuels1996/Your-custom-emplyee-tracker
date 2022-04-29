const fs = require('fs');
const { prompt } = require('inquirer');
require('console.table');
const db = require('./db');

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",

    user: "root",

    password: "root",
    database: "employees"
  });
  

init();

function init() {
    inquirer .prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please make a selection',
            choices: [
                'View all employees',
                'Add role',
                'Add employee',
                'View all roles',
                'Update employee role',
                'Add Department',
                'View Departments'
            ]
        },
    ])
    .then(res => {
        let options = res.options;
        switch (options) {
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add role':
                addRole();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'Update employee role':
                updateRole();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'View Departments':
                viewDepartments();
                break;
        }
    })
}

function viewEmployees() {
    db.viewAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log(employees);
    })
    .then(() => loadMainPrompt());
}

function addRole() {
    inquirer .prompt([
        { type: 'input',
          name: 'roleTitle',
          message: 'What is the name of the role title?'},
        { type: 'input',
          name: 'departmentId',
          message: 'What is the department ID'},
        { type: 'input',
          name: 'roleSalary',
          message: 'What is the salary for this role?'},
    ]) .then((res) => {
        db.query('Would you like to add this role?', {
            title: res.title,
            department_id: res.departmentId,
            salary: res.salary
        }, function (err, res) {
            console.table(res);
            viewRoles();
        });
    })
}

function addEmployee() {
    
}

function viewRoles() {
    
}

function updateRole() {
    
}

function addDepartment() {
    
}

function viewDepartments() {
    
}

