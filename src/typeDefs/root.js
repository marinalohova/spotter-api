import { gql } from 'apollo-server';

const root = gql`
  enum CameraAngle {
    PAN
    TILT
    ZOOM
    POV
    CU
    LS
    MS
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
