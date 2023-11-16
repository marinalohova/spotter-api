import { gql } from 'apollo-server';

const root = gql`
  enum CameraAngle {
    Pan
    Tilt
    Zoom
    POV
    CU
    LS
    MS
  }
  
  input FilterInput {
    search: String
  }
  
  type Query {
    root: String
  },
  type Mutation {
    root: String
  },
   type Subscription{
    root: String
  }
`;

export default root;
