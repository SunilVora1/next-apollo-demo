import { gql } from '@apollo/client'

export const GET_EMPLOYEES_QUERY = gql`
    query employees {
        employees {
            name
            address
            email
            phoneNumber
        }
    }
`