This is an overall Proof Of Concept built exploring GraphQL hosted inside of hapi.js using Apollo as the GraphQL implementation.

# Packages Used
* webserver: hapi
* graphql core: graphql
* graphql implementation: apollo
* logging: winston
* data layer: mongoose / mongodb
* lowdash

# Demo Execution
1. `npm install`
2. `.env` file will need the proper connection string for the database.
3. `npm start`

# Browsing
* Graphiql (Web Query IDE) - [http://localhost:8000/graphiql](http://localhost:8000/graphiql)
* Graphql Endpoint `/graphql` - [http://localhost:8000/graphql](http://localhost:8000/graphql)

# Interesting Queries

Simple Query

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

Query two types separately:
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
mutation ($newSpeaker: SpeakerInput!) {
  createSpeaker(newSpeaker: $newSpeaker) {
    id
  }
}
```
Passing Arguments

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

# Functional Areas Yet To Explore
  * Schema Stitching
  * Data loaders
  * Data Connection. Not sure if it should be where it's placed right now.
  * Filtering
  * Paging
  * Logging
  * Splitting Types and Mutations then composing them
  * TypeScript Conversion
  * Proper async\await usage across the sample
  * Granularity of Schema
  * Extended Validation

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
