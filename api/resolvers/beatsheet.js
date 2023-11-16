export default {
  Beatsheet: {
    acts: async (parent) => {
      const edges = parent.acts;
      return {
        edges: edges || [],
        total: edges ? edges.length : 0,
      };
    },
  },
  Query: {
    getBeatsheet: async (root, { input }, { dataSources }) => {
      return dataSources.Beatsheet.getBeatsheet(input);
    },
    listBeatsheets: async (root, args, { dataSources }) => {
      const { rows: edges, count: total } = await dataSources.Beatsheet.listBeatsheets(args);
      return {
        edges,
        total,
      };
    },
  },
  Mutation: {
    updateBeatsheet: async (root, { input }, { dataSources }) => {
      return dataSources.Beatsheet.updateBeatsheet(input);
    },
  }
};



