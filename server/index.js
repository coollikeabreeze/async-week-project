const path = require('path');
const express = require('express');
const app = express();

const volleyball = require('volleyball')
const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({ debug }))
app.use(express.static(path.join(__dirname, '../public')))


//APOLLO & PRISMA
const fs = require('fs');
const { ApolloServer } = require('apollo-server-express');
const { getUserId } = require('./graphql/utils')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { PubSub } = require('apollo-server')
const pubsub = new PubSub()
const Query = require('./graphql/resolvers/Query')
const Mutation = require('./graphql/resolvers/Mutation')
const Subscription = require('./graphql/resolvers/Subscription')
const User = require('./graphql/resolvers/User')
const Link = require('./graphql/resolvers/Link')
const Vote = require('./graphql/resolvers/Vote')


//body-parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public'));
});

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'graphql/schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      userId:
        req && req.headers.authorization
        ? getUserId(req)
        : null
    }
  }
})

server.applyMiddleware({ app });

app.get("/rest", (req, res) => {
  res.json({
    data: "API is working...",
  });
});

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);

// app.use((err, req, res) => {
//   if (process.env.NODE_ENV !== 'test') console.error(err.stack)
//   res.status(err.status || 500).send(err.message || 'Internal server error')
// })

//module.exports = app
