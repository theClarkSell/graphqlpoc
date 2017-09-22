
The following repo is a proof of concept built to explore in depth GraphQL. It's built on top of hapi.js and Apollo.

## POC Concept
Create an set of api's which manage a conference website. This means modeling the relationship of a series of events, their speakers and the speakers sessions.

This was selected due to the many to many relationship of the schema.

* Events have 1-M Speakers and Sessions.
* Speakers have 1-M Sessions
* Sessions have 1-M Speakers
* A Speaker can be in multiple Events
* A Session can be in multiple Events

## Areas Explored:
  * Deprecating fields
  * Composing Types
  * Composing Queries and Mutations
  * Schema Generation
  * Queries, Mutations, Built In Directives, Field Resolvers
  * Context

## Functional Areas Yet To Explore
  * Authentication and Authorization
  * Schema Stitching
  * Data loaders
  * Filtering,Paging
  * Custom Logging in the pipeline
  * TypeScript Conversion
  * Extended Validation, think an email address

## Github Tags
There are multiple versions of this POC at different states of development.
* [ApolloSample](https://github.com/csell5/graphqlpoc/tree/ApolloSample) was the source base using the Apollo framework to generate the schema.
* [graphQLTypes](https://github.com/csell5/graphqlpoc/tree/graphQLTypes) leverage the GraphQL framework to build and compose the schema.

# Setup and Running
## Packages Used
  * webserver: hapi
  * graphql core: graphql
  * graphql implementation: apollo
  * logging: winston
  * data layer: mongoose / mongodb
  * lowdash: used to merge schemas, mutations and such at runtime.

## Demo Execution
  1. `npm install`
  2. `.env` file will need the proper connection string for a database.
  3. `npm start` this runs `nodemon ./index`

## Browsing
  * Graphiql (Web Query IDE) - [http://localhost:8000/graphiql](http://localhost:8000/graphiql)
  * Graphql Endpoint `/graphql` - [http://localhost:8000/graphql](http://localhost:8000/graphql)


# Interesting Queries
Basic Query

```
  query {
    sessions {
      id
      title
      description
    }
  }
```

Nested Query
```
  query {
    sessions {
      title
      description
      speakers {
        firstName
        lastName
      }
    }
  }
```

Query two types "separately":
```
  query {
    events {
      name
      year
    }
    sessions {
      title
      id
    }
  }
```

# Interesting Mutations
Create a new Speaker passing in arguments
```
mutation ($newSpeaker: SpeakerInputType!) {
  createSpeaker(newSpeaker: $newSpeaker)
}
```
Passing arguments via custom input types

```
{
	"newSpeaker": {
    "firstName": "jimmy",
    "lastName": "johns",
    "email": "eatjjs@aol.com"
  }
}
```

# Directives
There are two built in directives `@skip` and `@include`

```
query ($skipMe: Boolean!) {
  sessions {
    title @skip (if: $skipMe)
  }
}
```
Where `$skipMe` is defined in the passed in arguments
```
{
  "skipMe": true
}
```

# Helpful Resources:

  * graphql spec: [https://facebook.github.io/graphql](https://facebook.github.io/graphql)
  * graphql on github: [https://github.com/graphql](https://github.com/graphql)

## Learn  
  * [Learn Graph](http://graphql.org/learn) by facebook
  * [How to GraphQL](https://www.howtographql.com/) by Graphcool
  * [GraphQL Cheatsheet](https://github.com/sogko/graphql-schema-language-cheat-sheet)
  * [Learning GraphQL by Mugli](https://github.com/mugli/learning-graphql)
  * [Explore GraphQL](https://www.graphql.com) by Apollo ( good primer around the web )
  * [Graphcool Docs](https://www.graph.cool/docs/)

## Samples
  * [How To GraphQL Hackernews Node.js/Express Sample](https://github.com/howtographql/graphql-js)
  * [GitHunt API](https://github.com/apollographql/GitHunt-API)
  * [Rising Stack GraphQL Server](https://github.com/RisingStack/graphql-server)
  * [Setting up GraphQL with Hapi.js](https://blog.callstack.io/super-simple-graphql-server-with-hapi-js-mongodb-and-a-new-apollo-server-41418ded2faf)
  * [Parabolinc/Action](https://github.com/ParabolInc/action/tree/master/src/server/graphql)

## Good Blog Posts
  * [Designing GraphQL Mutations](https://dev-blog.apollodata.com/designing-graphql-mutations-e09de826ed97)
  * [Moving from REST to GraphQL](https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247)
  * [Tutorial: How to build a GraphQL server](https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035)
  * [Give it a REST: use GraphQL for your APIs](https://medium.freecodecamp.org/give-it-a-rest-use-graphql-for-your-apis-40a2761e6336)
  * [So what’s this GraphQL thing I keep hearing about?](https://medium.freecodecamp.org/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf)
  * [GraphQL VS Falcor](https://dev-blog.apollodata.com/graphql-vs-falcor-4f1e9cbf7504)
  * [Moving existing API from REST to GraphQL](https://medium.com/@raxwunter/moving-existing-api-from-rest-to-graphql-205bab22c184)
  * [Your First GraphQL Server](https://medium.com/the-graphqlhub/your-first-graphql-server-3c766ab4f0a2)

## Framework Areas
### Core Concepts
  * [GraphQL Tour: Interfaces and Unions](https://medium.com/the-graphqlhub/graphql-tour-interfaces-and-unions-7dd5be35de0d)

### Directives
  * [GraphQL Tour: Directives](https://medium.com/the-graphqlhub/graphql-tour-directives-558dee4fa903)
    * [https://github.com/clayallsopp/graphql-directives](https://github.com/clayallsopp/graphql-directives)

## Tools
  * [10+ Awesome Tools and Extensions For GraphQL APIs](https://nordicapis.com/10-awesome-tools-and-extensions-for-graphql-apis/)

## Community Efforts
### Apollo
  * [Apollo WebSite](https://www.apollodata.com/)
  * [Apollo Developers](http://dev.apollodata.com/)
  * [Apollo On Github](https://github.com/apollographql)
  * [Apollo Server](https://github.com/apollographql/apollo-server)

#### Mobile
  * [Apollo Android Client](https://dev-blog.apollodata.com/launching-apollo-graphql-on-android-40ee0b5789bd)
  * [What’s coming in Apollo Client 2.0](https://dev-blog.apollodata.com/whats-coming-in-apollo-client-2-0-bcd8ea64acbd)
