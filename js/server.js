const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello world!'
};

const $PORT = process.env.port || 3000;

const app = express();

app.get('/', (req, res) => res.send('Welcome to GraphQL with express!'));

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true, // Browser tool for querying GraphQL
}));

app.listen($PORT, () => console.log(`Now browse to localhost:${$PORT}/graphql`));
