// Write your solution in this file!
const employee = {
    name: "baris" ,
    street: "108" ,
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = {...employee, [key]: value}
    return newEmployee
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
}

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}
