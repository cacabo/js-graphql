var { graphql, buildSchema } = require('graphql');

// NOTE this leverages template literals:
// effectively, these can be plugged in as JS code anywhere without the need
// for escape characters or handling multi-line strings.
// This syntax is increasingly being used, namely by GraphQL and Styled Components.
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => 'Hello world!'
};

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
