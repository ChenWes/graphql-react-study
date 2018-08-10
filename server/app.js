const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/graphql');
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('server listening on port 4000')
})