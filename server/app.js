const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

//allow corss-origin
app.use(cors());

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