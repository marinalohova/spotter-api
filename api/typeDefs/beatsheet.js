import { gql } from 'apollo-server';

const beatsheet = gql`
  type Beatsheet {
    id: ID
    title: String
    acts: Acts
  }

  type Beatsheets {
    edges: [Beatsheet]
    page: Int
    pageSize: Int
    total: Int
  }
 
   input UpdateBeatsheetInput {
    id: ID!
    acts: [CreateActInput]!
  }
  
  input GetBeatsheetInput {
    id: ID!
  }
  
   extend type Query {
    getBeatsheet(input: GetBeatsheetInput!): Beatsheet! 
    listBeatsheets(filter: FilterInput): Beatsheets!
  }
    
  extend type Mutation {
    updateBeatsheet(input: UpdateBeatsheetInput!): Beatsheet!
  }
`;

export default beatsheet;