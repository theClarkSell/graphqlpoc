
module.exports = {
  eventSchema: [`
    type Event {
      id: ID!
      name: String!
      description: String
      year: Int
      speakers: [Speaker]
      sessions: [Session]
    }
  `]
}
