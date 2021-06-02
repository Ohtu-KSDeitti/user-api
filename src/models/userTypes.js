const { gql } = require('apollo-server')

const typeDefs = gql`
type User {
  id: ID!
  username: String!
  password: String!
  email: String!
  userInfo: UserInfo
  friendList: [Match]
}

type Match { 
   userID: ID
   status: Int
}

type Token {
   value: String!
}

type UserInfo {
  firstname: String
  lastname: String
  location: String
  gender: String
  dateOfBirth: String
  profileLikes: Int
  bio: String
  tags: [String]
}

type Query {
  userCount: Int!
  allUsers: [User!]!
  findUser(username: String): User
  findUserById(id: ID!): User
}

type Mutation {
  addUser(
    username: String!
    password: String!
    email: String!
  ): User
  deleteUser(
    id: ID!
  ): User
  login(
    username: String!
    password: String!
  ): Token
}
`

module.exports = { typeDefs }