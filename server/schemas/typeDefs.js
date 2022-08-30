const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    userName: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String!
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: [User]
  }

  type Query {
    me: [User]
  }

  type Mutation {
    login: 
    addUser:
    saveBook: 
    removeBook
  }
`;

module.exports = typeDefs;