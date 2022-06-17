import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Table, Button } from 'react-bootstrap'
import { GET_EMPLOYEES_QUERY } from '../queries/query'
import { TableRow, ButtonContainer, TableHead, ColumnName, HeadingContainer, Container } from '../styles/employee.styled';

const Employee = () => {
    const { loading, error, data } = useQuery(GET_EMPLOYEES_QUERY);
    const [records, setRecords] = useState(data?.employees?.slice(0, 20));
    const [count, setCount] = useState(20);

    useEffect(() => {
        setRecords(data?.employees?.slice(0, 20));
    }, [data]);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const handleMore = (count) => {
        setCount(count + 20);
        setRecords(data.employees.slice(0, count + 20))
    };

    return (
        <React.Fragment>
            <Container>
            <HeadingContainer>
                Employee Records
            </HeadingContainer>
            <Table>
            <TableHead>
                <tr>
                  <ColumnName>Name</ColumnName>
                  <ColumnName>Address</ColumnName>
                  <ColumnName>Email</ColumnName>
                  <ColumnName>Phone Number</ColumnName>
                </tr>
              </TableHead>
              <tbody>
                {records?.map((employee, i) => {
                  return (
                    <TableRow>
                      <td>{employee.name}</td>
                      <td>{employee.address}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phoneNumber}</td>
                    </TableRow>
                  )
                })}
              </tbody>
            </Table>
            <ButtonContainer>
                <Button onClick={() => handleMore(count)}>Load More</Button>
            </ButtonContainer>
            </Container>
        </React.Fragment>
    );
}

export default Employee;
