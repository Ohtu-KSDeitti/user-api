const { gql } = require('apollo-server')

const typeDefs = gql`
type User {
  id: ID!
  username: String!
  firstname: String!
  lastname: String!
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
   value: String
}

enum Gender {
  MALE
  FEMALE
}

enum Region {
  AHVENANMAA
  ETELAKARJALA
  ETELAPOHJANMAA
  ETELASAVO
  KAINUU
  KANTAHAME
  KESKIPOHJANMAA
  KESKISUOMI
  KYMENLAAKSO
  LAPPI
  PIRKANMAA
  POHJANMAA
  POHJOISKARJALA
  POHJOISPOHJANMAA
  POHJOISSAVO
  PAIJATHAME
  SATAKUNTA
  UUSIMAA
  VARSINAISSUOMI
}

enum Status {
  SINGLE
  DIVORCED
  MARRIED
  WIDOWED
  TAKEN
}

type UserInfo {
  location: Region
  status: Status
  gender: Gender
  dateOfBirth: String
  profileLikes: Int
  bio: String
  tags: [String]
  prefRegions: [Region]
}

type Query {
  getUserCount: Int!
  getAllUsers: [User!]!
  findUserByEmail(email: String): User
  findUserById(id: ID!): User
  currentUser: User!
}

type Mutation {
  addNewUser(
    username: String!
    firstname: String!
    lastname: String!
    password: String!
    passwordconf: String!
    email: String!
  ): User
  deleteUserById(
    id: ID!
  ): User
  login(
    email: String!
    password: String!
  ): Token
  updateUserAccount(
    id: ID!
    username: String
    firstname: String
    lastname: String
    email: String
  ): User
  updateUserInfo(
    id: ID!
    location: Region
    status: Status
    gender: Gender
    dateOfBirth: String
    bio: String
    tags: [String]
    prefRegions: [Region]
  ): UserInfo
  updateUserPassword(
    id: ID!
    password: String!
    passwordconf: String!
  ): User
}
`

module.exports = { typeDefs }
