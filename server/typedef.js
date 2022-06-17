import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    name: String
    address: String
    email: String
    phoneNumber: String
  }
  
  type Query {
    employees: [User]
  }
`;

export default typeDefs;