import { gql } from 'apollo-server';

const beat = gql`
  type Beat {
    id: ID
    title: String
    description: String
    duration: String
    cameraAngle: CameraAngle
  }

  type Beats {
    edges: [Beat]
    page: Int
    pageSize: Int
    total: Int
  }
   
  input CreateBeatInput {
    title: String!
    description: String!
    duration: String!
    cameraAngle: CameraAngle
  }
  
  input UpdateBeatInput {
    id: ID!
    actId: ID
    title: String
    description: String
    duration: Int
    cameraAngle: CameraAngle
  }
  
  input DeleteBeatInput {
    id: ID!
  }
    
  extend type Mutation {
    createBeat(input: CreateBeatInput!): Beat!
    updateBeat(input: UpdateBeatInput!): Beat!
    deleteBeat(input: DeleteBeatInput!): Beat!
  }
`;

export default beat;