import { gql } from 'apollo-server';

const act = gql`
  type Act {
    id: ID
    description: String
    beats: Beats
  }

  type Acts {
    edges: [Act]
    page: Int
    pageSize: Int
    total: Int
  }
  
  input CreateActInput {
    description: String!
    beats: [CreateBeatInput]
  }
  
  input GetActInput {
    id: ID!
  }
  
  input FilterInput {
    search: String
  }
  
  extend type Query {
    getAct(input: GetActInput!): Act! 
    listActs(filter: FilterInput): Acts!
  }
    
  extend type Mutation {
    createAct(input: CreateActInput!): Act!
    deleteAct(input: GetActInput!): Act!
  }
`;

export default act;
