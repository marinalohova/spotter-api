import { gql } from 'apollo-server';

const beatSheet = gql`
  type BeatSheet {
    id: ID
    title: String
    acts: Acts
  }

  type BeatSheets {
    edges: [BeatSheet]
    page: Int
    pageSize: Int
    total: Int
  }
`;

export default beatSheet;