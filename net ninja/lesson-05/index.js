import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";

const server = new ApolloServer({
    typeDefs,
    // resolvers -> function which tells us how to response to query for different data on the graph
})

const { url } = startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log("Server started at ", 4000)