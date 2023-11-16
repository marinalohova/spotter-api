export default {
  Act: {
    beats: async (parent) => {
      const edges = parent.beats;
      return {
        edges: edges || [],
        total: edges ? edges.length : 0,
      };
    },
  },
  Query: {
    getAct: async (root, { input }, { dataSources }) => {
      return dataSources.Act.getAct(input);
    },
    listActs: async (root, args, { dataSources }) => {
      const { rows: edges, count: total } = await dataSources.Act.listActs(args);
      return {
        edges,
        total,
      };
    },
  },
  Mutation: {
    createAct: async (root, { input }, { dataSources }) => {
      return dataSources.Act.createAct(input);
    },
    deleteAct: async (root, { input }, { dataSources }) => {
      return dataSources.Act.deleteAct(input);
    },
  }
};



