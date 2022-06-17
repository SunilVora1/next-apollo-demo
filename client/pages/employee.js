import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap'
import { GET_EMPLOYEES_QUERY } from '../queries/query'

const Employee = () => {
    const { loading, error, data } = useQuery(GET_EMPLOYEES_QUERY);
    const [records, setRecords] = useState(data.employees.slice(0, 20));
    const [count, setCount] = useState(20);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const handleMore = (count) => {
        setCount(count + 20);
        setRecords(data.employees.slice(0, count + 20))
    };

    return (
        <React.Fragment>
            <Table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {records.map((employee, i) => {
                  return (
                    <tr>
                      <td>{employee.name}</td>
                      <td>{employee.address}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phoneNumber}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            <Button onClick={() => handleMore(count)}>Load More</Button>
        </React.Fragment>
    );
}

export default Employee;
