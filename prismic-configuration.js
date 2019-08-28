import Prismic from 'prismic-javascript'

// -- Prismic Documentatoin API endpoint and access token
export const apiEndpoint = 'https://stripe-demo-andrea.cdn.prismic.io/api/v2'
export const repositoryUrl = 'stripe-demo-andrea'
export const accessToken = ''

// -- Client method to query Documentation Prismic repo
let frontClient
export const Client = (req = null) => {
  if (!req && frontClient) return frontClient // Prevents generating new instances for client side since we don't need the refreshed request object.
  else {
    // Reinitializes Client only if there's a req object present, which is used for Previews
    const options = Object.assign({}, req ? { req } : {}, accessToken ? { accessToken: accessToken } : {})
    // Connects to the given repository to facilitate data queries
    return Prismic.client(apiEndpoint, options)
  }
}
