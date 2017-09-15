require('dotenv').load()

const Hapi                          = require('hapi')
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi')

const {executableSchema} = require('./graphSchema')
const logger             = require('./utility/logger')
const mongo              = require('./connectors/mongo')

const server = new Hapi.Server()
const port = Number(process.env.PORT || 8000)

server.connection({
  port: port
})

const paths = {
  graphql: `/graphql`,
  graphiql: `/graphiql`
}

server.register({
  register: graphqlHapi,
  options: {
    path: paths.graphql,
    graphqlOptions: {
      pretty: true,
      schema: executableSchema,
      context: {
        mongo
      }
    }
  }
})

server.register({
  register: graphiqlHapi,
  options: {
    path: paths.graphiql,
    graphiqlOptions: {
     endpointURL: `${paths.graphql}`
   }
  }
})

server.route(require('./routes')())

exports.listen = () => {
  server.start((err) => {

    if (err) {
      logger.debug(`Http server start error: ${err}`)
      throw err
    }

    logger.debug(`Http server listening on http://localhost:${port}`)
  })
}

exports.close = (next) => {
  server.stop(next)
}

if (require.main === module) {
  exports.listen()
}
