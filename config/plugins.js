module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql/playground",
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true
      }
    }
  }
});
