const { User, Book, Auth } = require("../models");

const resolvers = {
  Query: {
    me: async () => {
      return User.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    login: async (parent, args) => {
      const user = await User.findOneAndUpdate();
      //token?
      return user;
    },
    saveBook: async (parent, args) => {
      const user = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks }},
        { new: true }
      );
      return user;
    },
    removeBook: async (parent, args) => {
      const user = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks }},
        { new: true }
      );
      return user;
    },
  },
};

module.exports = resolvers;
