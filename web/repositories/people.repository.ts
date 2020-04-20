import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.API_URL || ''
const api = new GraphQLClient(endpoint)

export default {
  async getPeople() {
    const query = /* GraphQL */ `
      query {
        people {
          id
          name
        }
      }
    `

    const data = await api.request(query)
    return data.people
  },
}
