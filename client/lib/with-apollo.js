import { withApollo } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const apolloConfig = {
  link: new HttpLink({
    uri: 'http://localhost:3030/graphql'
  })
}

export default withApollo(apolloConfig)
