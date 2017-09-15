
module.exports = {
  sessionSchema: [`
    input SessionInput {
      title: String!
      description: String!
      speakerId: Int
    }

    type Session {
      id: ID!
      title: String!
      description: String!
      speakers: [Speaker]
    }
  `]
}
