const fs = require('fs');
const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');

init();

function init() {
    inquirer .prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
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
    
}

function addRole() {
    
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

