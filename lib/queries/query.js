import gql from 'graphql-tag'

export const getPosts = gql`
    query Query {
        allPosts {
        description
        id
        title
        }
    }
`