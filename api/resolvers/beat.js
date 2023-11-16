export default {
  Mutation: {
    createBeat: async (parent, { input }, { dataSources }) => {
      return dataSources.Beat.createBeat(input);
    },
    updateBeat: async (parent, { input }, { dataSources }) => {
      return dataSources.Beat.updateBeat(input);
    },
    deleteBeat: async (parent, { input }, { dataSources }) => {
      return dataSources.Beat.deleteBeat(input);
    },
  },
};