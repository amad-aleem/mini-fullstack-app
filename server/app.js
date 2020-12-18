const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const Connect = require('./config/db')

const app = express()
//DB connection
Connect();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3001, () => {
    console.log('Server is up on port: 3001')
})
