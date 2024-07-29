import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import Header from './Header'
import Table from './Table'
import Add from './Add'
import Edit from './Edit'

import { employeeData } from '../../data/index'

const Dashboard = ({ setIsAuthticated }) => {

    const [employees, setEmployees] = useState(employeeData)
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const [isAdding, setIsAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    // css styles for cancel button
    const style = document.createElement('style')
    style.textContent = `
    .margin-left-button{
        margin-left: 12px;
    }`;
    document.head.appendChild(style)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('employees_data'))
        if (data !== null && Object.keys(data).length !== 0) setEmployees(data)
    }, [])

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id)
        setSelectedEmployee(employee)
        setIsEditing(true)
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel it!',
            customClass: {
                cancelButton: 'margin-left-button'
            }
        })
            .then(result => {
                if (result.value) {
                    const [employee] = employees.filter(employee => employee.id === id)

                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                    const employeesCopy = employees.filter(employee => employee.id !== id)
                    localStorage.setItem('employee_data', JSON.stringify(employeesCopy))
                    setEmployees(employeesCopy)
                }
            })
    }

    return (
        <div className='container'>
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                        setIsAuthticated={setIsAuthticated}
                    />
                    <Table
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}

            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}

            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard