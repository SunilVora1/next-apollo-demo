import express from "express"
import bodyParser from "body-parser"
import { ApolloServer } from "apollo-server-express"
import typeDefs from "./typedef.js"
import resolvers from "./resolver.js"
const app = express()
app.use(bodyParser.json())
const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  formatError: error => {
    return error
  },
  context: ({ req, res }) => {
    return {
      req,
      res,
    }
  },
})
await server.start();
server.applyMiddleware({ app, path: "/graphql" })
app.listen(3030, () => {
  console.log("app is listening to port 3030")
})