const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Book {
    bookId: String
    authors:[String]
    description: String
    title: String
    image: String
    link:String
}

type User {
    _id: id
    username: String
    email: String
    bookCount: Integer
    savedBooks[Book]        
}

type Query {
    me: User  
}

type Auth {
    token: ID!
    user: User
}

type Mutation{
login(email: String!, password: String!): Auth
addUser(username: String!, email: String!, password: String!): Auth
saveBook: (authors[String], title: String!, bookId: String!, image: String!, link: String!):User
removeBook: (bookId:String!):User
}
`;








// export the typeDefs





module.exports = typeDefs;