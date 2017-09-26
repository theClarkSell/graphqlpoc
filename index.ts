require('dotenv').load()

import * as Hapi from 'hapi'
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi'
import * as logger                        from './utility/logger'
import * as mongo                         from './db/mongo'

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
      schema: require('./graphSchema'),
      context: {
        mongo                           //could pass things in here like user context down to each resolver.
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
