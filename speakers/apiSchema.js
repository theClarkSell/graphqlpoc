module.exports = {
  speakerSchema: [`
    input SpeakerInput {
      firstName: String!
      lastName: String!
      email: String!
    }

    type Speaker {
      id: ID!
      email: String!
      firstName: String!
      lastName: String!
      sessions: [Session]
    }
  `]
}
