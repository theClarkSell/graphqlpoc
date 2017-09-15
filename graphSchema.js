
const logger                   = require('./utility/logger')
const _                        = require('lodash')
const { makeExecutableSchema } = require('graphql-tools')

// graphql implementations
const eventResolvers   = require('./events/apiResolvers')
const sessionResolvers = require('./sessions/apiResolvers')
const speakerResolvers = require('./speakers/apiResolvers')

const {eventSchema}    = require('./events/apiSchema')
const {sessionSchema}  = require('./sessions/apiSchema')
const {speakerSchema}  = require('./speakers/apiSchema')

const rootSchema = [`
  type Queries {
    events: [Event]
    sessions: [Session]
    speakers: [Speaker]
  }

  type Mutations {
    createSpeaker(newSpeaker: SpeakerInput!): Speaker
    createSession(newSession: SessionInput!): Session
  }

  type Subscription {
    newSession: Session!
  }

  schema {
    query: Queries
    mutation: Mutations
    subscription: Subscription
  }
`]

const typeDefs = [...eventSchema, ...sessionSchema, ...speakerSchema, ...rootSchema]
//logger.data(typeDefs)

const resolvers = _.merge(eventResolvers, sessionResolvers, speakerResolvers)

exports.executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})
  
